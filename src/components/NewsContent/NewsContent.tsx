import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NewsCard } from '../NewsCard/NewsCard'
import { newsContextPropType } from '../Types'
import './NewsContent.css'


export const NewsContent = (props:newsContextPropType) => {
  const [searchTerm, setSearchTerm] = useState('')
    
  return (
    <Container maxWidth='md'>
      <div className='content'>
          <div className='downloadMessage'>
            <span className='downloadText'>
            For the best experience use inshorts app on your smartphone                 
            </span>
            <img
            alt='app store'
            height='80%'
            src='https://assets.inshorts.com/website_assets/images/appstore.png'
            />
            <img
            alt='play store'
            height='80%'
            src='https://assets.inshorts.com/website_assets/images/playstore.png'/>

          </div>
          
          {
            props.newsArray.map((newsItem)=>(
              <NewsCard newsItem={newsItem} key={newsItem.title}/>
            ))}

            {props.loadmore<=(props.newsResults!==undefined?props.newsResults:0) && (
              <>
                <hr/>
                <button onClick={() => props.setLoadmore(props.loadmore+20)} className='loadmore' >Load More</button>
              </>
            )
            }
            
      </div>
    </Container>
  )
}
