import React from "react";

export default function Tags(props) {
  const { text, color } = props;
  return <span className={`badge bg-${color}`}>{text}</span>;
}
