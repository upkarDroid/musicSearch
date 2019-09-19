import React from "react";

const msToTime = duration => {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
console.log(msToTime(300000));
const ResultItem = ({ result }) => {
  return (
    <div className="item__container">
      <a
        href={result.collectionViewUrl}
        className="item__info"
        target="_blank"
        style={{ backgroundImage: `url(${result.artworkUrl100})` }}
      >
        <div className="item__info--overlay">
          <span>{result.collectionName}</span>
        </div>
      </a>
      <div className="item__meta">
        <a
          href={result.collectionViewUrl}
          className="item__meta--name"
          target="_blank"
        >
          {result.collectionName}
        </a>
        <a
          href={result.artistViewUrl}
          className="item__meta--artist"
          target="_blank"
        >
          {result.artistName}
        </a>
        <div className="item__meta--duration">
          {msToTime(result.trackTimeMillis)}
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
