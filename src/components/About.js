import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: "#212529",
        color: "white",
        background: "#212529",
        border: "solid 0.2px white",
    })

    // for button mode state:
    const [btnState, setBtnState] = useState("Enable light mode");

    // toggling dark mode on click:
    const toggleStyle = () => {
        // dark->light
        if (myStyle.color === "white") {
            setMyStyle({
                background: "white",
                color: "black",
            })
            setBtnState("Enable dark mode");
        }
        // light->dark
        else {
            setMyStyle({
                backgroundColor: "#212529",
                color: "white",
                background: "#212529",
                border: "solid 0.2px white",
            })
            setBtnState("Enable light mode");
        }
    }

    // let myStyle = {
    //     backgroundColor: "#212529",
    //     color: "white",
    //     background: "#212529",
    // }

    return (
        <>
            <div style={myStyle}>
                <div className="container" style={myStyle}>
                    <h1 className='my-3 mx-3'>About Us</h1>
                    <div class="accordion" style={myStyle} id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" style={myStyle} id="headingOne">
                                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body" style={myStyle}>
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" style={myStyle} id="headingTwo">
                                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body" style={myStyle}>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" style={myStyle} id="headingThree">
                                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body" style={myStyle}>
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-3 mx-3'>
                        <button type="button" className="btn btn-info" onClick={toggleStyle}>{btnState}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
