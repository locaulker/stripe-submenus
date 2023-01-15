import React from "react"
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./context"

const Hero = () => {
  const data = useGlobalContext()
  console.log(data)

  return <h4>hero component</h4>
}

export default Hero
