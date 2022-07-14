import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/Header'


const Home: NextPage = () => {

  const [user, setUser] = useState();
  return (
    <main>
      <Header />
    </main>
  )
}

export default Home
