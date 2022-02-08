import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    homeWrapper: {
        // paddingTop: 60,
        // height: 'calc(100vh - 50px)',
        height: '100%',
        backgroundColor: 'transpatent'
    },
    description: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',

    },
    desc: {
        zIndex: 5,
        // -position: 'absolute',
        // -top: '60%',
        textAlign: 'center',
        // color: 'white',
        color: 'black',
        fontSize: '14px',
        zIndex: 999,
        // textShadow: '1px 1px 2px red',
        // backgroundImage: 'linear-gradient(to bottom right, #101012 30%, #1d1d21,#1e1e21)',
        borderRadius: 5,
        padding: 8,
        width: '80%',
        // backdropFilter: 'blur(15px)',
        // color: 'black',
        // textShadow: '-0.4px 0 white, 0 0.4px white, 0.4px 0 white, 0 -0.4px grey',
        margin: '30px',
        // outline: '#fd6565c7 solid 1px',
        // boxShadow: 'rgba(0,0,0,1) 0px 10px 25px',

    },
    desc2: {
        textAlign: 'center',
        // position: 'absolute',
        fontSize: '35px',
        padding: 4,
        animation: `$slide 8000ms ${theme.transitions.easing.easeInOut} infinite alternate`,

        // color: '#000000',
        // textShadow: '1px 1px 2px red',

        // color: 'rgba(255,0,0,1)',
        // color: 'rgb(120 38 38)',
        // color: 'rgb(210 104 81)',
        color: '#db261d',
        // textShadow: '-1px 0px 3px rgba(255,255,255,0.8)'
        textShadow: '-1px 0px 3px rgb(0 0 0 / 80%);'

    },
    desc1: {
        margin: 4,
        // color: 'grey',
        // textShadow: '1px 1px 2px red'
    },
    descWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descWrapper1: {
        position: "absolute",
        // marginTop: 90,
        // marginBottom: 10,
        color: 'white',
        left: '15%',
        top: '40%',
        zIndex: 999,
        // height: '60px',
        // overflow: 'hidden',
        // border: '2px solid #510f0f',
        // width: '70%',
        // backgroundColor: '#883e3e',
        // borderRadius: '8px',
        // boxShadow: 'inset 0px 0px 30px 0px rgba(255 255 255 /10)'
        // boxShadow: 'inset 0px 0px 30px 0px rgba(0 0 0 /60)'

        // backgroundColor: 'grey',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center'
    }, "@keyframes slide": {
        "0%": {
            transform: "translateY(0)"
        },
        "50%": {
            transform: "translateY(-100%)"
        },
        "100%": {
            transform: "translateY(-200%)"
        }
    },

}));

export default useStyles;