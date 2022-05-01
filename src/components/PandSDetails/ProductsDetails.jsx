import React, { useState, useEffect } from 'react'
import ps from '../../images/p&sImg'
import '../../styles/productDetails.css'
import { useLocation } from 'react-router-dom'

const ProductsDetails = () => {

    const [filterCondition, setFilterCondition] = useState("all")
    const [productList, setProductList] = useState([])

    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    useEffect(() => {
        var filterResult = ps.filter(checkProductFilter)
        setProductList(filterResult)
    }, [filterCondition])




    var procuctList = productList.map((data, index) => (
        // data.type === 'product' &&
        <div className='product-wrapper' key={index}>
            <div className='product-text'>
                <div className='product-title'>{data.title}</div>
                <ul>
                    {data.description !== undefined ?
                        <li className="p-description">
                            {data.description}
                        </li> : null}

                    {data.Filters !== undefined ?
                        <li className="p-description">
                            {data.Filters}
                        </li> : null}

                    {data.Softener !== undefined ?
                        <li className="p-description">
                            {data.Softener}
                        </li> : null}

                    {data.ROPlant !== undefined ?
                        <li className="p-description">
                            {data.ROPlant}
                        </li> : ''}

                    {data.DMMBPlants !== undefined ?
                        <li className="p-description">
                            {data.DMMBPlants}
                        </li> : ''}

                    {data.FilterSoftener !== undefined ?
                        <li className="p-description">
                            {data.FilterSoftener}
                        </li> : ''}


                    {data.d0 !== undefined ?
                        <li className="p-description">
                            {data.d0}
                            <ul>
                                <li>{data.l1}</li>
                                <li>{data.l2}</li>
                                <li>{data.l3}</li>
                                <li>{data.l4}</li>
                            </ul>
                        </li> : ''}

                    {data.cdescription !== undefined ?
                        <li className="p-description">
                            {data.cdescription}
                            <ul>
                                <li>{data.c1}</li>
                                <li>{data.c2}</li>
                                <li>{data.c3}</li>
                                <li>{data.c4}</li>
                                <li>{data.c5}</li>
                                <li>{data.c6}</li>
                            </ul>
                        </li> : ''}
                </ul>
            </div>
            <div className='product-image-wrapper'>
                <div className='product-image'>
                    <img src={data.url} alt={data.title} />
                </div>
            </div>
        </div>))


    function checkProductFilter (list) {
        // console.log(filterCondition)
        if (filterCondition === "all") {
            return list
        }
        if (filterCondition === "product") {
            return list.type === "product"
        }
        if (filterCondition === "service") {
            return list.type === "service"
        }
    }


    // var filterResult = list.filter(checkProductFilter)

    return (
        <div className='p-s-container'>
            <FilterButtons filterCondition={filterCondition} setFilterCondition={setFilterCondition} />
            <div className='p-s-wrapper' >
                {procuctList}
            </div>
        </div>
    )

}




function FilterButtons ({ filterCondition, setFilterCondition }) {
    const filterButtons = ["all", "product", "service"]


    useEffect(() => {
        // console.log("no params")
        var filterBtns = document.getElementsByClassName("filter-button")
        for (var i = 0; i < filterBtns.length; i++) {
            filterBtns[i].addEventListener("click", handleFilter)
        }

        filterBtns[0].setAttribute("id", 'active')
        return () => {
            for (var i = 0; i < filterBtns.length; i++) {

                filterBtns[i].removeEventListener("click", handleFilter)
            }
        }
    }, [])

    function handleFilter (event) {
        var activeFilter = document.getElementById("active")
        activeFilter.removeAttribute("id")
        event.target.setAttribute("id", "active")
        setFilterCondition(event.target.textContent)
    }

    return (
        <div className='filter-button-wrapper' id="filters">
            {filterButtons.map((value, index) => (
                <div className="filter-button" key={index}>{value}</div>
            ))}
        </div>
    )
}



export default ProductsDetails
