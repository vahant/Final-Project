import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default function Navbar() {
  const state = useSelector((state) => state.cartChange)
  return (
    
    <div className='container'>
      <div className='wrapper'>
        <div className='right'>
        <NavLink to={`/`} className="btn">Home</NavLink>
          <div className='search'>
            <input className='searchinput' type="text" />
            <SearchIcon></SearchIcon>
          </div>
        </div>
        <div className='center'>
          Nice Logo
        </div>
        <div className='left'>
          <NavLink to={`/signup`} className="btn">Sign up</NavLink>
          <NavLink to={`/signin`} className="btn">Sign in</NavLink>
          <NavLink to={`/cart`} className="btn"><CartIcon/>({state.length})</NavLink>
        </div>
      </div>
    </div>
  )
}
