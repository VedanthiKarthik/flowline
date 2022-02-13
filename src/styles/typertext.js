import { makeStyles } from '@mui/styles'


const typertext = makeStyles(theme => ({
    //     // container: {
    //     // minHeight: 100vh;
    //     //     display: 'flex';
    //     //     justify-content: center;
    //     //     align-items: center;
    //     //   },

    //     text: {
    //         display: 'none',
    //         width: `calc(.15rem + (1ch * var(--chars)))`,
    //         overflow: 'hidden',
    //         borderRight: '.15rem solid ',
    //         whiteSpace: 'nowrap',
    //         fontFamily: 'monospace',
    //         animation: `$typing 2s steps(var(--chars)) , $blink .5s step-end infinite alternate`
    //     },

    //     " @keyframes typing": { 'from': { width: '0%' } },
    //     " @keyframes blink": { '50%': { borderColor: 'transparent' } },

    cursor: {
        fontSize: '40px',
        // display: 'inline-block',
        position: 'relative',
        '&:after': {
            content: '""',
            margin: 'auto',
            position: 'absolute',
            right: '-4px',
            top: '-3px',
            width: '3px',
            height: '100%',
            backgroundColor: 'red',
            animation: `$cursor-animation 1s step-end infinite`
        },
    },


    '@keyframes cursor-animation': {
        ' 0%': {
            opacity: 0,
        },
        '50%': {
            opacity: 1
        },
        '100%': {
            opacity: 0
        }
    }

}))

export default typertext