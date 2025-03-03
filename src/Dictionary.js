import React, { useState } from "react";
import Response from "./Response";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [response, setResponse] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResponse(response.data);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // documentation: https://www.shecodes.io/learn/apis/images
    const photoApiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center">Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleKeywordChange}
          className="input"
          placeholder="search i.e. for cat, programming, sunrise ..."
        />
        <input type="submit" value="Search" className="input-button" />
      </form>
      <Response response={response} />
      <Photos photos={photos} />
    </div>
  );
}
