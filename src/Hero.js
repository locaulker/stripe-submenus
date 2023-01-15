import React from "react"
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./context"

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment Infrastructure for the Internet</h1>
          <p>
            Millions of companies of all sizes; from start-ups to Fortune 500s,
            use the Stripe software and APIs to accept payments online, send
            payouts, and manage their online businesses.
          </p>
          <button className="btn">Start Now!</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="Phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
