import React from 'react'
import './Fivth_Card.css';
const Fivth_Card = ({img}) => {
  return (
    <div className='FifthSession_card'>
      <div>
        <img src={img} alt="" className='fifthimage_card'/>
      </div>
      <div>
        <p>Submit KYC</p>
      </div>
      <div>
        <p className='fifth_P2'>The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested.</p>
      </div>
    </div>
  )
}

export default Fivth_Card