import React from 'react'
import './Items.scss';

const Items = ({id,img,name}) => {
  return (
      <div className='box'>
        <img src={img} alt="" />
        <div className="image-name">{name}</div>
      </div>
  )
}

export default Items