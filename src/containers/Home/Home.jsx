import React from "react";


const Home = props => {
  const { user } = props;

  let homeJSX;

  if (user) {
    const {
      displayName,
      email,
      photoURL,
      metadata: { lastSignInTime },
    } = user;

    homeJSX = (
      <section>
        <h2>{displayName}</h2>
        <p>{email}</p>
        <p>{lastSignInTime}</p>
        <img src={photoURL} alt={displayName} />
      </section>
    );
  } else {
    homeJSX = (
      <section>
        <h2>No User</h2>
      </section>
    );
  }

  return homeJSX;
};

export default Home;
