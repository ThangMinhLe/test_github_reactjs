import React from 'react'
import './portfolio-detail.scss'
const PortfolioDetail = ({ item, id }) => {

  const handleClose = (e) => {
    document.querySelector(`#portfolio-detail-${id} iframe`).setAttribute('src', '')
    document.querySelector(`#portfolio-detail-${id}`).classList.remove('active')
    document.body.classList.remove("hide-scrolling")

  }

  return (
    <div className="portfolio-detail overlay" id={`portfolio-detail-${id}`}>
      <div className="portfolio-detail__inner">
        <div className="portfolio-detail__content">
          <h3><span>{item.title}</span></h3>
          <div className="img mb-1">
            <div className="img-wrap" style={{ backgroundImage: `url(${item.thumb})` }}></div>
          </div>
          <p>{item.description}</p>
          <ul>
            <li> Created - <span>4 Dec 2022</span> </li>
            <li> Tags - <span>{item.tags.join(', ')}</span> </li>
            <li> Technology - <span>HTML, CSS, ReactJS</span> </li>
            <li> Source - <a href={item.source} target="_blank">{item.source}</a> </li>
            <li> Preview - <a href={item.preview} target="_blank">{item.preview}</a> </li>
          </ul>
          <h3><span>preview video</span></h3>
          <div className="video">
            <div className="frame">
              <iframe src="" title="portfolio" allowFullScreen></iframe>
            </div>
          </div>
          <div className="close-btn" onClick={handleClose}>
            <i className='bx bx-x'></i>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PortfolioDetail