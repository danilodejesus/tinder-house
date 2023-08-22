import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: '2 rm. · Apartment · 75 m² 13.500 kr.',
    address: 'Ben Websters Vej, 2450 København, København SV - 2nd floor',
    url: 'https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg'
  },
  {
    name: '5 room townhouse of 145 m² 18.500 kr.',
    address: 'Christiansholms Vænge, 2930 København, Klampenborg - Ground floor',
    url: 'https://resihome.com/hs-fs/hubfs/%5Bimage%5D%20resihome%20renter%20couple-1.jpg?width=1200&height=800&name=%5Bimage%5D%20resihome%20renter%20couple-1.jpg'
  },
  {
    name: '3 room apartment of 131 m² 26.500 kr.',
    address: 'Ben Websters Vej, 2450 København, København SV - 2nd floor',
    url: 'https://www.zillowstatic.com/bedrock/app/uploads/sites/42/renting-a-house-with-a-pool-fa1550.jpg'
  },
]

function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
              <p>{character.address}</p>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple
