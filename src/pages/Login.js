import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import firebase from '../services/FirebaseConnect'
export default function Home() {


    
    const login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(
                "marcos.santos@imed.edu.br", "123456"
            )
            .then(retorno => {
                console.log("Usuário Logado: " + retorno.user.uid)
            })
            .catch((erro) => {
                console.log(erro)
            }) 
    }    
    


    return (
        <>
            <Banner titulo="Login" mensagem="Faça seu login para ser registrado" />
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Faça seu Login</h2>
                        <p>Visualize nossas aplicações </p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            <div className="quadradoRegistro">
                                <input type="text" placeholder="Email" id="txtEmail" />
                                <br />
                                <input type="text" placeholder="Password" id="txtSenha" />
                                <br />
                            </div>
                            <button>
                                onClick={login}
                                Login
                            </button>   
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/pic02.jpg')} alt="Pic 02" />
                            </div>
                            <header>
                                <h3>Faça seu Login</h3>
                            </header>
                            <p>Nosso sistema de regintro é totalmente seguro e confiavel, para mais informações em como fazer seu Login clike no saiba mais</p>
                            <footer>
                                <Link to="/" className="button special">Saiba mais</Link>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}