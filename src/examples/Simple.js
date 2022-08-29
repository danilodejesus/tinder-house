import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: '2 rm. · Apartment · 75 m² 13.500 kr.',
    address: 'Ben Websters Vej, 2450 København, København SV - 2nd floor',
    url: 'https://boligportal-dk.imgix.net/e488520ce8146ae7d9ed7beee048a7cd?auto=compress,enhance,format&h=590'
  },
  {
    name: '5 room townhouse of 145 m² 18.500 kr.',
    address: 'Christiansholms Vænge, 2930 København, Klampenborg - Ground floor',
    url: 'https://boligportal-dk.imgix.net/a62c65db6fab15b3a533e56500b77c4f?auto=compress,enhance,format&h=590'
  },
  {
    name: '3 room apartment of 131 m² 26.500 kr.',
    address: 'Ben Websters Vej, 2450 København, København SV - 2nd floor',
    url: 'https://boligportal-dk.imgix.net/81a8daef797c8f166aa78d009cd2b3ea?auto=compress,enhance,format&h=590'
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
