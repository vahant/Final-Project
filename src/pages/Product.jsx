import React from 'react'
import { useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {addCart} from '../components/redux/action'

export default function Product() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loaded, setLoaded] = useState(false)

    const dispatch = useDispatch()
    const addItem=(product)=>{
      dispatch({type:'ADDITEM', payload:product})
        
      } 

    useEffect(() => {
        const getProducts = async () =>{
            setLoaded(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            console.log(product)
            setLoaded(false)

        }
        getProducts();
    }, [])
    const LoadProduct = () =>{
      return (
        <div>
            <div className="container my-5 py-5">
                <div className="row justify-content-center ">
                  <div className="card" style={{width: "25rem"}}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">{product.title}</h4>
                      <p className="card-text">{product.description}</p>
                      <a href="#" className="btn btn-danger " onClick={() => addItem(product)}>Buy</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
    }

    const Loading = () =>{
      return (
      <>
        Just a second
      </>
      )
    }
    return (
      <>
        {loaded ? <Loading/> : <LoadProduct/>}
      </> 
    )
}
