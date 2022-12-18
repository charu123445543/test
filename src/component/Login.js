import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FcBusinessman } from "react-icons/fc";


const Login = () => {
    const navigate = useNavigate();
    const mysubmit = ( e ) => {
        navigate( '/submit' );
    }

    /////hello this is a comment
    return (
        <>
            <div className="container mt-5">
                <Form>



                    <h1 textAlign="center">Loggin Form <FcBusinessman /></h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />

                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group> */}

                    <Button variant="primary" type="submit" onClick={mysubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Login
