import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'

const Home = () => {
  const [category,setCategory]=useState("All");
  console.log(category)
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home