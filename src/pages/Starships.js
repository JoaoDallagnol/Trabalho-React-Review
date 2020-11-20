import React, {useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {

    const [starships, setStarships] = useState([])
    const [msg, setMsg] = useState("")


    const getStarships = () => {
        axios.get('https://swapi.dev/api/starships/')
        .then(retorno => {
            console.log(retorno.data.results)
            setStarships(retorno.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro ao buscar dados!"))
    }
    
    useLayoutEffect(() => {
        getStarships()
    }, [])

    return (
        <>
            <Banner titulo="Starships" mensagem="As melhores naves da galáxia" />
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Melhores naves</h2>
                        <p>Visualize nossas aplicações </p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            <div>
                                {msg}
                                {starships.map((item, chave) =>
                                <div key={chave}>
                                    {item.name} - Modelo: {item.model} - Velocidade max: {item.max_atmosphering_speed}
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