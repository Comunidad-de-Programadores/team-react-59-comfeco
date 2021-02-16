import React from 'react';
const resetPassword = () => {
    return(
        <>
            <main>
                <div className="resetPasswordContainer">
                    <h1 className="col-xs-12">Restablecer la contraseña</h1>
                    <p>Ingrese el correo con el que se registro, se le enviará un enlace con el que podrá restablecer su contraseña</p>
                    <form>
                        <div className="row col-xs-12 inputContainer">
                            <label htmlFor="loginCorreo" className="icoBackground col-xs-1">
                                <span className="ico icon-mail-envelope-closed"></span>
                            </label>
                        <input name="resetPassword" id="resetPassword" className="col-xs-11" type="email" placeholder="Correo electrónico" autoComplete="off"/>               
                        </div>
                        <div className="buttonContainer">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </main>
            {/* importar header con boton de iniciar sesión */}
        </>
    )
}

export default resetPassword