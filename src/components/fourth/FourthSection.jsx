import React from 'react'
import './FourthSection.css'
import Third_Card from '../../Small_components/Third_Card'

const FourthSection = () => {
  return (
    <div className='Fourth_section'>
      <div className='Benifits'>
        <h1>Benifits</h1>
      </div>
      <div className='flex_displaying_cards'>
      <div className='displaying_cards'>
        <Third_Card/>
        <Third_Card/> 
      </div>
      <div className='displaying_cards'>
        <Third_Card/>
        <Third_Card/>
      </div>
      </div>

        <img src="/src/images/1stfrontImg.png" alt="Overlay Image" className="bottom-right-image1" />
    </div>
  )
}

export default FourthSection