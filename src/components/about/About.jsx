import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About(props) {

    return (
        <div className="container">
            <h2 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h2>
            <div className="relative">
                <Card style={{ width: '16rem', backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', borderColor: props.mode === 'dark' ? 'whitesmoke' : 'black' }}>
                    <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/05/82/15/65/360_F_582156555_hbyp1b5f45xGtOp2PPDngIOX4YKv7tZF.jpg" />
                    <Card.Body>
                        <Card.Title>Flowers</Card.Title>
                        <Card.Text>
                            Painting is an artistic practice that involves applying pigment to a surface such as canvas, wood, paper, or walls.
                        </Card.Text>
                        <Button variant="secondary">Go To Illusions</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '16rem', backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', borderColor: props.mode === 'dark' ? 'whitesmoke' : 'black' }}>
                    <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/06/10/00/96/360_F_610009647_3KFmbcdIqvesIENBg2aqhNMFIlGiroWS.jpg" />
                    <Card.Body>
                        <Card.Title>Birds</Card.Title>
                        <Card.Text>
                        Bird painting is an art form that captures the beauty and diversity of avian species through detailed and vibrant.
                        </Card.Text>
                        <Button variant="secondary">Go To Illusions</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '16rem', backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', borderColor: props.mode === 'dark' ? 'whitesmoke' : 'black' }}>
                    <Card.Img variant="top" src="https://i0.wp.com/www.jankalyansevatrust.org/wp-content/uploads/2024/01/360_F_597927853_iZIpn7Blgg3TPd1XEKgF1KhLRuqNxhiU.jpg" />
                    <Card.Body>
                        <Card.Title>Radha-Krishna</Card.Title>
                        <Card.Text>
                        A Radha-Krishna painting typically depicts the divine love and eternal bond between Radha and Krishna.
                        </Card.Text>
                        <Button variant="secondary">Go To Illusions</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '16rem', backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', borderColor: props.mode === 'dark' ? 'whitesmoke' : 'black' }}>
                    <Card.Img variant="top" src="https://www.artfactory.in/product_pictures/CP-WA199.jpg" />
                    <Card.Body>
                        <Card.Title>Nature</Card.Title>
                        <Card.Text>     
                        Nature painting typically depicts landscapes, seascapes, flora, and fauna, capturing the beauty and natural world. 
                        </Card.Text>
                        <Button variant="secondary">Go To Illusions</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}