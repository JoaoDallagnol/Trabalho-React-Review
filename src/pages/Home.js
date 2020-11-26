import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
export default function Home() {

    return (
        <>
            <Banner titulo="Seja Bem-Vindo" mensagem="Aula de React" />
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Home</h2>
                        <p>Informações sobre o criador</p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            <div className="image fit">
                                <img src={require('../images/pic01.jpg')} alt="Pic 01" />
                            </div>
                            <header>
                                <h3>Informações sobre o criador</h3>
                            </header>
                            <p>by João Vítor Dall' Agnol de Oliveira /
                            RA: 1120461 </p>
                            <p>Email: jvdallagnol2001@gmail.com</p>
                            <footer>
                                <Link to="/" className="button special">More</Link>
                            </footer>
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/pic02.jpg')} alt="Pic 02" />
                            </div>
                            <header>
                                <h3>Como funciona?</h3>
                            </header>
                            <p>Site desenvolvido para publicações de rieview, faça seu login para acessar a página na aba "Reviews"</p>
                            <p>.</p>
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
