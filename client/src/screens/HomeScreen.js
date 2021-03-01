import React, { useEffect } from 'react'
import { Fragment } from 'react'

import {listProducts} from '../actions/productActions'
import {useDispatch , useSelector}  from 'react-redux'
import {Row , Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'



const HomeScreen = () => {

    const dispatch = useDispatch()

    const productList =  useSelector(state=>state.productList)
    console.log(productList)
    const {products,
        loading,
        error} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        
        <Fragment>
            {loading ? (<Loader/>) : error ? (<ErrorMessage variant="danger" children={error}></ErrorMessage>) : <Row>
                    {products.map(product =>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>}     
        </Fragment>
    )
}

export default HomeScreen
