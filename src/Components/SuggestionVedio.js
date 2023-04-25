import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/const";
import SuggestionVedioCard from "./SuggestionVedioCard";

function SuggestionVedio() {
  const [vedio, setvedio] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const datafetched = await fetch(YOUTUBE_VIDEO_API);
      const data = await datafetched.json();
      setvedio(data.items);
    };
    getdata();
  }, []);
  return (
  <div>
    {vedio.map((vedio) => (
      <Link to={"/watch?v=" + vedio.id}>
        <SuggestionVedioCard key={vedio.key} info={vedio} />
      </Link>
    ))}
  </div>
  )
}

export default SuggestionVedio;
