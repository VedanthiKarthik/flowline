import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%',
        backgroundColor: 'transpatent'
    },
    description: {
        justifyContent: 'center',
        width: '80%',
        margin: '25px auto',
        textAlign: 'center',
        fontSize: '16px',
        padding: 8,
    },
    // desc2: {
    //     textAlign: 'center',
    //     fontSize: '35px',
    //     padding: 4,
    //     animation: `$slide 8000ms ${theme.transitions.easing.easeInOut} infinite alternate`,
    //     color: '#db261d',
    //     textShadow: '-1px 0px 3px rgb(0 0 0 / 80%);'
    // },

    descWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descWrapper1: {
        position: "absolute",
        color: 'white',
        left: '15%',
        top: '40%',
        zIndex: 999,

    },
    // "@keyframes slide": {
    //     "0%": {
    //         transform: "translateY(0)"
    //     },
    //     "50%": {
    //         transform: "translateY(-100%)"
    //     },
    //     "100%": {
    //         transform: "translateY(-200%)"
    //     }
    // },

}));

export default useStyles;