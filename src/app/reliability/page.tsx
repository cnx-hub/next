import React from "react";
import Hero from "../components/hero";
import reliabilitySrc from '/public/reliability.jpg'

export default function page() {
  return (
    <div>
      <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="Reliability~~~" />
    </div>
  );
}
