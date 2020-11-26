import React, {useState} from 'react'
import Banner from '../components/Banner'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../services/FirebaseConnect'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'
import ChatIcon from '@material-ui/icons/Chat'
import ReviewRegistro from './ReviewRegistro'
import ReviewLista from './ReviewLista'

export default function Home() {

    let history = useHistory()
    const [screen, setScreen] = useState(0)

    

    const logoff = () => {
        sessionStorage.removeItem("uuid")

        firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/");
            }).catch(() => {
                history.push("/");
            })
            
    }
    
    return (
        <>
            <Banner titulo="Reviews" mensagem="Aula de React" />
                <div>
                    <Button onClick={() => setScreen(0)} variant="contained" color="primary" startIcon={<ChatIcon />}>
                            Reviews
                    </Button>
                    <Button onClick={() => setScreen(1)} variant="contained" color="primary" startIcon={<ChatIcon />}>
                            Registar sua Review
                    </Button>
                    <Button onClick={logoff} variant="contained" color="primary" startIcon={<ExitToAppIcon />}>
                            Logoff
                    </Button>
                </div>
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Reviews</h2>
                        <p>Publique sua review agora!</p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            {screen === 0 &&
                                <ReviewLista setScreen={setScreen} />
                            }
                            {screen === 1 &&
                                <ReviewRegistro setScreen={setScreen} />
                            }      
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/pic02.jpg')} alt="Pic 02" />
                            </div>
                            <header>
                                <h3>Como eu publico uma review?</h3>
                            </header>
                            <p>Visualise a cima no menu da págia a opção "Registar sua Review" bastar clikar que você ira abrir a página de formulario, uma vez completa pressione a opção "registrar" para confirmar sua operação, ela logo aparecera em nossa lista</p>
                            <footer>
                                <Link to="/" className="button special">More</Link>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}