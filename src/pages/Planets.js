import React, {useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [planets, setPlanets] = useState([])
    const [msg, setMsg] = useState("")


    const getPlanets = () => {
        axios.get('https://swapi.dev/api/planets/')
        .then(retorno => {
            console.log(retorno.data.results)
            setPlanets(retorno.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro ao buscar dados!"))
    }
    
    useLayoutEffect(() => {
        getPlanets()
    }, [])

    return (
        <>
            <Banner titulo="Planets" mensagem="Os planetas mais diversificado do universo" />
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Planetas</h2>
                        <p>Visualize nossas aplicações </p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            <div>
                                {msg}
                                {planets.map((item, chave) =>
                                <div key={chave}>
                                    {item.name} - Clima: {item.climate} - Terreno: {item.terrain}
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