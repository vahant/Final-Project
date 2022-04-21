import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const items = useSelector(state => state.cartChange)
  const dispatch = useDispatch()

  const deleteitem = (product) =>{
    dispatch({type:'DELITEM', payload:product})
    console.log(items)
  }
  const loaditem = (item) =>{
    return (
      <div className='px-4 my-5 bg-light rounded-3' key={item.product.key}>
          <div className="card mb-3" max-width= '540px' margin ='20px'>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={item.product.image} height='200px'width='180px' className="img-fluid rounded-start" alt="..." />
            </div>
            <div classNameName="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{item.product.title.substring(0, 12)}</h5>
                <p className="card-text">{item.product.price}$</p>
                <button onClick={() => deleteitem(item)}>Delete</button>
              </div>
            </div>
          </div>
          </div>
      </div>
    )
  }

  const EmptyCard = () =>{
    console.log("NOthing")
    return(
      <div className="alert alert-primary " role="alert">
          No items in the card
    </div>
    )
  }
  return (
    <>
    {items.length != 0 ? items.map((item) =>{
      return(
        loaditem(item)
      )
    }) : <EmptyCard/>}
    </>
  )
}