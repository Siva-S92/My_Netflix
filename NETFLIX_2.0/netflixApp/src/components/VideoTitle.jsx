import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

function VideoTitle({title, overview}) {
  return (
    <div className="absolute text-white pt-[25%] p-12 w-[vw] aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/3 mt-4">
        {overview}
      </p>
      <div className="flex gap-2 mt-8">
        <button
          type="button"
          className="px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 flex items-center justify-center gap-1"
        >
          <span>
            <CiPlay1 />
          </span>
          Play
        </button>
        <button
          type="button"
          className="px-6 py-2 text-black rounded-md flex items-center justify-center gap-1 bg-gray-500 bg-opacity-60"
        >
          <span>
            <CiCircleInfo />
          </span>
          watch more..
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
