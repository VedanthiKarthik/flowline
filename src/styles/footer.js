import { makeStyles } from '@mui/styles'

const footerStyle = makeStyles(theme => ({
    footerWrapper: {
        height: 30,
        // padding: 10,
        color: 'white',
        width: '100%',
        // position: 'absolute',
        // bottom: 4,
        '& footer': {
            padding: 5,

            backgroundColor: '#db261d',
            display: 'flex',
            justifyContent: 'space-around',
            // boxShadow: '0 1px 0 #FFF inset',
            '& div': {
                margin: 0,
                color: 'white',
                textAlign: 'center',
                fontSize: '14px',

            },
            '&  p': {

            }
        },
    }
}))

export default footerStyle