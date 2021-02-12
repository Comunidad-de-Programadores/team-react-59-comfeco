import Link from "next/link"

export default function login(){
    return(
        <div className="form-login-container">
            <form className="row" action="">
                <div className="row col-xs-12 input-container">
                    <label htmlFor="loginCorreo" className="ico-background col-xs-1">
                            <span className="ico icon-mail-envelope-closed"></span>
                    </label>
                    <input name="loginCorreo" id="loginCorreo" className="col-xs-11" type="email" placeholder="Correo electrónico" autoComplete="off"/>
                </div>
                <br/>
                <div className="row col-xs-12 input-container">
                    <label htmlFor="loginPassword" className="ico-background col-xs-1">
                            <span className="ico icon-lock"></span>
                    </label>
                    <input name="loginPassword" id="loginPassword" className="col-xs-11" type="password" placeholder="Contraseña" />
                </div>
                <br/>
                <div className="button-container col-xs-12">
                    <button name="loginButton" id="loginButton" type="submit" value="send">
                        Iniciar sesión
                    </button>   
                </div>
                <br/>
                <div className="forgotPassword-container col-xs-12">
                    <Link href="/forgotPassword">
                        <a className="link">¿Olvidaste tu contraseña?</a>
                    </Link>
                </div>
            </form>
        </div>
    )
}