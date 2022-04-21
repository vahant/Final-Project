import React from 'react'
import Form from './Form'

export default function Signup() {
  return (
    <div className='singin-container'>
        <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="inputEmail3" />
             </div>
        </div>
        <Form/>
    </div>
  )
}
