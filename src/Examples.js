import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <p>
          <strong>Example:</strong> {props.examples}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
