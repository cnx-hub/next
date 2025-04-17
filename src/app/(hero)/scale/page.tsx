import React from "react";
import Hero from "../../components/hero";
import scale from '/public/scale.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale',
}


export default function page() {
  return (
    <div>
      <Hero imgUrl={scale} altTxt="Scale" content="Scale~~~" />
    </div>
  );
}
