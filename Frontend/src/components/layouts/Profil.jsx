import React from "react";

function Profil({ onClick }) {
  return (
    <div className=" ">
      <figure
        className="w-[40px] h-[40px] cursor-pointer"
        onClick={onClick}
      >
        <img
          className="w-full h-full rounded-full shadow-md"
          src="/img/1.jpg"
          alt=""
        />
      </figure>
    </div>
  );
}

export default Profil;
