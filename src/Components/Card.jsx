import React from "react";
import Avatar from "./Avatar";

import Details from "./Details";
const Card = (props) => {
  return (
    <div className="container">
      
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img}/>
        </div>
        <div className="bottom">
          <Details detailInfo={props.phone}/>
          <Details detailInfo={props.email}/>
        </div>
      </div>
    </div>
  );
};
export default Card;
