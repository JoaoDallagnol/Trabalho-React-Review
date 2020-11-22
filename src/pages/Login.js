import React, {useState} from 'react'

import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import firebase from '../services/FirebaseConnect'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'

export default function Home() {

    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    
    
    
    
    
    const login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(retorno => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                setMsg("")
                history.push("/")
            })
            .catch((erro) => {
                console.log(erro)
                setMsg("Usuário ou senha inválidos!" )
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
                                <input type="email" placeholder="Email" id="txtEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <br />
                                <input type="password" placeholder="Password" id="txtSenha" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <br />
                            {msg}
                            </div>
                            <Button variant="contained" color="secundary" onClick={login}>
                                Login
                        </Button>   
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/pic02.jpg')} alt="Pic 02" />
                            </div>
                            <header>
                                <h3>Faça seu login para ter acesso</h3>
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