import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const funcAddUserName = (userName) => `@${userName}`

  return (
    //Esto era el React.Fragment
    <section className='App'> 
      <TwitterFollowCard 
        placeUserName={funcAddUserName} //paso la fc para que la ejecute en Tw
        userName={"Scalextric"} 
        name={"Scalextric"} 
        isFollowing={false} />
      <TwitterFollowCard 
        placeUserName={funcAddUserName} 
        userName={"pachiFueraDeCarril"} 
        name={"Pachi Fuera de Carril"} />
    </section>
  )
}

