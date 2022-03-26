import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
    },
    description: {
        justifyContent: 'center',
        width: '80%',
        margin: '25px auto',
        textAlign: 'center',
        fontSize: '14px',
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
        color: 'var(--color-neutral) !important',
        left: '15%',
        top: '35%',
        zIndex: 10,

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