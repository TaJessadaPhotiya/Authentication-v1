import { useEffect, useRef, useState } from "react";
import Banner from "./sections/Banner";
import News from "./sections/News";
import Stories from "./sections/Stories";

function About() {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>
      <section id="news">
        <News />
      </section>
      <section id="stories">
        <Stories />
      </section>
    </>
  );
}

export default About;
