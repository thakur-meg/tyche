import '../styles/Home.css';
import logodark from '../assests/img/logo-dark.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from '../firebase';
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';


function Home() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect((history) => {
    if (loading) return;
    if (user) history.push("/dashboard");
  }, [loading, user]);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src={logodark}
          alt="Tyche logo"
          className="home__image"
        />
        <button className="home__login" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Home;