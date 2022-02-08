import React from 'react'
import { Tab, TabPanelUnstyled, Tabs } from '@mui/material'
import tabStyles from '../../styles/tabs'
import ProductsDetails from '../PandSDetails/ProductsDetails'
import ServiceDetails from '../PandSDetails/ServiceDetails'


const TabComponent = () => {

    const [selectedTab, setTab] = React.useState(0)
    const classes = tabStyles()

    const handleTab = (event, tabIndex) => {
        setTab(tabIndex)
        console.log(selectedTab)
    }

    return (
        <div className={classes.tabWrapper}>
            <Tabs
                value={selectedTab}
                onChange={handleTab}
                variant="fullWidth"
                aria-label="full width tabs"
                TabIndicatorProps={{ sx: { display: 'none' } }}
            // sx={{ marginTop: '50px' }}
            >
                <Tab disableRipple label={`Products`} sx={{ fontSize: 24, }} className={` ${selectedTab === 0 ? classes.selectedtab : classes.defaulttab1}`} />
                <Tab disableRipple label={`Services`} sx={{ fontSize: 24, }} className={` ${selectedTab === 1 ? classes.selectedtab : classes.defaulttab2}`} />
            </Tabs>
            {/* <TabPanel index={0} value={selectedTab}><ProductsDetails /></TabPanel>
            <TabPanel index={1} value={selectedTab}><ServiceDetails /></TabPanel> */}
            {selectedTab === 0 ? <ProductsDetails /> : <ServiceDetails />}

        </div>
    )
}


// function TabPanel(props) {
//     const { children, index, value } = props
//     return (
//         console.log(value, index)
//     )
// }

export default TabComponent
