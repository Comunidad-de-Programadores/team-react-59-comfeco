import Link from "next/link"

export default function Login(){
    return(
        <div className="formLoginContainer">
            <h1>Iniciar sesión</h1>
            <form className="row" action="" method="post">
                <div className="row col-xs-12 inputContainer">
                    <label htmlFor="loginCorreo" className="icoBackground col-xs-1">
                            <span className="ico icon-mail-envelope-closed"></span>
                    </label>
                    <input name="loginCorreo" id="loginCorreo" className="col-xs-11" type="email" placeholder="Correo electrónico" autoComplete="off"/>
                </div>
                <br/>
                <div className="row col-xs-12 inputContainer">
                    <label htmlFor="loginPassword" className="icoBackground col-xs-1">
                            <span className="ico icon-lock"></span>
                    </label> 
                    <input name="loginPassword" id="loginPassword" className="col-xs-11" type="password" placeholder="Contraseña" />
                </div>
                <br/>
                <div className="row col-xs-12 checkBoxContainer">
                    <input name="checkRemember" id="checkRemember" type="checkbox"/>
                    <label htmlFor="checkRemember"></label>
                    <p>Recordar usuario</p>
                </div>
                <br/>
                <div className="row col-xs-12 buttonContainer">
                    <button name="loginButton" id="loginButton" type="submit" value="send">
                        Iniciar sesión
                    </button>   
                </div>
                <br/>
                <div className="row col-xs-12 forgotPasswordContainer">
                    <Link href="/login/resetPassword">
                        <a className="link">¿Olvidaste tu contraseña?</a>
                    </Link>
                </div>
            </form>
        </div>
    )
}