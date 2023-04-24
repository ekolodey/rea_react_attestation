import React from "react"
import axios from "axios";
import { Button, Card, Container, Row } from 'react-bootstrap'


function FavoritesItem(props){

    function addToCart(){
        axios.post('http://185.185.68.165/react_attestation/cart', {'id': props.id});
    }
    
    function deleteItem(){
        axios.delete('http://185.185.68.165/react_attestation/favorites/' + props.id);
        props.setItems(props.items.filter(e=>e.id != props.id));
    }

    return (
        <Card className='col-md-2 border-dark border-3 text-center'>
            <a className="my-auto" href={"/item/"+props.id}><Card.Title>{props.name}</Card.Title></a>
            <img src={props.image} alt={props.name}/>

            <div className='my-2'><strong>Цена:</strong> {props.price}₽</div>
            <Button variant='primary' onClick={addToCart}>Купить</Button>
            <Button variant='primary' className="mt-3" onClick={deleteItem}>Удалить</Button>
        </Card>
    )
}

export default function Favorites() {
    const [items, setItems] = React.useState([]);

    React.useEffect(()=>{
        axios.get('http://185.185.68.165/react_attestation/favorites').then((r)=>{
            setItems(r.data);
        })
    },[]);

    return (
        <Container className='my-4'>
        <Row><h1>Избранное</h1></Row>

        <Row>
            {items.map(item=><FavoritesItem key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} items={items} setItems={setItems}/>)}
        </Row>
    </Container>
    )
}