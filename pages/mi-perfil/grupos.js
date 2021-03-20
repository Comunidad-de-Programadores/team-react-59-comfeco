import React from "react";
import absoluteUrl from "next-absolute-url";

import LayoutMiPerfil from "../../components/perfil/union/LayoutMiPerfil";
import Grupos from "../../components/perfil/union/Grupos";

const grupos = ({ list_group }) => {
  return (
    <LayoutMiPerfil active={3}>
      <Grupos grupos={list_group} />
    </LayoutMiPerfil>
  );
};

export default grupos;

grupos.getInitialProps = async ({ req }) => {
  const { host, protocol } = absoluteUrl(req);
  const res = await fetch(`${protocol}//${host}/api/list_group`);
  const list_group = await res.json();
  return {
    list_group,
  };
};
