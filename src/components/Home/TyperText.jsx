import React, { useState, useEffect, useRef } from 'react'
import typertext from '../../styles/typertext'
import useTypewriter from "react-typewriter-hook";


const TyperText = () => {

    /*    const alltexts = useRef("")
        const [index, setindex] = useState(0)
        const [prevtext, setPrevtext] = useState(null)
    
    
    
        // useEffect(() => {
        //     console.log("use-" + 1)
        //     const texts = alltexts.current.children
        //     setPrevtext(texts[1])
        //     console.log(prevtext)
        // })
    
        useEffect(() => {
            // const texts = document.querySelectorAll("div span")
            console.log("use-" + 2)
    
            const texts = alltexts.current.children
    
            // console.log(texts[0])
    
            // console.log(prevtext)
    
            // console.log(texts.length)
            // console.log(index)
            // let prevText = texts[texts.length - 1]
            // let i = 0
            setInterval(() => {
    
                setindex(i => (i + 1) % texts.length)
                
            }, 10000)
    
            // function animate() {
            // console.log("animating")
            // setindex(preIndex => preIndex + 1)
    
            // console.log("newindex " + index)
    
            //     let index = (i++) % texts.length
    
            //     prevText.style.display = "none"
            //     texts[index].style.display = "block"
    
            //     prevText = texts[index]
            // }
        }, [])
    
        useEffect(() => {
            console.log("use-" + 3)
            // console.log(index)
            const texts = alltexts.current.children
            console.log(texts[index])
            setPrevtext(texts[index])
            // console.log(prevtext)
        }, [index, prevtext])
    
        // animate()
        // setInterval(_ => animate(), 10000)
    
        // function animate() {
        //     setindex(preIndex => preIndex + 1)
        // }
    
        
        // console.log("component")
        */
    const classes = typertext()
    const Texts = [
        'Vision: INDUSTRY LEADERS IN UTILITY MANAGEMENT',
        'Mission: EXCELLENCE THROUGH CUSTOMER FOCUS'
    ];
    const TextsHeader = [
        " ",
        " "
    ]
    let index = 0;

    const [text, setText] = useState(Texts[0]);
    // const [textHeader, setTextHeader] = useState(TextsHeader[0]);

    const intervalRef = useRef({});
    // const typingTextHeader = useTypewriter(textHeader);
    const typingText = useTypewriter(text);
    // var splitText = ""
    // splitText = typingText !== null && typingText.indexOf(":") > -1 ? typingText.split(":") : ""
    // const splitText = typingText.split(":")

    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                // index = index + 1 > 2 ? 0 : ++index + 1;
                index = index > 2 ? 0 : ++index;
                setText(Texts[index]);
                // setTextHeader(TextsHeader[index])
            }, 5000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [text]
    );

    // var completeText = <h5>{textHeader} {typingText}</h5>

    return (
        <p className='cursor'>{typingText}</p>

        // <div ref={alltexts}>
        //     <span className={classes.text}>FrontEnd Developer</span>
        //     <span className={classes.text}>UI/UX Designer</span>
        //     <span className={classes.text}>Graphic Designer</span>
        //     <span className={classes.text}> Game Developer</span>
        // </div>
    )
}

export default TyperText
