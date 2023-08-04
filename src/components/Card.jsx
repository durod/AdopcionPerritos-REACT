import React from "react";
import Tags from "./Tags";

export default function Card(props) {
  const { imageSrc, name, description, tags } = props;

  return (
    <div className="cardprincipal">
      <img src={imageSrc} alt={name} className="dog-image"/>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tags-container">
        {tags.map(function (tag, index) {
          return <Tags key={index} text={tag.text} color={tag.color} />;
        })}
      </div>
    </div>
  );
}
