import React from "react";
import "./Results.css";

export default function Result(props) {
  if (props.results.length) {
    return <div className="Results"></div>;
  } else {
    return null;
  }
}
