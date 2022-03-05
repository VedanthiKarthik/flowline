import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Tab, TabPanelUnstyled, Tabs } from '@mui/material'
import tabStyles from '../../styles/tabs'
import ProductsDetails from '../PandSDetails/ProductsDetails'
import ServiceDetails from '../PandSDetails/ServiceDetails'
import '../../styles/tab.css'


const TabComponent = () => {

    const [selectedTab, setTab] = React.useState(0)
    const classes = tabStyles()
    useLayoutEffect(() => {
        window.location.href = '#main'

    }, []);

    const [locationKeys, setLocationKeys] = useState([])
    const history = useHistory()

    useEffect(() => {
        return history.listen(location => {
            if (history.action === 'PUSH') {
                setLocationKeys([location.key])
            }

            if (history.action === 'POP') {
                if (locationKeys[1] === location.key) {
                    setLocationKeys(([_, ...keys]) => keys)
                    console.log(location.key)
                    // Handle forward event

                } else {
                    setLocationKeys((keys) => [location.key, ...keys])

                    // Handle back event

                }
            }
        })
    }, [locationKeys,])



    const handleTab = (event, tabIndex) => {
        setTab(tabIndex)
        console.log(selectedTab)
    }

    return (
        <div id='main' className='tab-wrapper'>
            <Tabs
                value={selectedTab}
                onChange={handleTab}
                variant="fullWidth"
                aria-label="full width tabs"
                TabIndicatorProps={{ sx: { display: 'none' } }}
            // sx={{ marginTop: '50px' }}
            >
                <Tab disableRipple label={`Products`} sx={{ fontSize: 24, }} className={` ${selectedTab === 0 ? 'selected-tab' : 'product-tab'}`} />
                <Tab disableRipple label={`Services`} sx={{ fontSize: 24, }} className={` ${selectedTab === 1 ? 'selected-tab' : 'service-tab'}`} />
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
