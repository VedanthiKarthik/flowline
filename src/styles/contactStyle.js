import { makeStyles } from "@material-ui/core";


const contactStyle = makeStyles(theme => ({



    cWrapper: {
        width: '600px',
        padding: 10,
        '& input, & textarea': {
            width: '50%',
            height: '6vh',
            marginTop: '15px',
            // borderBottom: '1px solid black',
            border: 'none',
            outline: '1px solid grey',
            borderRadius: '3px',
            padding: '0px 5px',
            display: 'block'
        },
        '& input:focus, & textarea:focus': {
            outline: '0.5px solid #db261d',
        },

        '& textarea': {
            marginTop: '15px',
            padding: '5px',
            display: 'block',
            height: '6em',
            // borderRadius: '3px',
            width: '80%',
            // outline: '1px solid grey',
            // borderRadius: '3px',
        },
        '& input[type=submit]': {
            backgroundColor: '#db261d',
            outline: 'none',
            color: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
        },



    }

}))

export default contactStyle