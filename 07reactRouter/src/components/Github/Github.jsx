import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/sidrashi")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 text-white text-3xl p-4 bg-gray-400">
      Github followers: {data.followers}
      <img  src={data.avatar_url} alt="Git picture" srcset="" />
    </div>
  );
}

export default Github;


export const githubinfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/sidrashi")
    return res.json()
}