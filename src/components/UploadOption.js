import React from 'react'
import './UploadOption.css'

export default function UploadOption({title, Icon, color}) {
  return (
    <div className='upload--option'>
        <Icon className="icon" style={{color: color}}/>
        <h4>{title}</h4>
        
    </div>
  )
}
