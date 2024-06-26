import React from 'react'
import './FivthSection.css'
import Fivth_Card from '../../Small_components/Fivth_Card'

const FivthSection = () => {
  return (
    <div className='Fifth_section'>
        <div className='header'>
          <h1>How To Buy</h1>
        </div>
        <div className='fifthsection_card_flex'>
           <div className='card'>
               <Fivth_Card img="/src/images/fifthcard1.png"/>
           </div>
           <div className='card'>
               <Fivth_Card img="/src/images/fifthcard2.png"/>
           </div>
           <div className='card'>
               <Fivth_Card img="/src/images/fifthcard3.png"/>
           </div>
        </div>
    </div>
  )
}

export default FivthSection
