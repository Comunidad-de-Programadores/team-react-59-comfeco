import React, { useEffect, useState } from "react";
import Layout from "../../components/general/Layout";
import Icono from "../../components/nano/Icono";
import A from "../../components/nano/A";
const editar = () => {
  const [user, setUser] = useState({
    nickname: "",
    gender: "",
    birthdate: "",
    country: "",
    email: "",
    area: "",
    facebookLink: "",
    githubLink: "",
    twitterLink: "",
    linkedinLink: "",
    image: "",
    biography: "",
  });

  const [error, setError] = useState({
    exist: false,
    error: null,
  });

  const getUser = () => {
    fetch("/api/get_user", {
      headers: {
        Authorization: `${localStorage.token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        setUser(data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.password.value != e.target.repeat_password.value) {
      alert("no son la misma contraseña");
      return;
    }
    fetch("/api/edit_profile", {
      method: "POST",
      headers: new Headers([
        ["Content-type", "application/json"],
        ["Authorization", `${localStorage.token || sessionStorage.token}`],
      ]),
      body: JSON.stringify({
        nickname: e.target.nickname.value,
        email: e.target.email.value,
        gender: e.target.gender.value,
        birthdate: e.target.birthdate.value,
        country: e.target.country.value,
        area: e.target.area.value,
        password: e.target.password.value,
        biography: e.target.biography.value,
        githubLink: e.target.githubLink.value,
        linkedinLink: e.target.linkedinLink.value,
        twitterLink: e.target.twitterLink.value,
        facebookLink: e.target.facebookLink.value,
      }),
    })
      .then((data) => data.json())
      .then((data) => getUser());
  };

  return (
    <>
      <Layout>
        <main>
          <div className="backgroundHome"></div>
          <div className="backgroundLigth"></div>
          <div className="backgroundRegister"></div>
          <div className="EditUser">
            <div className="buttonBack">
              <A href="/mi-perfil" css="animationCircle" id="buttonBack">
                <Icono css="icon-reply" />
              </A>
            </div>
            <div className="title">
              <h3>Editar Perfi</h3>
            </div>

            <form
              className="containerInfo row around-xs"
              onSubmit={handleSubmit}
            >
              <div className="img col-sm-6  col-xs-12 center-xs">
                <img src={user.image} alt="default-avatar.png" />
              </div>
              <div className="row col-sm-6  col-xs-12 main center-xs">
                <div className="col-xs-12 nick">
                  <label htmlFor="">
                    <Icono css="icon-user" />
                    nick:
                    <input
                      type="text"
                      name="nickname"
                      defaultValue={user.nickname}
                    />
                  </label>
                </div>

                <div className="col-xs-12 genero">
                  <label htmlFor="">
                    <Icono css="icon-intersex" />
                    Género:
                    <input
                      type="text"
                      name="gender"
                      defaultValue={user.gender}
                    />
                  </label>
                </div>
                <div className="col-xs-12 nacimiento">
                  <label htmlFor="">
                    <Icono css="icon-calendar" />
                    Fecha de Nacimiento:
                    <input
                      type="text"
                      name="birthdate"
                      defaultValue={user.birthdate}
                    />
                  </label>
                </div>
                <div className="col-xs-12 pais">
                  <label htmlFor="">
                    <Icono css="icon-flag" />
                    País:
                    <input
                      type="text"
                      name="country"
                      defaultValue={user.country}
                    />
                  </label>
                </div>
              </div>
              <div className="row col-sm-6  col-xs-12 redes center-xs">
                <div className="titleRedes">
                  <h3>Tus Redes Sociales</h3>
                </div>
                <div className="col-xs-12 facebookRed">
                  <label htmlFor="">
                    <Icono css="icon-facebook" />
                    facebook.com/
                    <input
                      type="text"
                      name="facebookLink"
                      defaultValue={user.facebookLink}
                    />
                  </label>
                </div>
                <div className="col-xs-12 twitterRed">
                  <label htmlFor="">
                    <Icono css="icon-twitter" />
                    twitter.com/
                    <input
                      type="text"
                      name="twitterLink"
                      defaultValue={user.twitterLink}
                    />
                  </label>
                </div>
                <div className="col-xs-12 linkedinRed">
                  <label htmlFor="">
                    <Icono css="icon-linkedin" />
                    linkedin.com/in/
                    <input
                      type="text"
                      name="linkedinLink"
                      defaultValue={user.linkedinLink}
                    />
                  </label>
                </div>
                <div className="col-xs-12 githubRed mg-bottom">
                  <label htmlFor="">
                    <Icono css="icon-github1" />
                    github.com/
                    <input
                      type="text"
                      name="githubLink"
                      defaultValue={user.githubLink}
                    />
                  </label>
                </div>
              </div>
              <div className="row col-sm-6  col-xs-12 email center-xs">
                <div className="titleRedes">
                  <h3>Email & Área</h3>
                </div>

                <div className="col-xs-12 mail">
                  <label htmlFor="">
                    <Icono css="icon-mail-envelope-closed" />
                    Correo:
                    <input type="text" name="email" defaultValue={user.email} />
                  </label>
                </div>
                <div className="col-xs-12 encryption1">
                  <label htmlFor="">
                    <Icono css="icon-https " />
                    Contraseña:
                    <input type="text" name="password" />
                  </label>
                </div>
                <div className="col-xs-12 encryption2">
                  <label htmlFor="">
                    <Icono css="icon-enhanced_encryption" />
                    Comfirmar Contraseña:
                    <input type="text" name="repeat_password" />
                  </label>
                </div>
                <div className="col-xs-12 flash mg-bottom">
                  <label htmlFor="">
                    <Icono css="icon-flash" />
                    Área de conocimiento:
                    <input type="text" name="area" defaultValue={user.area} />
                  </label>
                </div>
              </div>
              <div className="row col-xs-12 bio center-xs">
                <div className="titleBio">
                  <h3>Biografía</h3>
                </div>
                <textarea
                  name="biography"
                  defaultValue={user.biography}
                ></textarea>
              </div>
              <div className="row col-xs-12 button center-xs">
                <button
                  className="edit submit"
                  name="editProfileSubmit"
                  id="editProfileSubmit"
                  type="submit"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default editar;
