import React from 'react'
import {menu_list} from "../../assets/frontend_assets/assets";
import "./ExploreMenu.css"

const ExploreMenu = ({category,setCategory}) => {
  return (
<div className='explore-menu' id='explore-menu'>
  <h1>explore our menu</h1>
  <p className='explore-menu-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet nesciunt voluptatem voluptatibus nostrum dolorem rerum illo expedita provident, repellat omnis odio, sit pariatur? Rerum quis alias voluptatibus voluptas officia!</p>
  <div className="explore-menu-list">
    {menu_list.map((item,index)=>{
      return (
        <div key={index} 
        onClick={()=>setCategory(pre=>pre===item.menu_name?"All":item.menu_name)}
        
        className="explore-menu-list-item">
          <img 
          className={category===item.menu_name?"active":""}
          src={item.menu_image} alt="" />
          <p>{item.menu_name}</p>
        </div>
      )
    })}
  </div>
  <hr/>
</div>
  )
}

export default ExploreMenu