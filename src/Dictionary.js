import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center">Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" value="Go" />
      </form>
    </div>
  );
}
