import React from 'react';

const VideoComponent = ({ videoUrl }) => {
  // Function to extract the video ID from a YouTube URL
  const getYouTubeId = (url) => {
    const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S+\?v=))([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube URL provided</p>;
  }

  return (
    <div className=" container mx-auto relative w-full pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
