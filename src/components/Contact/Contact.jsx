import React from 'react'
import { Dialog, DialogTitle, Slide, Fade, Zoom, DialogContent } from "@material-ui/core"

import contactStyle from '../../styles/contactStyle'

const Contact = ({ isOpen, setDialog }) => {

    const classes = contactStyle()
    console.log(isOpen)

    const fullname = React.useRef("")
    const email = React.useRef("")
    const subject = React.useRef("")
    const message = React.useRef("")

    const messageSubmit = (event) => {
        event.preventDefault()
        console.log(fullname.current.value)
        console.log(email.current.value)
        console.log(subject.current.value)
        console.log(message.current.value)
    }


    return (
        <Zoom in={isOpen} timeout={500}>
            <Dialog
                open={isOpen}
                // TransitionComponent={Transition}
                keepMounted
                onClose={() => setDialog((prev) => !prev)}
                aria-describedby="alert-dialog-slide-description"
            // style={{ backgroundColor: 'transparent' }}
            >
                <DialogContent dividers>
                    <DialogTitle sx={{ color: 'red' }}>Contact Us</DialogTitle>
                </DialogContent>
                <div className={classes.cWrapper}>
                    <form onSubmit={messageSubmit}>
                        <input name="fullname" placeholder="Name" type="text" ref={fullname} />
                        <input name="subject" placeholder="Subject" type="text" ref={subject} />
                        <input name="email" placeholder="Email" type="email" ref={email} />
                        <textarea name="message" placeholder="Message" rows="8" ref={message}></textarea>
                        <input type="submit" name="submit" value="Submit" />
                    </form>
                </div>

            </Dialog >
        </Zoom>
    )
}

export default Contact