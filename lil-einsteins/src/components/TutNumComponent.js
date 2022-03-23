import React, {useState} from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {CSSTransition} from "react-transition-group";


export default function TutNumComponent(props){
    const [number, setNumber] = useState(props.inumber);
    const [showNumber, setShowNumber] =  useState ({show:true});
    const [tempClassname, setTempClassname] = useState (props.itempClassname);
    const [idCounter, setIdCounter] = useState (props.iidCounter);
    //setNumber(tempNumber)
    return(
        <CSSTransition

        in={showNumber}
        timeout={400}
        
        classNames = {tempClassname}
        id = {idCounter}
        //transitionDelay = {delayTime}
        unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
        appear
        enter = {true}
        >
           <li>
                <Container
                    style={{
                        className: "test",
                        width: 50,
                        height: 50,
                        backgroundColor: "powderblue",
                        border: '1px solid'
                    }}
                >
                {number}
                </Container>           
            </li> 
        </CSSTransition> 
    );

}