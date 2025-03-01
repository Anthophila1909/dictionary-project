import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <h4>{meaning.partOfSpeech}</h4>
            <p>
              <strong>Definition:</strong> {meaning.definition}
            </p>
            <Examples examples={meaning.example} />
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
