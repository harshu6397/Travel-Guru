import React from 'react'
import Spinner from './Loader.svg'
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <img className='loader-img' src={Spinner} alt="" />
    </div>
  )
}
