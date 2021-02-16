import React from "react";
import Link from 'next/link'

const Home = (props) => {
  return (
    <>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <br/>
      <Link href="/terms-conditions">
        <a>terms conditions</a>
      </Link>
    </>
  )
};

export default Home;