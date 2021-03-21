import React from "react";
import Layout from "../../components/general/Layout";
import A from "../../components/nano/A";
import Icono from "../../components/nano/Icono";
const editar = () => {
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

            <div className="containerInfo row around-xs">
              <div className="img col-sm-6  col-xs-12 center-xs">
                <img src="/default-avatar.png" alt="default-avatar.png" />
              </div>
              <div className="row col-sm-6  col-xs-12 main center-xs">
                <div className="col-xs-12 nick">
                  <label htmlFor="">
                    <Icono css="icon-user" />
                    nick:
                    <input type="text" />
                  </label>
                </div>

                <div className="col-xs-12 genero">
                  <label htmlFor="">
                    <Icono css="icon-intersex" />
                    Género:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 nacimiento">
                  <label htmlFor="">
                    <Icono css="icon-calendar" />
                    Fecha de Nacimiento:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 pais">
                  <label htmlFor="">
                    <Icono css="icon-flag" />
                    País:
                    <input type="text" />
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
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 twitterRed">
                  <label htmlFor="">
                    <Icono css="icon-twitter" />
                    twitter.com/
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 linkedinRed">
                  <label htmlFor="">
                    <Icono css="icon-linkedin" />
                    linkedin.com/in/
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 githubRed mg-bottom">
                  <label htmlFor="">
                    <Icono css="icon-github1" />
                    github.com/
                    <input type="text" />
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
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 encryption1">
                  <label htmlFor="">
                    <Icono css="icon-https " />
                    Contraseña:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 encryption2">
                  <label htmlFor="">
                    <Icono css="icon-enhanced_encryption" />
                    Comfirmar Contraseña:
                    <input type="text" />
                  </label>
                </div>
                <div className="col-xs-12 flash mg-bottom">
                  <label htmlFor="">
                    <Icono css="icon-flash" />
                    Área de conocimiento:
                    <input type="text" />
                  </label>
                </div>
              </div>
              <div className="row col-xs-12 bio center-xs">
                <div className="titleBio">
                  <h3>Biografía</h3>
                </div>
                <textarea></textarea>
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
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default editar;
