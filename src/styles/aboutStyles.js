import { makeStyles } from "@material-ui/core";

const aboutStyles = makeStyles(theme => ({
    // aboutWrapper: {
    //     // marginTop: '60px',
    //     padding: '20px',
    //     position: 'relative',
    //     // paddingTop: 60,
    //     // paddingLeft: 20,
    //     // minHeight: 'calc(100vh - 50px)',
    //     // backgroundColor: 'transparent'
    // },
    typoHeader: {
        marginTop: 0,
        marginBottom: "10px",
        textShadow: '-1px -1px 3px white',
        fontSize: '3rem',
        // color: 'rgba(255,0,0,0.8)',
        // color: '#ff9595b8',
        // color: 'rgb(210 104 81)',
        color: '#db261d',
        textShadow: '2px 8px 6px rgba(0,0,0,0.6), 0px -5px 35px rgba(255,255,255,1)',
        // fontWeight: 'bold',
        // text-shadow: 2px 2px 3px rgb(123 35 30 / 50%);
        // textShadow: ' 1px 1px white, -1px -1px #000',
        // textAlign: 'center',
        // textDecoration: 'underline',
        // textDecorationColor: 'grey'
    },
    // typoSubs: {
    //     paddingTop: '6px',
    //     color: 'navy',
    //     fontWeight: 'bold',
    //     textAlign: 'center'
    // },
    media: {
        marginTop: '20px',
        width: '120px',
        height: '65px',
        objectfit: 'scale-down',
        borderRadius: '5px',
        outline: '0.5px solid white',
        // boxShadow: 'rgba(255, 255, 255, 0.94) 0px 2px 3px',
        // -boxShadow: 'rgba(0,0,0,0.77) 0px 3px 25px',


        // overflow: 'hidden'
    },
    imgHolder: {
        // -borderRadius: '5px',
        overflow: 'hidden',
        marginTop: '10px',
        borderRight: '1px solid lightgrey'
    },
    branchWrapper: {
        display: 'flex',
        flexWrap: 'wrap-reverse;',
        marginBottom: '30px',
        justifyContent: 'space-evenly',
        // flexWrap: 'wrap'
    },
    branchHolder: {
        // flexGrow: 1,
        marginTop: '15px',
        maxWidth: '200px',
        padding: '10px',
        boxShadow: 'rgba(255, 255, 255, 0.94) 0px 0px 6px',
        // boxShadow: 'rgba(0,0,0,0.77) 0px 3px 25px',
        height: '135px',
        fontSize: '16px',
        // backgroundColor: '#0f0f11',
        backgroundImage: 'linear-gradient(to bottom right, #101012 30%, #1d1d21,#1e1e21)',
        color: 'white',
        '&:hover': {
            // boxShadow: 'rgba(255, 0, 0, 0.94) 0px 0px 10px',
            // border: '0.2px solid #fd6565c7',
            boxShadow: 'rgba(0,0,0,0.77) 0px 3px 25px',


        }
        // border: '0.5px solid white'
    },
    clientsWrapper: {
        margin: '5px 0px 0px 0px ',
        paddingBottom: 30
    },
    edetails: {
        marginTop: '15px',
        maxWidth: '420px',
        padding: '10px',
        // backgroundColor: '#0f0f11',
        boxShadow: 'rgba(255, 255, 255, 0.94) 0px 0px 6px',

        height: '135px',

        backgroundImage: 'linear-gradient(to bottom right, #101012 30%, #1d1d21,#1e1e21)',
        color: 'white',
        '&:hover': {
            boxShadow: 'rgba(0,0,0,0.77) 0px 3px 25px',
            // boxShadow: 'rgba(255, 0, 0, 0.94) 0px 0px 10px',
        }
        // border: '1px solid white'
    },
    branch: {
        // fontWeight: 'bold',
        display: 'block'
    },
    branchDetails: {
        marginTop: '5px',
        fontSize: '12px',
    },
    bottomGrid: {
        display: 'flex',
        // marginBottom: '30px'
    },
    branches: {
        flex: 1
    },
    wave: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        opacity: 0.4,
        height: '45%'
    },
    aBody: {
        display: 'flex',
        flexWrap: 'wrap-reverse',
    },
    aDetailsText: {
        color: 'grey',
        fontSize: 14,
        minWidth: '40%',
        flex: 3,
        padding: 5,
        "& h3": {
            width: 'fit-content',
            color: 'black',
            borderBottom: '1px solid grey'
        },
        "& ul": {
            paddingLeft: 16,
            margin: "0.6em 0",
            color: '#db261d',
            fontWeight: 'bold',
            // "& li": {
            //     "& ::before": {
            //         // content: '"\2022"',
            //         content: '',    
            //         color: 'blue',
            //         fontWeight: 'bold',
            //         display: 'inline-block',
            //         width: '1em',
            //         marginLeft: '-1em',
            //     }
            // }
        }
    },
    aImgWrapper: {
        flex: 2,
        display: 'grid',
        justifyItems: 'center',
        // backgroundColor: 'grey'
    },
    aDetails: {
        marginBottom: 10
    }

}))


export default aboutStyles