import React from "react";
import { useForm } from "react-hook-form";
import { PromiseProvider } from "mongoose";

const EditProfile = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = formData => {
    alert(JSON.stringify(formData))
  }
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
                <option selected disabled value="">Seleccionar género</option>
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
          <div className="containerBox block col-xs-4">
            <label htmlFor="birthdate" className="textForm">
              Fecha de Nacimiento
            </label>
            <div className="containerInputIcon">
              <input
              id="birthdate"
              className="birthDate"
              name="birthdate"
              placeholder="dd/mm/yyyy"
              ref={register}
              type="date"
              value=""
              />
            </div>
          </div>
          <div className="containerBox block col-xs-4">
            <label htmlFor="country" className="textForm">
              País
            </label>
            <input
              type="text"
              name="country"
              id="country"
              ref={register}
            />
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="containerBox block col-xs-6">
            <label htmlFor="password" className="textForm">
              Contraseña
            </label>
            <div className="containerInputIcon">
              <input
                type="password"
                name="password"
                id="password"
                ref={register}
              />
              <span className="ico icon-eye-blocked"></span>
            </div>
          </div>
          <div className="containerBox block col-xs-6">
            <label htmlFor="password2" className="textForm">
              Repetir contraseña
            </label>
            <div className="containerInputIcon">
              <input
              type="password"
              name="password2"
              id="password2"
              ref={register}
              />
              <span className="ico icon-eye-blocked"></span>
            </div>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="containerBox inline col-xs-6">
            <label htmlFor="facebook" className="textForm">
              <span className="ico icon-facebook1"></span>
              facebook.com/
            </label>
            <input
              type="text"
              name="facebook"
              id="facebook"
              ref={register}
            />
          </div>
          <div className="containerBox inline col-xs-6">
            <label htmlFor="github" className="textForm">
              <span className="ico icon-github"></span>
              github.com/
            </label>
            <input
              type="text"
              name="github"
              id="github"
              ref={register}
            />
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="containerBox inline col-xs-6">
            <label htmlFor="linkedin" className="textForm">
              <span className="ico icon-linkedin-with-circle"></span>
              linkedin.com/in/
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              ref={register}
            />
          </div>
          <div className="containerBox inline col-xs-6">
            <label htmlFor="twitter" className="textForm">
              <span className="ico icon-twitter-with-circle"></span>
              twitter.com/
            </label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              ref={register}
            />
          </div>
        </div>
        <div className="containerBox block row col-xs-12">
          <label htmlFor="biography" className="textForm">
                Biografía
          </label>
          <textarea name="biography"
                    rows="10" 
                    cols="50"
                    ref={register}
          ></textarea>
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