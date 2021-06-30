import styles from "../styles/Home.module.css";
import Footer from "./Layout/footer.jsx";
import Nav from "./Layout/nav.jsx";
import Header from "./Layout/header.jsx";
import Section1 from "./Layout/sections/section1.jsx";
import Section2 from "./Layout/sections/section2.jsx";
import Section3 from "./Layout/sections/section3.jsx";
import Section4 from "./Layout/sections/section4.jsx";
import Section5 from "./Layout/sections/section5.jsx";
import Section6 from "./Layout/sections/section6.jsx";
import Section7 from "./Layout/sections/section7.jsx";
import Section8 from "./Layout/sections/section8.jsx";
import Section9 from "./Layout/sections/section9.jsx";
import Section10 from "./Layout/sections/section10.jsx";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />

      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />

      <Footer />
    </div>
  );
}
