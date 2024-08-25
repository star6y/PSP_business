import React from 'react'
import "../static/style/main-content.css"
import window_cleaning from  '../static/img/window-cleaning.jpg'

const Home = () => {
  

  
  return (
    <div className='homePage'>
      <div className='homePageImg'>
        <img src={window_cleaning} alt="Window getting cleaned"></img>
      </div>

      <div className='homeMainContent'>
        <h2>Welcome to Pane Staking Perfection.</h2>
        <p>
          This business operates around Fargo, MN.
        </p>
       
      </div>
    </div>
  )
}

export default Home