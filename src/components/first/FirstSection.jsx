import React from 'react'
import './FirstSection.css'

const FirstSection = () => {
  return (
    <div className='container'> 
      <div className='flexing'>
         <div className='logo'>
            <h1>$LORD</h1>
         </div>
         <nav className='nav_bar'>
            <ul className='background_nav'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>HOW TO BUY</li>
                <li>MEMES</li>
            </ul>
         </nav>
      </div>
      <div className='centering'>
        <div>
            <h1 className='h_sectionone'>Empowering <span>Decentralized</span> dreams, one <span>Token</span> at a time</h1>
        </div>
        <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
        <div className='first_line_card'>
            <div className='contact_address'><h1 className='contact1'>CONTACT ADDRESS</h1></div>
            <div><form action="#" className='form_container'><input type="text" value="ASDSFSAFSAFSSFASFASFSFSFAS" className='input_text'/></form></div>
            <div><button className='btn_copy'>COPY</button></div>
        </div>
      </div>
      <img src="/src/images/1stfrontImg.png" alt="Overlay Image" className="bottom-right-image" />
    </div>
  )
}

export default FirstSection
