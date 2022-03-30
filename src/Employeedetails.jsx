import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import { Card, Button } from "react-bootstrap";

import Edata from "./Edata";



function Employeedetails(props) {
    const defaultList = [
        Edata
    ];
    // console.log(defaultList)
    // const [list, updateList] = useState(defaultList);
    // const handleRemoveItem = (e) => {
    //     const name = e.target.getAttribute("name")
    //     updateList(list.filter(item => item.name !== name));
    // };

    //console.log(data);



    return (
        <>
            <div className="empdetails" >
                <Card className="empdata" style={{}}>

                    <div >
                        <img className="imagesize" src={props.imagesrc} />

                    </div>

                    <Card.Body >
                        <Card.Title><p align="center">{props.name}</p></Card.Title>
                        <Card.Text >

                            <p align="center">{props.designation}</p>
                            <p align="center"><b>Dob:{props.dob}</b></p>

                        </Card.Text>

                        <Button   variant="primary" size="" id="btn1" >Delete</Button>


                    </Card.Body>






                </Card>


            </div>

        </>

    );
}

export default Employeedetails;