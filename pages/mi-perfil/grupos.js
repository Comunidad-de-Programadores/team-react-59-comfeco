import React from "react";

import Grupos from "../../components/perfil/union/Grupos";

import LayoutMiPerfil from "../../components/perfil/union/LayoutMiPerfil";

const grupos = ({list_group}) => {
  return (
    <LayoutMiPerfil>
      <Grupos grupos={list_group} />
    </LayoutMiPerfil>
  );
};

export default grupos;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/list_group");
  const list_group = await res.json();
  return {
    props: {
      list_group,
    },
  };
}
