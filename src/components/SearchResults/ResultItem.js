import React from "react";

const ResultItem = ({ result }) => {
  return (
    <div className="item__container">
      <div
        className="item__info"
        style={{ backgroundImage: `url(${result.artworkUrl100})` }}
      >
        <div className="item__info--overlay">
          <span>{result.collectionName}</span>
        </div>
      </div>
      <div className="item__meta">
        <div className="item__meta--name">{result.collectionName}</div>
        <div className="item__meta--artist">{result.artistName}</div>
      </div>
    </div>
  );
};

export default ResultItem;
