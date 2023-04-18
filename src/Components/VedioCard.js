import React from "react";

function VedioCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 my-2 w-72">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className=" text-gray-600">{channelTitle}</li>
        <li className=" text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export const AddVediocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-1 w-72 border border-gray-300  text-gray-500">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        <div className="flex justify-end mr-2">
          <li>Add</li>
        </div>
      </ul>
    </div>
  );
};

export default VedioCard;
