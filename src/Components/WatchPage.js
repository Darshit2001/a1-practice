import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";

function WatchPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const id=searchParams.get('v');
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="yes"
      ></iframe>
    </div>
  );
}

export default WatchPage;
