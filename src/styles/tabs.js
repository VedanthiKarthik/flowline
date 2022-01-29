import { makeStyles } from "@material-ui/core";


const tabStyles = makeStyles((theme) => ({
    tabWrapper: {
        marginTop: '60px 0'
    },
    selectedtab: {
        // backgroundImage: 'linear-gradient(to right, grey, black)',
        backgroundColor: 'transparent !important '
    },
    selectedtab2: {
        // backgroundImage: 'linear-gradient(to right, black , darkgrey, black)',
    },
    defaulttab1: {
        backgroundColor: '#400000e0',
        borderRadius: '0px 0px 15px 0px'
    },
    defaulttab2: {
        backgroundColor: '#400000e0',
        borderRadius: '0px 0px 0px 15px'
    }
}))

export default tabStyles