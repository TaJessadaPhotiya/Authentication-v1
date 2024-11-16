import { useEffect, useRef, useState } from "react";
import Banner from "./sections/Banner";
import News from "./sections/News";

function Contact() {
  return (
    <>
Contact
      <section id="banner">
        <Banner />
      </section>
      <section id="news">
        <News />
      </section>
    </>
  );
}

export default Contact;
