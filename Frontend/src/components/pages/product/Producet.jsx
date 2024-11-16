import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Banner from "./sections/Banner";
import News from "./sections/Category";

function Menu() {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>
      <section id="news">
        <News />
      </section>
    </>
  );
}

export default Menu;
