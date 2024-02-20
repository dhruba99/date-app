import React from 'react'
import Items from '../Items/Items'
import './Home.scss'
const data = [

  {
    id: 1,
    img: "https://www.onlinehotfrnd.com/img/34.jpg",
    name: "Titli",
    phoneNumber: "7679221934"
  },
  {
    id: 2,
    img: "https://www.onlinehotfrnd.com/img/43.jpg",
    name: "Titli",
    phoneNumber: "6294281094"
  },
  {
    id: 3,
    img: "https://www.onlinehotfrnd.com/img/32.jpg",
    name: "Titli",
    phoneNumber: "6294281094"
  },
  {
    id: 4,
    img: "https://www.onlinehotfrnd.com/img/34.jpg",
    name: "Titli",
    phoneNumber: "6294281094"
  }
]
  const getWhatsAppLink = (phoneNumber) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to join♥♥")}`; // WhatsApp URL with phone number
};

const Home = () => {
  return (
    <section>
    <div className="image-grid-container">
    <div className="image-grid">
      {data.map(({ id, img, name,phoneNumber }, index) => (
        <div className='outer'>
        <a href={getWhatsAppLink(phoneNumber)} key={index} className="image-item">
          <img src={img} />
        </a>
        <a href={getWhatsAppLink(phoneNumber)} className="image-name">{name}</a>
        </div>
      ))}
    </div>
    </div>
    </section>

  )
}

export default Home