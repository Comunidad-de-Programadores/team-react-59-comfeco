const ResetPassword = ()=>{
    return(
        <div className="resetPasswordContainer">
            <h1 className="col-xs-12">Restablecer la contraseña</h1>
            <p>Ingrese el correo con el que se registró, se le enviará un enlace con el que podrá restablecer la contraseña de su cuenta.</p>
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
    )
}

export default ResetPassword