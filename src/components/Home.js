import '../styles/Home.css';
import React from 'react'
import logodark from '../assests/img/logo-dark.svg';

function Home() {
  return (
    <div className="home">
  <div className="home__container">
    <img
      src={logodark}
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