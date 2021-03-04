import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { PromiseProvider } from "mongoose";

const EditProfile = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const onSubmit = formData => {
    alert(JSON.stringify(formData))
  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  
  return (
    <div
      className="editProfile formGroupSesion col-xs-12"
      id="editProfile"
    >
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="title">Editar Perfil</h4>
        <div className="containerPhoto containerCircle">
          <div className="containerFile" type="file">
            <img className="containerCircle"></img>
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
                id="nickname"
                name="nickname"
                ref={register({required: true, maxLength: 30 })}
                type="text"
              />
            </div>
            { errors.nickname &&
              <div className="danger">
                { errors.nickname?.type === "maxLength" && <p>La longitud máxima de Nickname es 30 carácteres</p> }
                { errors.nickname?.type === "required" && <p>Nickname es requerido</p> }
              </div>
            }
          </div>
          <div className="col-xs-6">
            <div className="containerBox block">
              <label htmlFor="email" className="textForm">
                Correo
              </label>
              <input
                id="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                type="text"
              />
            </div>
            { errors.email &&
              <div className="danger">
                { errors.email?.type === "pattern" && <p>Introduzca una dirección de correo electrónico válida</p> }
                { errors.email?.type === "required" && <p>Correo electrónico es requerido</p> }
              </div>
            }
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="col-xs-4">
            <div className="containerBox block">
              <label htmlFor="gender" className="textForm">
                Género
              </label>
              <select
                id="gender"
                name="gender"
                ref={register({required: true})}
              >
                <option selected disabled>Seleccionar género</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
              </select>
            </div>
            { errors.gender &&
              <div className="danger">
                { errors.gender?.type === "required" && <p>Seleccione una opción</p> }
              </div>
            }
          </div>
          <div className="col-xs-4">
            <div className="containerBox block">
              <label htmlFor="birthdate" className="textForm">
                Fecha de Nacimiento
              </label>
              <div className="containerInputIcon">
                <input
                id="birthdate"
                className="birthDate"
                name="birthdate"
                placeholder="dd/mm/yyyy"
                ref={register({required: true})}
                type="date"
                value=""
                />
              </div>
            </div>
            { errors.birthdate &&
              <div className="danger">
                { errors.birthdate?.type === "required" && <p>Fecha de nacimiento es requerido</p> }
              </div>
            }
          </div>
          <div className="col-xs-4">
            <div className="containerBox block">
              <label htmlFor="country" className="textForm">
                País
              </label>
              <input
                type="text"
                name="country"
                id="country"
                ref={register({required: true})}
              />
            </div>
            { errors.country &&
              <div className="danger">
                { errors.country?.type === "required" && <p>País es requerido</p> }
              </div>
            }
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="containerBox inline">
            <label htmlFor="area" className="textForm">
                Área de conocimiento
              </label>
              <select
                id="area"
                name="area"
                ref={register({required: true})}
              >
                <option selected disabled>Seleccionar una área</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="DevOps">DevOps</option>
                <option value="Video Game Developers">Video Game Developers</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Database Developer">Database Developer</option>
                <option value="Cloud Computing">Cloud Computing</option>
              </select>
          </div>
          { errors.area &&
            <div className="danger">
              { errors.area?.type === "required" && <p>Seleccione una opción</p> }
            </div>
          }
        </div>
        <div className="row col-xs-12">
          <div className="col-xs-6">
            <div className="containerBox block">
              <label htmlFor="password" className="textForm">
                Contraseña
              </label>
              <div className="containerInputIcon">
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  id="password"
                  ref={register({required: true, minLength: 8 })}
                />
                <span className={`ico ${passwordShown ? "icon-eye" : "icon-eye-blocked"}`} onClick={togglePasswordVisiblity}></span>
              </div>
            </div>
            { errors.password &&
              <div className="danger">
                { errors.password?.type === "minLength" && <p>La longitud mínima es 8 carácteres</p> }
                { errors.password?.type === "required" && <p>Password es requerido</p> }
              </div>
            }
          </div>
          <div className="col-xs-6">
            <div className="containerBox block">
              <label htmlFor="password2" className="textForm">
                Repetir contraseña
              </label>
              <div className="containerInputIcon">
                <input
                type={passwordShown ? "text" : "password"}
                name="password2"
                id="password2"
                ref={register({required: true, minLength: 8, validate: (value) => value === watch('password')})}
                />
                <span className={`ico ${passwordShown ? "icon-eye" : "icon-eye-blocked"}`} onClick={togglePasswordVisiblity}></span>
              </div>
            </div>
            { errors.password2 &&
                <div className="danger">
                  { errors.password2?.type === "minLength" && <p>La longitud mínima es 8 carácteres</p> }
                  { errors.password2?.type === "required" && <p>Password es requerido</p> }
                  { errors.password2?.type === "validate" &&  <p>El password no coincide</p> }
                </div>
              }
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
                type="text"
                name="facebook"
                id="facebook"
                ref={register({required: true})}
              />
            </div>
            { errors.facebook &&
              <div className="danger">
                { errors.facebook?.type === "required" && <p>Facebook es requerido</p> }
              </div>
            }
          </div>
          <div className="col-xs-6">
            <div className="containerBox inline">
              <label htmlFor="github" className="textForm">
                <span className="ico icon-github"></span>
                github.com/
              </label>
              <input
                type="text"
                name="github"
                id="github"
                ref={register({required: true})}
              />
            </div>
            { errors.github &&
              <div className="danger">
                { errors.github?.type === "required" && <p>Github es requerido</p> }
              </div>
            }
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
                name="linkedin"
                id="linkedin"
                ref={register({required: true})}
              />
            </div>
            { errors.linkedin &&
              <div className="danger">
                { errors.linkedin?.type === "required" && <p>Linkedin es requerido</p> }
              </div>
            }
          </div>
          <div className="col-xs-6">
            <div className="containerBox inline">
              <label htmlFor="twitter" className="textForm">
                <span className="ico icon-twitter-with-circle"></span>
                twitter.com/
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                ref={register({required: true})}
              />
            </div>
            { errors.twitter &&
              <div className="danger">
                { errors.twitter?.type === "required" && <p>Twitter es requerido</p> }
              </div>
            }
            </div>
        </div>
        <div className="col-xs-12 row">
          <div className="containerBox block">
            <label htmlFor="biography" className="textForm">
                  Biografía
            </label>
            <textarea name="biography"
                      rows="10" 
                      cols="50"
                      ref={register({required: true, maxLength: 140 })}
            ></textarea>
          </div>
          { errors.biography &&
              <div className="danger">
                { errors.biography?.type === "maxLength" && <p>La longitud máxima es 140 carácteres</p> }
                { errors.biography?.type === "required" && <p>Biografía es requerido</p> }
              </div>
            }
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