"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import HomeNav from "../Components/HomeNav";

const page = () => {
  const [episode, setEpisode] = useState({});
  const [servers, setServers] = useState({});
  let [currentEpi, setCurrentEpi] = useState(1)
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const parts = id.split('?');

    const idPart = parts[0];
    function fromKebabCase(str) {
      if (!str) return '';
      return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    const kebabCaseString = idPart;
    const normalname = fromKebabCase(kebabCaseString);
    const ep = searchParams.get("ep");

    // useEffect(() => {
    //   (async () => {
    //     try {
    //       const response = await axios.get(
    //         `https://api-aniwatch.onrender.com/anime/episodes/${id}`
    //       );
    //       const data = await response.data;
    //       setEpisode(data);
    //       console.log(`"watchPage1:" ${episode}`);

    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })();
    // }, []);
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get(
            `https://api-aniwatch.onrender.com/anime/servers?episodeId=${id}?ep=${currentEpi}`
          );
          const data = await response.data;
          setServers(data);
          console.log(`"watchPage2:" ${servers}`);

        } catch (error) {
          console.log(error);
        }
      })();
    }, [currentEpi]);

    const handleClick = () => {
      setCurrentEpi(currentEpi++);
    }

  return (
    <div>
      <HomeNav />
      <div className="pt-28 h-screen w-screen ">
        <div className="h-full w-full bg-white px-5">
          <h1>{normalname}</h1>
        </div>
      </div>
  </div>
  )
}

export default page