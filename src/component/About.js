import React from 'react'
// import MyeffectCube from './MyeffectCube'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import img from "../assets/about.jfif"
// import EffectCard from './EffectCard';

const styleBody = {
    backgroundColor: "rgb(172, 222, 241)"
}

const About = () => {
    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    {/* <EffectCard /> */}
                    <img src={img} alt="ing" width="400px" height="300px" />
                </div>
                <div className="col">
                    <Accordion >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header backgroundColor="pink">React Components</Accordion.Header>
                            <Accordion.Body style={styleBody}>
                                Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
                                Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

                                Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header backgroundColor="pink">Function Component</Accordion.Header>
                            <Accordion.Body style={styleBody}>
                                A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.
                                This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default About
