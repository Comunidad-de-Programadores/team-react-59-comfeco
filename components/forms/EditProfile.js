import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PromiseProvider } from "mongoose";
import debounce from "debounce";
import A from "../nano/A";
import $ from "../nano/$";

const EditProfile = () => {
  const { register, handleSubmit, errors, watch, trigger } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [user, setUser] = useState({
    email: "",
    nickname: "",
    gender: "",
    biography: "",
    birthdate: "",
    image: "/no_user.jpg",
    country: "",
    area: "",
    facebookLink: "",
    twitterLink: "",
    githubLink: "",
    linkedinLink: "",
  });

  useEffect(() => {
    fetch("/api/get_user", {
      headers: new Headers([
        ["Authorization", `${localStorage.token || sessionStorage.token}`],
      ]),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          return;
        }
        console.log(data);
        setUser({ ...data, image: data.image ? data.image : "no_user.jpg" });
      });
  }, []);

  const onSubmit = (formData) => {
    /*const req = await fetch("/api/edit_profile", {
      method: "PUT",
      headers: new Headers([["Content-type", "application/json"]]),
      body: JSON.stringify({
        nickname: formData.nickname,
        email: formData.email,
        gender: formData.gender,
        birthdate: formData.birthdate,
        country: formData.country,
        area: formData.area,
        password: formData.password,
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        biography: formData.biography
        token: props.token,
      }),
    });

    const res = await req.json();
    */

    fetch("/api/edit_profile", {
      method: "POST",
      headers: new Headers([
        ["Content-type", "application/json"],
        ["Authorization", `${localStorage.token || sessionStorage.token}`],
      ]),
      body: JSON.stringify({
        nickname: formData.nickname,
        email: formData.email,
        gender: formData.gender,
        birthdate: formData.birthdate,
        country: formData.country,
        area: formData.area,
        password: formData.password,
        biography: formData.biography,
        githubLink: formData.github,
        linkedinLink: formData.linkedin,
        twitterLink: formData.twitter,
        facebookLink: formData.facebook,
      }),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const voltearDashboard = () => {
    const tarjeta = $("containerDashboard");

    $("traseraDerecha").style.display = "none";
    if (
      tarjeta.classList.contains("activeRight") ||
      tarjeta.classList.contains("activeLeft")
    ) {
      tarjeta.classList.remove("activeRight");
      if (tarjeta.classList.contains("activeLeft")) {
      }
      tarjeta.classList.remove("activeLeft");
      $("buttonBack").classList.remove("active");
    }

    $("front").classList.add("tarjetaFocus");

    setTimeout(() => {
      $("front").classList.remove("tarjetaFocus");
    }, 1500);
  };

  return (
    <div className="editProfile formGroupSesion col-xs-12" id="editProfile">
      <div className="buttonEditProfile buttonBack">
        <button
          className="homeDashboard"
          onClick={() => {
            voltearDashboard();
          }}
        >
          <A href="#homeDashboard" css="animationCircle" id="buttonBack">
            <span className="ico icon-reply"></span>
          </A>
        </button>
      </div>

      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="title">Editar Perfil</h4>
        <div className="containerPhoto containerCircle">
          <div className="containerFile" type="file">
            <img className="containerCircle" src={user.image}></img>
            <span className="ico icon-camera"></span>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="col-xs-6">
            <div className="containerBox block">
              <label htmlFor="nickname" className="textForm">
                Nick
              </label>
              <input
                defaultValue={user.nickname}
                id="nickname"
                className={`${errors.nickname ? "errorRed" : ""}`}
                name="nickname"
                onChange={(e) => {
                  const value = e.target.value;
                  console.log(errors.nickname);
                }}
                ref={register({ maxLength: 30 })}
                type="text"
                onChange={debounce(async () => {
                  await trigger("nickname");
                }, 500)}
              />
            </div>
            {errors.nickname && (
              <div className="danger">
                {errors.nickname?.type === "maxLength" && (
                  <p>La longitud máxima de Nickname es 30 carácteres</p>
                )}
                {errors.nickname?.type === "required" && (
                  <p>Nickname es requerido</p>
                )}
              </div>
            )}
          </div>
          <div className="col-xs-6">
            <div className="containerBox block">
              <label htmlFor="email" className="textForm">
                Correo
              </label>
              <input
                defaultValue={user.email}
                id="email"
                className={`${errors.email ? "errorRed" : ""}`}
                name="email"
                ref={register({
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                type="text"
                onChange={debounce(async () => {
                  await trigger("email");
                }, 500)}
              />
            </div>
            {errors.email && (
              <div className="danger">
                {errors.email?.type === "pattern" && (
                  <p>Introduzca una dirección de correo electrónico válida</p>
                )}
                {errors.email?.type === "required" && (
                  <p>Correo electrónico es requerido</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="col-xs-4">
            <div className="containerBox block">
              <label htmlFor="gender" className="textForm">
                Género
              </label>
              <select
                value={user.gender}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                id="gender"
                className={`${errors.gender ? "errorRed" : ""}`}
                name="gender"
                ref={register({})}
              >
                <option selected disabled value="">
                  Seleccionar género
                </option>
                <option value="male">Femenino</option>
                <option value="female">Masculino</option>
              </select>
            </div>
            {errors.gender && (
              <div className="danger">
                {errors.gender?.type === "required" && (
                  <p>Seleccione una opción</p>
                )}
              </div>
            )}
          </div>
          <div className="col-xs-4">
            <div className="containerBox block">
              <label htmlFor="birthdate" className="textForm">
                Fecha de Nacimiento
              </label>
              <div className="containerInputIcon">
                <input
                  defaultValue={user.birthdate}
                  id="birthdate"
                  className={`birthDate ${errors.birthdate ? "errorRed" : ""}`}
                  name="birthdate"
                  ref={register({})}
                  type="date"
                  placeholder="DD/MM/YYYY"
                  pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
                  title="Enter a date in this format DD/MM/YYYY"
                  onChange={debounce(async () => {
                    await trigger("birthdate");
                  }, 500)}
                />
              </div>
            </div>
            {errors.birthdate && (
              <div className="danger">
                {errors.birthdate?.type === "required" && (
                  <p>Fecha de nacimiento es requerido</p>
                )}
              </div>
            )}
          </div>
          <div className="col-xs-4">
            <div className="containerBox block">
              <label htmlFor="country" className="textForm">
                País
              </label>
              <input
                defaultValue={user.country}
                id="country"
                className={`${errors.country ? "errorRed" : ""}`}
                name="country"
                type="text"
                ref={register({})}
                onChange={debounce(async () => {
                  await trigger("country");
                }, 500)}
              />
            </div>
            {errors.country && (
              <div className="danger">
                {errors.country?.type === "required" && (
                  <p>País es requerido</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="containerBox inline">
            <label htmlFor="area" className="textForm">
              Área de conocimiento
            </label>
            <select
              onChange={(e) => setUser({ ...user, area: e.target.value })}
              value={user.area}
              id="area"
              className={`${errors.area ? "errorRed" : ""}`}
              name="area"
              ref={register({})}
            >
              <option selected disabled value="">
                Seleccionar una área
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="DevOps">DevOps</option>
              <option value="Video Game Developers">
                Video Game Developers
              </option>
              <option value="UI/UX">UI/UX</option>
              <option value="Database Developer">Database Developer</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
          </div>
          {errors.area && (
            <div className="danger">
              {errors.area?.type === "required" && <p>Seleccione una opción</p>}
            </div>
          )}
        </div>
        <div className="row col-xs-12">
          <div className="col-xs-6">
            <div className="containerBox block">
              <label htmlFor="password" className="textForm">
                Contraseña
              </label>
              <div className="containerInputIcon">
                <input
                  id="password"
                  className={`${errors.password ? "errorRed" : ""}`}
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  ref={register({ minLength: 8 })}
                  onChange={debounce(async () => {
                    await trigger("password");
                  }, 500)}
                />
                <span
                  className={`ico ${
                    passwordShown ? "icon-eye" : "icon-eye-blocked"
                  }`}
                  onClick={togglePasswordVisiblity}
                ></span>
              </div>
            </div>
            {errors.password && (
              <div className="danger">
                {errors.password?.type === "minLength" && (
                  <p>La longitud mínima es 8 carácteres</p>
                )}
                {errors.password?.type === "required" && (
                  <p>Password es requerido</p>
                )}
              </div>
            )}
          </div>
          <div className="col-xs-6">
            <div className="containerBox block">
              <label htmlFor="password2" className="textForm">
                Repetir contraseña
              </label>
              <div className="containerInputIcon">
                <input
                  id="password2"
                  className={`${errors.password2 ? "errorRed" : ""}`}
                  name="password2"
                  type={passwordShown ? "text" : "password"}
                  ref={register({
                    minLength: 8,
                    validate: (value) => value === watch("password"),
                  })}
                  onChange={debounce(async () => {
                    await trigger("password2");
                  }, 500)}
                />
                <span
                  className={`ico ${
                    passwordShown ? "icon-eye" : "icon-eye-blocked"
                  }`}
                  onClick={togglePasswordVisiblity}
                ></span>
              </div>
            </div>
            {errors.password2 && (
              <div className="danger">
                {errors.password2?.type === "minLength" && (
                  <p>La longitud mínima es 8 carácteres</p>
                )}
                {errors.password2?.type === "required" && (
                  <p>Password es requerido</p>
                )}
                {errors.password2?.type === "validate" && (
                  <p>El password no coincide</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="col-xs-6">
            <div className="containerBox inline">
              <label htmlFor="facebook" className="textForm">
                <span className="ico icon-facebook1"></span>
                facebook.com/
              </label>
              <input
                id="facebook"
                defaultValue={user.facebookLink}
                name="facebook"
                type="text"
                ref={register}
              />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="containerBox inline">
              <label htmlFor="github" className="textForm">
                <span className="ico icon-github"></span>
                github.com/
              </label>
              <input
                type="text"
                defaultValue={user.githubLink}
                name="github"
                id="github"
                ref={register}
              />
            </div>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="col-xs-6">
            <div className="containerBox inline">
              <label htmlFor="linkedin" className="textForm">
                <span className="ico icon-linkedin-with-circle"></span>
                linkedin.com/in/
              </label>
              <input
                type="text"
                defaultValue={user.linkedinLink}
                name="linkedin"
                id="linkedin"
                ref={register}
              />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="containerBox inline">
              <label htmlFor="twitter" className="textForm">
                <span className="ico icon-twitter-with-circle"></span>
                twitter.com/
              </label>
              <input
                type="text"
                defaultValue={user.twitterLink}
                name="twitter"
                id="twitter"
                ref={register}
              />
            </div>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="containerBox block">
            <label htmlFor="biography" className="textForm">
              Biografía
            </label>
            <textarea
              defaultValue={user.biography}
              className={`${errors.biography ? "errorRed" : ""}`}
              cols="50"
              name="biography"
              rows="10"
              ref={register({ maxLength: 140 })}
              onChange={debounce(async () => {
                await trigger("biography");
              }, 500)}
            ></textarea>
          </div>
          {errors.biography && (
            <div className="danger">
              {errors.biography?.type === "maxLength" && (
                <p>La longitud máxima es 140 carácteres</p>
              )}
              {errors.biography?.type === "required" && (
                <p>Biografía es requerido</p>
              )}
            </div>
          )}
        </div>
        <div className="buttonContainer col-xs-12">
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
  );
};

export default EditProfile;
