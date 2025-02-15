import React, { useState } from 'react';
import "./style.css" 
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './navbar';

const uniqueList = [...new Set(Menu.map((curElem) => {
                return curElem.category;
            }
        )
    ),
    "All"
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category === "All")
    {
      setMenuData(Menu);
      return;
    }

    const updatesList = Menu.filter((curElem) => {
        return curElem.category === category;
    });
    setMenuData(updatesList);
  };
  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant
