import { makeStyles } from "@material-ui/core";


const navStyles = makeStyles({

    // navWrapper: {
    //     position: 'sticky',
    //     top: '50px',
    // },
    appbar: {
        // backgroundImage: 'linear-gradient(to bottom, rgba(64,0,0,0.5), black)',
        // backgroundColor: 'white',
        // position: 'sticky',
        // top: 0,
        padding: '6px 0px',
        // minHeight: "50px",
        // maxHeight: "60px"
        height: '60px !important',
        borderBottom: '1px solid #c74f4f'

    },
    toolBar: {
        // height: '100%',
    },
    logoWrapper: {
        display: 'flex',
        flexGrow: 1,
        // marginLeft: '10px',
        '& h2': {
            marginLeft: '45px'
        }
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