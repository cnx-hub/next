import React from 'react'
import homeSrc from "../../public/home.jpg";
import Hero from './components/hero';

export default function page() {  
  return (
    <Hero imgUrl={homeSrc}  altTxt="Home" content="Professional Cloud Hosting" />
  )
}
