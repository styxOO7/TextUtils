import React, { useState } from 'react'

export default function TextBox(props) {
    // state variable
    const [text, setText] = useState("");
    // text = "Please change the text";  // incorrect way
    // setText("Please change the text");  // correct way

    // functions:
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const removePun = () => {
        let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        setText(text.replace(regex, ""));
    }

    const removeExtraSpace = () => {
        // const sentence = '    My string with a    lot   of Whitespace.  '.replace(/\s+/g, ' ').trim()
        // g indicates iteration over the string.
        // \s: whitespace detection in regEx
        // trim(): for trimming at start and end
        // regEx literal: /text/

        let ntext = text.replace(/ \s+ /g, " ").trim();
        setText(ntext);
    }

    const copyText = ()=>{
        let text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const clearText = ()=>{
        setText("");
    }

    const readingTime = ()=>{
        let min = 0;
        let sec = 0;
        if(text.length > 1){
            min = parseInt(0.006 * text.split(" ").length);
            sec = ((0.006 * text.split(" ").length - parseInt(0.006 * text.split(" ").length)) * 60).toFixed(2);
        }

        return min + " Minutes " + sec + " seconds to read";
    }

    // const removeEndLines = ()=>{
    //     // let endlineExp = "";
    //     // let ntext = text.replace(/[\r\n]+/gm, " ");
    //     // setText(ntext);
    //     // let ntext = "";
    //     // for(let i=0;i<text.length;i++){
    //     //     if(text[i] != "\n" || text[i] != "\r") ntext[i] += text[i];
    //     // }
    //     // setText(ntext);
    // }

    const textInsights = (k) => {
        // calling via index: wordcount, line count, number count, punctuations, capital, small letter
        let insights = [0, 0, 0, 0, 0, 0];

        let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let punRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

        // wordcount
        if (text.length === 0) {
            insights[0] = 0;
        } else insights[0] = text.split(" ").length - 1;

        // line count, number count, capitals, smalls
        for (let i = 0; i < text.length; i++) {
            if (text[i] === "\n") insights[1]++;
            if (num.includes(text[i])) insights[2]++;
            else if (letters.includes(text[i])) insights[5]++;
            else if (letters.toUpperCase().includes(text[i])) insights[4]++;
        }

        // punctuations
        let newText = text;
        newText = newText.replace(punRegex, "");
        insights[3] = text.length - newText.length;

        return insights[k];
    }


    // for enabling typing: function with an event to handle the change in the variable text. i.e. instant change in state
    const handleOnChange = (event) => {
        console.log("On change.");
        setText(event.target.value);
    }


    // styling
    const textBoxStyle = {
        fontSize: "16px",
        background: "#f4f4f4",
        padding: "24px",
        borderLeft: "6px solid #005282",
        fontFamily: "consolas"
    }



    return (
        <>
            <br></br>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ paddingLeft: 60, fontSize: "19px", fontWeight: "Bold" }}>
                        <div className="container mx-3" >
                            <div className="row">
                                <div className="col">
                                    <b>Total Words = {textInsights(0)}</b>
                                </div>
                                <div className="col">
                                    <b>Number Count = {textInsights(2)}</b>
                                </div>
                                <div className="col">
                                    <b>Capital letters = {textInsights(4)}</b>
                                </div>
                                <div className="col">
                                    <b>Small letters = {textInsights(5)}</b>
                                </div>
                                <div className="col">
                                    <b>Punctuations = {textInsights(3)}</b>
                                </div>
                                <div className="col">
                                    <b>Total lines = {textInsights(1) + 1}</b>
                                </div>
                            </div>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <br></br>

            <div>
                <div className="mb-3 mx-3">
                    <h3><b><label htmlFor="textBox" className="form-label">{props.heading}</label></b></h3>
                    <textarea className="form-control" onChange={handleOnChange} style={{ fontFamily: "consolas" }} value={text} id="textBox" rows="6"></textarea>
                </div>
                <div className="form-check form-switch mx-3">
                    <input className="form-check-input" onClick={handleUpClick} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">UpperCase</label>
                </div>
                <div className="form-check form-switch mx-3">
                    <input className="form-check-input" onClick={handleLowClick} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">LowerCase</label>
                </div>
                <div className="form-check form-switch mx-3">
                    <input className="form-check-input" onClick={removePun} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remove Punctuations</label>
                </div>
                <div className="form-check form-switch mx-3">
                    <input className="form-check-input" onClick={removeExtraSpace} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remove Extra Spaces</label>
                </div>
                {/* <div className="form-check form-switch mx-3">
                    <input className="form-check-input" onClick={removeEndLines} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remove New lines</label>
                </div> */}
            </div>

            <div className="container my-3 mx-0">
                <p>{readingTime()}</p>
                <h3><b>Preview</b></h3>
                <pre style={{ whiteSpace: 'pre-wrap' }}><p style={textBoxStyle}>{text}</p></pre>
            </div>

            <button type="button" className="btn btn-info" onClick={copyText}>Copy text</button>
            <button type="button" className="btn btn-danger mx-2" onClick={clearText}>Clear text</button>
            <div className="cont my-4"></div>
        </>
    )
}
