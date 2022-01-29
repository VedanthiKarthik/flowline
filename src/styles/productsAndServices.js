import { makeStyles } from '@material-ui/core/styles';

import pbg from '../images/pbg1.png'
const pAnds = makeStyles(theme => ({
    pAndsWrapper: {
        padding: '0 5px 0px 5px',
        // minHeight: 'calc(100vh - 60px)',
        backgroundColor: 'transparent',

    },
    psContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    p: {
        backgroundImage: `url(${pbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flexBasis: '300px',
        alignItems: 'center',
        // flex: '1',
        // width: '300px',
        height: '300px',
        margin: '20px',
        // overflow: 'hidden',
        position: 'relative',
        transitionDuration: '300ms !important',
        transition: 'all 300ms ease-out !important',
        '&:hover': {
            boxShadow: 'rgba(0,0,0,0.77) 0px 3px 25px',
            transform: 'scale(1.03) !important'
        }
    },
    pContainer: {
        width: '85%',
        height: '85%',
        // margin: ' auto auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: 'linear-gradient(to bottom right, white, black)',
        opacity: '0.4',
        backdropFilter: 'blur(10px)',
        borderRadius: '5px'
    },
    imgWrapper: {
        flex: 4,
    },
    pImg: {
        width: '100%',
        height: '35vh',
        objectFit: 'cover'
    },
    pTitle: {
        cursor: 'pointer',
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: '400',
        color: 'wheat',
        background: 'linear-gradient(to bottom right, black 10%, transparent)',

    },
    typoHeader: {
        // textShadow: '-1px -2px 2px darkgrey',
        textShadow: '-1px -1px 3px white',
        width: 'fit-content',
        color: '#db261d',
        // backgroundImage: 'linear-gradient( to right, #db261d,#db261d)',
        textShadow: '2px 8px 6px rgba(0,0,0,0.6), 0px -5px 35px rgba(255,255,255,1)',
        paddingTop: '10px',
        fontSize: '3rem',
        // color: 'red',
        textAlign: 'center',
        margin: '25px auto 5px auto',
    },
    pextra: {
        color: 'wheat',
        // minHeight: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {

            textShadow: '2px 8px 6px rgba(0,0,0,0.6), 0px -5px 35px rgba(255,255,255,1)',

        }
    },
    divider: {
        // border: 0,
        // borderTop: '1px solid white',
        width: '70%',
        // height: '2px',
        margin: '65px auto',
        border: 0,
        height: '1px',
        backgroundImage: 'linear-gradient(left, #f0f0f0, #8c8c8c, #f0f0f0)'
    },
    // arrowWrappper: {
    //     position: 'relative',
    // backgroundColor: 'green',
    //     border: '2px solid #db261d',
    //     borderRadius: '5px',
    //     width: "80px",
    //     height: '80px',
    //     marginTop: '120px'
    // },
    center: {
        display: 'flex',
        height: '100px',
        width: "100px",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "120px"
    },
    round: {
        position: 'relative',
        border: '3px solid #fff',
        width: '80px',
        height: '80px',
        borderRadius: '100%',
    },

    s: {
        zIndex: '999',
        height: '3px',
        margin: '1px',
        width: '30px',
        background: '#fff',
        transition: '0.4s ease'
    },

    s1: {
        display: ' block',
        position: 'absolute',
        transform: 'rotate(45deg)',
        top: '33%',
        // animation: 'mymove 5s infinite ease-in alternate'
        animation: `$move 500ms ${theme.transitions.easing.easeInOut} infinite alternate`,

    },

    s2: {
        display: 'block',
        position: 'absolute',
        transform: 'rotate(-45deg)',
        bottom: ' 33%',
        // animation: 'mymove 5s infinite ease-in alternate'
        animation: `$move 500ms ${theme.transitions.easing.easeInOut} infinite alternate`,
    },

    "@keyframes move": {
        '0%': {
            // transform: "translateX(20px)"
            left: '30%'
        },
        '100%': {
            // transform: "translateX(-20px)"
            left: '40%'
        }
    }


}))

export default pAnds