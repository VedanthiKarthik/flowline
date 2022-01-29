import { makeStyles } from '@material-ui/core'

const carousal = makeStyles(theme => ({

    c: {
        maxWidth: '95vw',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: 'rgba(0,0,0,1) 0px 10px 40px',


    },
    cWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgs: {
        // position: 'absolute',
        objectFit: 'cover',
        width: '100%',
        height: '60vh',
        borderRadius: '10px',
        overflow: 'hidden'
        // zIndex: -10
    },
    headerTitle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // paddingLeft: 'auto',
        // paddingTop: 10,
        fontWeight: '400',
        color: 'blue',
        zIndex: 10,
        background: 'linear-gradient(to bottom left, black 0%, transparent 30%)'
    }

    // '@keyframes myfirst': {
    //     0%   { left:'0px'; 'top:0px'}
    //     50%  { left:200px; top:0px;}
    //     100% {left:0px; top:0px;}
    //   }
}))


export default carousal