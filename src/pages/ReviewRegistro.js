import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import firebase from '../services/FirebaseConnect'
import { v4 as uuidv4 } from 'uuid';

export default function ReviewRegistro() {

    const [nome, setNome] = useState("")
    const [titulo, setTitulo] = useState("")
    const [review, setReview] = useState("")

    const limpar = () => {
        setNome("")
        setTitulo("")
        setReview("")
    }

    const salvarReview = () => {
        let objeto = {
            nome: nome,
            titulo: titulo,
            review: review
        }

        let code = uuidv4()

        firebase
            .database()
            .ref(`reviews/${code}`)
            .set(objeto)
            .then(() => {
                limpar()          
            })
            .catch((erro) => {
                console.log(erro)
            })
    }


    return (
        <div>
            Registre sua review
            <div className="quadradoRegistro">
                <input type="text" placeholder="Nome" id="txtNome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <br />
                <input type="text" placeholder="Título Filme/Série" id="txtTítulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <br />
                <textarea rows="6" placeholder="Sua review" id="txtReview" value={review} onChange={(e) => setReview(e.target.value)}/>
                <br />
                <Button variant="contained" color="primary" onClick={salvarReview}>
                    Registrar
                </Button>
            </div>
        </div>
    )
}
