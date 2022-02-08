import { makeStyles } from '@mui/styles'


const prodDetails = makeStyles(theme => ({
    psWrapper: {
        height: '100%',
        color: 'white',
        padding: '20px',


    },
    pWrapper: {
        height: '70vh',
        padding: 10,
        margin: '30px 10px',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '10px',
        // backgroundColor: '#aa4747f2',
        backgroundColor: 'white',
        outline: '2px solid #400000e0',
        transitionDuration: '500ms',
        '&:hover': {
            transform: 'scale(1.02)',
            outline: '2px solid red',
            backgroundColor: '#400000e0',
            '& > *': {
                outline: '2px solid red',
                backgroundColor: '#b83030',
                '& > *': {
                    color: 'white',
                    '& > *': {
                        color: 'white'
                    }
                }
            }
        }
    },
    pEven: {
        flexDirection: 'row-reverse'
    },
    e: {},
    dataWrapper: {
        // backgroundColor: '#571f1f',
        outline: '2px solid #400000e0',
        backgroundColor: 'rgb(230,230,230)',
        flex: 3,
        borderRadius: 8,
        margin: '0px 20px',
        padding: '10px 5px',
        boxShadow: 'inset 0px 0px 50px 0px rgb(0 0 0)',
    },
    pTitle: {
        fontWeight: 'bold',
        fontFamily: "'Montserrat', sans-serif",
        fontFamily: "'Oswald', sans-serif",
        fontFamily: "'Roboto Condensed', sans-serif",
        // padding: '30px 10px',
        fontSize: '24px',
        textAlign: 'center',
        color: '#400000e0'
    },
    imgWrapper: {
        flex: 2,
        height: '100%',
        width: '100%',
        // backgroundColor: 'blue',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10,
        border: '3px solid #b83030',
        overflow: 'hidden',
        objectFit: 'cover',
        clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 1% 50%)'
    },
    evenimg: {
        clipPath: 'polygon(0% 0%, 75% 0%, 99% 50%, 75% 100%, 0% 100% )'

    },
    // imgContainer: {
    //     flex: 1,
    //     height: '80%',
    //     backgroundColor: 'red',
    //     maxWidth: '70%',
    //     borderRadius: '10px',
    //     overflow: 'hidden',
    //     objectFit: 'cover'
    // },
    pdescription: {
        color: 'black',
        padding: '10px 20px',
        fontSize: '16px'
    },
    image: {
        width: '100%',
        height: '100%',
    }
}))

export default prodDetails