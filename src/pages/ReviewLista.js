import React, {useState, useLayoutEffect} from 'react'
import firebase from '../services/FirebaseConnect'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


export default function ReviewLista() {
    
    const [lista, setLista] = useState([])
    
    useLayoutEffect(() => {
        firebase
            .database()
            .ref(`/reviews`)
            .on('value', snapchot => {
                let dados = snapchot.val()
                const keys =Object.keys(dados)
                const lista = keys.map((key) => {
                    return {...dados[key] }
                })
                setLista(lista)
                console.log(lista)
            })
    }, [])
    
    
    
    
    return (
        <div>
            Ultimas Reviews:
            {lista.map((item, key) => {
                return <List key={key}>
                    <ListItem alignItems="flex-start">
                        {item.nome} - {item.titulo}
                        <br />
                        {item.review}
                    </ListItem>
                </List>
            }
            )}
        </div>
    )
}
