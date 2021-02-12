import Link from "next/link"

export default function login(){
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
                <br/>
                <div className="forgotPassword-container col-xs-12">
                    <Link href="/forgotPassword">
                        <a className="link">¿Olvidaste tu contraseña?</a>
                    </Link>
                </div>
                <br/>
                <div className="button-container col-xs-12">
                    <button name="loginButton" id="loginButton" className="col-xs-12" type="submit" value="send">
                        Acceder
                    </button>   
                </div>
                <br/>
                <hr className="col-xs-12"/>
            </form>
        </div>
    )
}