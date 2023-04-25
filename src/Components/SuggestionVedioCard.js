import React from "react";

function SuggestionVedioCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="pl-5 w-96 flex">
      <img className="rounded-lg h-24 m-2" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold font-1px py-2">{title.slice(0,20)}</li>
        <li className="font-1px text-gray-600">{channelTitle}</li>
        <li className=" text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default SuggestionVedioCard;
