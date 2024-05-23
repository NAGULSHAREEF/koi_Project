import React from 'react'
import './SixthSection.css'
const SixthSection = () => {
  return (
    <div className='sixthSection'>
        <div><h1>Buy Now</h1></div>
        <div className='sixth_card'>
            <div className='sixth_inner_card'>
              <div><p>0.0</p></div>
              <div className='sixth_small_flex'>
                <div><img src="/src/images/feed.png" alt="" /></div>
                <div><p>Balance: 0.00</p></div>
              </div>
              
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div><button>Connect Wallet</button></div>
    </div>
  )
}

export default SixthSection