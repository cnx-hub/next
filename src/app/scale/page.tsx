import React from "react";
import Hero from "../components/hero";
import scale from '/public/scale.jpg'

export default function page() {
  return (
    <div>
      <Hero imgUrl={scale} altTxt="Scale" content="Scale~~~" />
    </div>
  );
}
