import React from "react";
import Meanings from "./Meanings";

export default function Response(props) {
  if (props.response) {
    let searchTerm = props.response.word;
    let phonetic = props.response.phonetic;
    let meanings = props.response.meanings;
    return (
      <div className="Response">
        <h2>{searchTerm}</h2>
        <h3>
          <em>{phonetic}</em>
        </h3>
        <Meanings meanings={meanings} />
      </div>
    );
  } else {
    return null;
  }
}
