import React, { useEffect } from "react";
import moleImg from './images/molehill.png'

const EmptySlot = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw", height: "350px" }}
        src={moleImg}
        onClick={props.handleClick}
      />
    </div>
  );
};

export default EmptySlot;