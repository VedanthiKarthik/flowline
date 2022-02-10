import { makeStyles } from '@mui/styles'

const footerStyle = makeStyles(theme => ({
    footerWrapper: {
        // heigit: '30px',
        padding: '5px',
        color: 'white',
        width: '100%',
        backgroundColor: '#db261d',
        display: 'flex',
        justifyContent: 'space-around',
        // boxShadow: '0 1px 0 #FFF inset',
        '& div': {
            margin: 0,
            // color: 'white',
            textAlign: 'center',
            fontSize: '14px',
        },

    },

}))

export default footerStyle