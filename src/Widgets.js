import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className='widgets____article'>
        <div className='widgets___articleLeft'>
          <FiberManualRecordIcon />
        </div>
        <div className='widgets___articleRight'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='widget'>
      <div className='widgets___header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Im a FullStack Developer Now', '9089 readers')}
      {newsArticle('Im a FullStack Developer Now', '9089 readers')}
      {newsArticle('Im a FullStack Developer Now', '9089 readers')}
      {newsArticle('Im a FullStack Developer Now', '9089 readers')}
      {newsArticle('Im a FullStack Developer Now', '9089 readers')}
      {newsArticle('Im a FullStack Developer Now', '9089 readers')}
    </div>
  )
}

export default Widgets
