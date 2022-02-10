import { makeStyles } from '@material-ui/core'

const carousal = makeStyles(theme => ({

    cMain: {
        maxWidth: '100vw',
        height: '100vh',
        overflow: 'hidden',
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
        height: '100vh',
        borderRadius: '10px',
        overflow: 'hidden',
        // zIndex: -10
        // opacity: 0.7
    },
    headerTitle: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        // paddingLeft: 'auto',
        // paddingTop: 10,
        // fontWeight: '400',
        // color: 'blue',
        zIndex: 10,
        background: 'linear-gradient(to bottom left, rgba(0,0,0,0.7) , rgba(0,0,0,0.8))'
        // background: 'black',

    }

    // '@keyframes myfirst': {
    //     0%   { left:'0px'; 'top:0px'}
    //     50%  { left:200px; top:0px;}
    //     100% {left:0px; top:0px;}
    //   }
}))


export default carousal