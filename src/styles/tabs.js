import { makeStyles } from "@material-ui/core";


const tabStyles = makeStyles((theme) => ({
    tabWrapper: {
        // marginTop: '60px'
        backgroundColor: 'rgb(230,230,230)'
    },
    selectedtab: {
        color: '#400000e0 !important',
        // backgroundImage: 'linear-gradient(to right, grey, black)',
        backgroundColor: 'transparent !important '
    },
    selectedtab2: {
        // backgroundImage: 'linear-gradient(to right, black , darkgrey, black)',
    },
    defaulttab1: {
        backgroundColor: '#400000e0',
        borderRadius: '0px 0px 15px 0px',
        color: 'white !important'
    },
    defaulttab2: {
        backgroundColor: '#400000e0',
        borderRadius: '0px 0px 0px 15px',
        color: 'white !important'

    }
}))

export default tabStyles