import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestionVedio from "./SuggestionVedio";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const Channelname = searchParams.get("title");
  const VedioTitle = searchParams.get("channel");
  console.log("darshit", VedioTitle,Channelname);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex px-5">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen="yes"
          ></iframe>
          <div className="pt-5 text-2xl">
            <spam className="font-bold">{Channelname} </spam> || 
            <spam className="font-bold"> {VedioTitle} </spam>
          </div>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div className="flex flex-row-">
        <CommentsContainer />
        <div className="mt-10">
          <hr></hr>
          <SuggestionVedio />
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
