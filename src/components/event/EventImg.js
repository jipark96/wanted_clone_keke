import React from "react";

const EventImg = () => {
  return (
    <>
      <div className="event_wrap">
        <img src={process.env.PUBLIC_URL + "/event.png"} alt="" />
      </div>
    </>
  );
};

export default EventImg;
