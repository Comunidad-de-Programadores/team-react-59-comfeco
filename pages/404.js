import Link from 'next/link'
import Head from 'next/head'

const custom404 = () =>{
    return(
        <>
            <Head>
                <title> Error 404 | Comfeco</title>
            </Head>

            <div className="container404">
                <div className="content404">
                    <img src="/404/main.svg" alt="404 not found"/>
                    <div className="button404">
                        <Link href="/">
                                <input type="button" value="Sácame de aquí"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default custom404