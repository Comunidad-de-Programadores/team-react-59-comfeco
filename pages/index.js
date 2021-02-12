import React from "react";
import Link from 'next/link'

const Home = (props) => {
  return (
    <Link href="/login">
      <a>Login</a>
    </Link>
  )
};

export default Home;