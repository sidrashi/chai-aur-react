import conf from "../conf/conf";
import { Client, ID, Storage, Query, TablesDB } from "appwrite";

export class Service {
  client = new Client();
  tablesDB;
  storage;

  constructor() {
    this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);
    this.tablesDB = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablesDB.createRow(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.tablesDB.updateRow(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.tablesDB.deleteRow(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
      // eslint-disable-next-line no-unreachable
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.tablesDB.getRow(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.tablesDB.listRows(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
