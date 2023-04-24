import axios from "axios";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Item(){
    const params = useParams();
    const [item, setItem] = React.useState({});

    React.useEffect(()=>{
        axios.get('https://ekolodey.01sh.ru/react_attestation/goods/'+params.id).then((r)=>{
            setItem(r.data);
        })
    },[]);

    function addToCart(){
        axios.post('https://ekolodey.01sh.ru/react_attestation/cart', {'id':params.id});
    }

    function addToFavorites(){
        axios.post('https://ekolodey.01sh.ru/react_attestation/favorites', {'id':params.id});
    }

    return (
        <Container>
            <h1>Информация о товаре</h1>

            <p><strong>Название</strong>:  {item.name}</p>
            <p><strong>Цена</strong>:  {item.price}₽</p>

            <img src={item.image} alt={item.name}/>

            <div>
                <Button className="m-2" variant='primary' onClick={addToCart}>Купить</Button>
                <Button className="m-2" variant='primary' onClick={addToFavorites}>Добавить в Избранное</Button>
            </div>
            
        </Container>
    )
}