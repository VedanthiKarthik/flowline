import { makeStyles } from '@mui/styles'
import footerImg from '../images/footer-background.jpg'


const footerStyles = makeStyles(() => ({
    footerWrapper: {
        // position: 'relative',
        display: "flex",
        flexWrap: 'wrap',
        minHeight: '350px',
        // backgroundImage: `url(${footerImg})`,
        // backgroundSize: 'cover',
        // "&::before": {
        //     content: "''",
        //     position: 'absolute',
        //     width: '100%',
        //     height: 'inherit',
        //     backgroundColor: ' rgba(120, 0, 0, 0.5)',
        //     left: 0,
        //     top: 0,
        // }
    },
    detailsWrapper: {
        // backgroundColor: 'red',
        flex: 4,
        zIndex: 5,
        display: 'grid',
        rowGap: '20px',
        alignSelf: 'start',
        padding: '30px 40px',
        color: 'white',
        fontSize: '14px'
    },
    dimeDetails: {
        // backgroundColor: 'blue',
        flex: 5,
        zIndex: 5,
        color: 'white',
        fontSize: '14px',
        padding: '30px 40px',
        display: 'grid',
        rowGap: '20px',
        alignSelf: 'start',
        fontSize: '14px',
        marginLeft: '40px',
    },
    followUs: {
        // backgroundColor: 'green',
        flex: 3,
        zIndex: 5,
        padding: '30px 40px',
        display: 'grid',
        rowGap: '20px',
        alignSelf: 'start',
        fontSize: '14px',
        marginLeft: '40px',
        "& p": {
            fontSize: '18px',
            color: 'red',
            // textDecoration : 'underline',
            borderBottom: '2px solid red',
            fontWeight: '300',
            margin: 0
        }
    },
    details: {
        display: 'flex',
        // justifyContent: 'center',
        height: '60px',
        alignItems: 'center',
        height: 'auto'
    },
    detail: {
        marginLeft: '15px',
        flex: 1
    },
    details1: {},
    contactIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: 'red',
        width: '2em',
        height: '2em',
        boxShadow: '4px 2px 7px 0 rgb(0 0 0 / 90%), -3px -2px 7px 0 rgb(255 0 0 / 70%)',

    },
    addr: {
        color: 'lightsalmon'
    },
    header: {
        fontSize: '18px',
        color: 'red',
        // textDecoration : 'underline',
        borderBottom: '2px solid red'
    },
    subHeader: {
        "& span": {
            marginLeft: '5px',
            color: "lightsalmon"
        }
    },
    followIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: 'red',
        width: '3em',
        height: '3em',
        justifySelf: 'center',
        boxShadow: '3px 2px 7px 0 rgb(0 0 0 / 90%), -2px -1px 7px 0 rgb(255 255 255 / 60%)',
        "& :hover": {
            cursor: 'pointer'
        }
    }

}))

export default footerStyles