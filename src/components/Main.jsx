import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import HomeItems from '../components/HomeItems'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import { ChatBot } from './ChatBot'
import SeasonalDiscountNews from './SeasonalDiscountNews'
import FacebookNewsFeed from '../components/FacebookNewsFeed';
import PromotionPhoto from './PromotionPhoto'

const Main = () => {
    
  return (
    <div>
        {/* <Announcement/> */}
        <Slider/>
        <ChatBot />
        <Categories/>
        <PromotionPhoto/>
        <HomeItems title="New Arrival" url="newitem_api"/>
        {/* <HomeItems title="Promotion Items" url="promotionitem_api"/> */}
        <HomeItems title="Hot Sale Items" url="hotsaleitem_api"/>
        {/* <SeasonalDiscountNews/> */}
        
        <FacebookNewsFeed/>
        
    </div>
  )
}

export default Main