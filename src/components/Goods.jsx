import React from "react"
import axios from "axios";
import { Button, Card, Container, Row } from 'react-bootstrap'

function GoodsCard(props){
    function addToCart(id){
        axios.post('http://185.185.68.165/react_attestation/cart', {'id': id});
    }

    return (
        <Card key={props.id} className='col-md-2 border-dark border-3 text-center'>
            <a className="my-auto" href={"/item/"+props.id}><Card.Title>{props.name}</Card.Title></a>
            <img src={props.image} alt={props.name}/>

            <div className='my-2'><strong>Цена:</strong> {props.price}₽</div>
            <Button variant='primary' onClick={()=>addToCart(props.id)}>Купить</Button>
        </Card>
    )
}

export default function Goods() {
    const [items, setItems] = React.useState([]);

    React.useEffect(()=>{
        axios.get('http://185.185.68.165/react_attestation/goods').then((r)=>{
            setItems(r.data);
        })
    },[]);
    

    return (
        <Container className='my-4'>
        <Row><h1>Товары</h1></Row>

        <Row>
            {items.map(item=><GoodsCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}/>)}
        </Row>
    </Container>
    )
}