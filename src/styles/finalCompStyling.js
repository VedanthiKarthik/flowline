import { makeStyles } from '@mui/styles'
import footerImg from '../images/footer-background.jpg'

const finalStyling = makeStyles(() => ({
    fWrapper: {
        position: 'relative',
        display: "grid",
        gridTemplateColumns: '3fr 4fr 2fr',
        minHeight: '350px',
        backgroundImage: `url(${footerImg})`,
        backgroundSize: 'cover',
        "&::before": {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: ' rgba(120, 0, 0, 0.5)',
            left: 0,
            top: 0,
        }
    },
    contacts: {
        backgroundColor: 'red',
    }
}))

export default finalStyling