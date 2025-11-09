import React from 'react'
import Banner from '../../components/Banner/Banner'
import PopularServices from '../../components/PopularServices/PopularServices'
import JoinCard from '../../components/JoinCard/JoinCard'
import LatestJob from '../../components/LatestJob/LatestJob'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularServices></PopularServices>
      
      <JoinCard></JoinCard>
      <LatestJob></LatestJob>
    </div>
  )
}

export default Home
