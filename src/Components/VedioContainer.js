import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/const";
import VedioCard, { AddVediocard } from "./VedioCard";

export const VedioContainer = () => {
  const [vedio, setvedio] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const datafetched = await fetch(YOUTUBE_VIDEO_API);
      const data = await datafetched.json();
      setvedio(data.items);
      //console.log(vedio);
    };
    getdata();
  }, []);
  const k = vedio.length;
  let x = Math.floor(Math.random() * k + 1);

  return (
    <>
      <div className="flex flex-wrap">
        {vedio[x] && <AddVediocard info={vedio[x]} />}
        {vedio.map((vedio) => (
          <Link to={"/watch?v=" + vedio.id}>
            <VedioCard key={vedio.key} info={vedio} />
          </Link>
        ))}
        {/* <VedioCard info={vedio[0]}/> */}
      </div>
    </>
  );
};
