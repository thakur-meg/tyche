import '../styles/Home.css';
import React from 'react'

function Home() {
  return (
    <div className="home">
  <div className="home__container">
    <img
      src="../assests/img/logo-light.svg"
      alt="Tyche logo"
      className="home__image"
    />
    <button className="home__login">
      Login with Google
    </button>
  </div>
</div>
  )
}

export default Home