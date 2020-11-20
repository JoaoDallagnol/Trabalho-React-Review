import React, {useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [species, setSpecies] = useState([])
    const [msg, setMsg] = useState("")


    const getSpecies = () => {
        axios.get('https://swapi.dev/api/species/')
        .then(retorno => {
            console.log(retorno.data.results)
            setSpecies(retorno.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro ao buscar dados!"))
    }
    
    useLayoutEffect(() => {
        getSpecies()
    }, [])

    return (
        <>
            <Banner titulo="Species" mensagem="Espécias únicas" />
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Bestiário</h2>
                        <p>Visualize nossas aplicações </p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            <div>
                                {msg}
                                {species.map((item, chave) =>
                                <div key={chave}>
                                    {item.name} - Classificação: {item.classification} - Idioma: {item.language} - Designação: {item.designation}
                                    <br />
                                    <br />
                                </div>
                                )}
                            </div>
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/pic02.jpg')} alt="Pic 02" />
                            </div>
                            <header>
                                <h3>Fusce pellentesque tempus</h3>
                            </header>
                            <p>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna non comodo sodales tempus.</p>
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