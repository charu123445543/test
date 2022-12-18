import React from 'react'

const style = {

    marginTop: "1rem",
    // padding: "1rem",
    backgroundColor: "rgb( 235, 195, 64 )",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%"

}

const Footer = () => {
    return (
        <div className="text-white bg-dark" style={style} >
            <div className="row">

                <div className="col">
                    <h1>Reactjs</h1>

                </div>
                <div className="col mt-2">
                    <p> @Copyright  2022- All Right Reserved.   </p>

                </div>

            </div>

        </div >

    )
}

export default Footer
