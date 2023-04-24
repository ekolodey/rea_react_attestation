import React from "react"
import axios from "axios";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function CartCard(props){
    function addItem(){
        axios.post('http://185.185.68.165/react_attestation/cart', {'id': props.id});
        props.items.find(e => e.id == props.id).count++;
        props.setItems([...props.items]);
    }

    function delItem(){
        axios.delete('http://185.185.68.165/react_attestation/cart/'+props.id);
        const item = props.items.find(e => e.id == props.id);
        item.count--;

        if(item.count<=0)
            return props.items.filter(e=>e.id!=props.id);
        else
            props.setItems([...props.items]);
    }

    return (
        <Card key={props.id} className='col-md-2 border-dark border-3 text-center'>
            <a className="my-auto" href={"/item/"+props.id}><Card.Title>{props.name}</Card.Title></a>
            <img src={props.image} alt={props.name}/>

            <div className='my-2'><strong>Цена:</strong> {props.price}₽</div>
            
            <Container>
                <Row>
                    <Col><Button variant='primary' onClick={addItem}>+</Button></Col>
                    <Col className="my-auto">{props.count}</Col>
                    <Col><Button variant='primary' onClick={delItem}>-</Button></Col>
                </Row>
            </Container>
        </Card>
    )
}

export default function Cart() {
    const [items, setItems] = React.useState([]);

    React.useEffect(()=>{
        axios.get('http://185.185.68.165/react_attestation/cart').then((r)=>{
            setItems(r.data);
        })
    },[]);

    function clearCart(){
        axios.delete('http://185.185.68.165/react_attestation/cart');
        setItems([]);
    }

    return (
        <Container className='my-4'>
        <Row><h1>Корзина</h1></Row>

        <Row>
            {items.map(item=>
                <CartCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} count={item.count} items={items} setItems={setItems}/>
            )}
        </Row>
        <Row>
            <Col><b>Общая сумма</b>: {items.map(x=>x.price*x.count).reduce((t,i)=>t+i,0)}₽</Col>
        </Row>
        <Row>
            <Col><Button onClick={clearCart}>Оформить заказ</Button></Col>
        </Row>
    </Container>
    )
}