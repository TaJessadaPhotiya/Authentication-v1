import { useEffect, useRef, useState } from "react";
import Banner from "./sections/Banner";
import Autopilot from "./sections/Autopilot";

function Home() {
  return (
    <>
    Home
      <section id="banner">
        <Banner />
      </section>
      
      <section id="autopilot">
        <Autopilot />
      </section>
    </>
  );
}

export default Home;
