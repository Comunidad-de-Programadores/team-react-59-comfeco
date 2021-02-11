export default function Login(){
    return(
        <div className="form-login-container">
            <form className="row" action="">
                <div className="row col-xs-12 input-container">
                    <label htmlFor="loginCorreo" className="ico-background col-xs-2">
                            <span className="ico icon-mail-envelope-closed"></span>
                    </label>
                    <input name="loginCorreo" id="loginCorreo" className="col-xs-10" type="email" placeholder="Correo" />
                </div>
                <br/>
                <div className="row col-xs-12 input-container">
                    <label htmlFor="loginPassword" className="ico-background col-xs-2">
                            <span className="ico icon-lock"></span>
                    </label>
                    <input name="loginPassword" id="loginPassword" className="col-xs-10" type="password" placeholder="Contraseña" />
                </div>
                <hr/>
                <button name="loginButtom" id="loginButtom" className="" type="submit" value="enviar">
                    Acceder
                </button>
            </form>
        </div>
    )
}