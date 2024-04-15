import React from 'react'
import './Descriptionbox.css'
const Descriptionbox=()=> {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet
                it serves as a virtual marketplace where business and individual can
                showcase their products, interact with customers, and conducts
                transaction without the need for a physical presence. E-commerce websites
                have gained immense popularity due to their convencing
                accessibility, and the global reach they offer.
            </p>
            <p>
                E-commerce website typically display product or services a 
                detailed desriptions, images, prices and any available arrange
                (e.g,sizes, colors). Each product usually has its own dedicated page 
                with relevant information.
            </p>

        </div>
    </div>
  )
}

export default Descriptionbox