import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <p>{meaning.partOfSpeech}</p>
            <p>{meaning.definition}</p>
            <p>{meaning.example}</p>
          </div>
        );
      })}
    </div>
  );
}
