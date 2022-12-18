import React from 'react'
import Alert from 'react-bootstrap/Alert';
import img from "../assets/w.jpg"

const Submit = () => {
    return (
        <div className="container mt-5" >
            <div className="row">
                <img src={img} alt="img" width="200px" height="200px" />
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Thankyou for logging in
                    </p>

                </Alert>
            </div>
        </div>
    )
}

export default Submit
