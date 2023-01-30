import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';

export default function Widgets() {

  function newsArticle(heading, subheading){
    return (
      <div className='widgets--article'>
        <div className='widgets--article--left'>
          <CircleIcon />

        </div>
        <div className='widgets--article--right'>
          <h4>
            {heading}
          </h4>
          <p>{subheading}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='widgets'>
        <div className='widgets--header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Recession", "Now trending - 500K+ readers")}
        {newsArticle("React", "Now trending - 100K+ readers")}
        {newsArticle("Crypto", "Now trending - 10K+ readers")}
        {newsArticle("ChatGPT", "Now trending - Just published")}
    </div>
  )
}
