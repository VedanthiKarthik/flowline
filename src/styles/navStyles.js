import { makeStyles } from "@material-ui/core";


const navStyles = makeStyles({


    appbar: {
        padding: '6px 0px',
        height: '60px !important',
        borderBottom: '1px solid #c74f4f'

    },
    toolBar: {
        // height: '100%',
    },
    logoWrapper: {
        maxHeight: '100%',
        display: 'flex',
        flexGrow: 1,
        // marginLeft: '10px',
        // '& h2': {
        //     marginLeft: '45px'
        // }
    },
    companyName: {
        fontSize: '20px',
        marginLeft: '45px',
        fontWeight: 'bold'

    },
    logo: {
        // background: 'white',
        position: 'absolute',
        barderRadius: '50%',
        top: 1,
        height: '45px',
        width: '75px',
        objectFit: 'scale-down'
    },
    navbtn: {
        margin: '0 5px !important',
        // borderRadius: '0px !important',
        height: '30px !important',
        // backgroundImage: 'linear-gradient(to bottom right, #101012 30%, #1d1d21,#1e1e21) !important',
        fontWeight: '550',
        color: "#db261d",
        // border: '1px solid white !important'
    },
    navbtnSelect: {
        color: "black !important",
        outline: '2px solid #db261d',
        backgroundImage: 'none !important'
    }
})

export default navStyles