import React from 'react'

import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';/
import img5 from "../assets/5.jpg"
import img8 from "../assets/8.jpg"
import img11 from "../assets/11.jpg"



const Contact = () => {
    return (
        <>
            <div className="container mt-5">

                <div className="row">
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title>State and Lifecycle</Card.Title>
                                <Card.Text>
                                    Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

                                    The three phases are: Mounting, Updating, and Unmounting.
                                </Card.Text>
                            </Card.Body>


                        </Card>

                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img8} />
                            <Card.Body>
                                <Card.Title>Forms</Card.Title>
                                <Card.Text>
                                    HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state.

                                </Card.Text>
                            </Card.Body>


                        </Card>

                    </div>
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img11} />
                            <Card.Body>
                                <Card.Title>Hooks</Card.Title>
                                <Card.Text>
                                    SHooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components.

                                </Card.Text>
                            </Card.Body>


                        </Card>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
