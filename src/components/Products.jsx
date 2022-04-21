import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Products() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addItem=(product)=>{
        dispatch({type:'ADDITEM', payload:product})
          
    } 
    useEffect(() => {
        const getProducts = async () =>{
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products');
            setData(await response.json());
            setLoading(false)
        }
        getProducts();
    }, [])

    const LoadedProducts = () =>{
        return(
            <>
            {data.map((e) =>{
            return(
                <div className="card col-md-3  m-3" >
                <img src={e.image} className="card-img-top" alt="..." height='250px' />
                <div className="card-body">
                    <h5 className="card-title">{e.title.substring(0, 12)}</h5>
                    <p className="card-text">{e.price}$</p>
                    <NavLink to={`/product/${e.id}`} className="btn btn-outline-primary">View</NavLink>
                    <button  className="btn btn-outline-primary" onClick={() => addItem(e)}>Add to cart</button>
                </div>
                </div>
            )
        })}
            </>
        )
    }
    const Loading = () =>{
        return (
        <>
          Just a second
        </>
        )
      }
    return(
        <div>
            <div className="container my-5 py-5">
                <div className="row col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'> Products</h1>
                    <hr />
                </div>
                <div className="row justify-content-center ">
                    {loading ? Loading : <LoadedProducts/>}
                </div>
        </div>
        </div>
    )
    
}
