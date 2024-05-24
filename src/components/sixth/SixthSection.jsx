import React from 'react'
import './SixthSection.css'

const SixthSection = () => {
  return (
    <div className='sixthSection'>
        <div className='header'>
            <h1>Buy Now</h1>
        </div>
        <div className='sixth_card'>
            <div className='sixth_inner_card'>
              <div><p>0.0</p></div>
              <div className='sixth_small_flex'>
                <div><img src="/src/images/feed.png" alt="" className='img_sixth'/></div>
                <div ><p className='p_sixth'>Balance: 0.00</p></div>
              </div> 
            </div>
            <div className='mixed_sixth'>
              <img src="/src/images/dropdown.png" alt="" />
              <img src="/src/images/downarrow.png" alt="" />
            </div>
            <div className='sixth_inner_card'>
              <div><p>0.0</p></div>
              <div className='sixth_small_flex'>
                <div><img src="/src/images/feed.png" alt="" className='img_sixth'/></div>
                <div ><p className='p_sixth'>Balance: 0.00</p></div>
              </div> 
            </div>
            <div className='first_line_card1'>
                <div className='contact_address'><h1 className='contact'>CONTACT ADDRESS</h1></div>
                <div><form action="#" className='form_container'><input type="text" value="ASDSFSAFSAFSSFASFASFSFSFAS" className='input_text'/></form></div>
                <div><button className='btn_copy'>COPY</button></div>
            </div>
        </div>
        <div className='footer'>
            <button className='sixth_button'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default SixthSection
