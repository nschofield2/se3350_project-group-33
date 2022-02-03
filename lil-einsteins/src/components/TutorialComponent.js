import react, { useEffect } from "react";
import React, { useState } from 'react';
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition} from "react-transition-group";
import {Container} from "react-bootstrap";


function Tutorial () {

    // state = {
    //     layer1 : {tutorialText: null},
    //     layer2 : {tutorialText: "This algorithm works by dividing the full list of values into two equally sized sublists."},
    //     layer3 : {tutorialText: null},
    //     layer4 : {tutorialText: null},
    //     layer5 : {tutorialText: null},
    // };

    const[tutorialText, setTutorialText] = useState("You’ve selected the merge sort algorithm.")
    const[step, setStep] = useState(0);
    const[showNextAnimation, setShowNextAnimation] = useState(false)

    //Layers Enabled
    const[layer2,  setLayer2] = useState(false);
    const[layer3,  setLayer3] = useState(false);
    const[layer4,  setLayer4] = useState(false);
    const[layer5,  setLayer5] = useState(false);
    


    useEffect(() => {
        switch(step){

            case 0:
                setTutorialText("You’ve selected the merge sort algorithm.");
                setLayer2(false);
                setLayer3(false);
                setLayer4(false);
                setLayer5(false);
                break;

            case 1:
                setTutorialText("This algorithm works by dividing the full list of values into two equally sized sublists.");
                setLayer2(true);
                break;
                // 
            case 2:
                setTutorialText("Then the left sublist is further divided until it only contains one value.")
                setLayer3(true);
                setLayer4(true);
                setLayer5(true);
                break;
            // default:
            //     setLayer2(false);
        }
    });

    
        return(
            <div className="container">

                <div className="tutorialText"> 
                    <h4>{tutorialText}</h4>
                </div>

                <div><p>{step}</p></div>

                <div className="tutoialDisplay">
                    <div className="layer1">
                        <ul className="numberList">
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Container style={{
                                    width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                    </Container>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <br></br>

                    <div className="layer2">
                    <CSSTransition
                    in={layer2}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
                    >
                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                        </ul>

                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer3">
                    <CSSTransition
                    in={layer3}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    >
                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                        </ul>

                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer4">
                    <CSSTransition
                    in={layer4}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    >

                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                        </ul>

                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer5">
                    <CSSTransition
                    in={layer5}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    >
                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                        </ul>
                    </CSSTransition>
                    </div>
                </div>  

                <br></br>
                <button className="prevBtn" onClick ={() => setLayer2(false)}>
                    Prev
                </button>
                <button className="nextBtn" onClick={() => setLayer2(true)}>
                    Next
                </button>
                <button className="prevBtn" onClick ={() => setStep(step + 1)}>
                    Test
                </button>
                <button className="prevBtn" onClick ={() => setStep(0)}>
                    Reset
                </button>
    
            </div>
        );
    
}

export default Tutorial; 