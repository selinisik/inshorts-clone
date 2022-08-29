import React from 'react'
import { newsCardPropType } from '../Types'
import './NewsCard.css'

export const NewsCard = (props:newsCardPropType) => {
    const fulldate= new Date(props.newsItem.publishedAt)
    var date = fulldate.toString().split(' ')
    const hour = parseInt(date[4].substring(0,2))
    const time=hour>12?true:false
    const minute = parseInt(date[4].substring(3,5))
  
    return (
    <div className='newsCard'>
        <img 
        className='newsImage'
        alt={props.newsItem.title} 
        src={props.newsItem.urlToImage? props.newsItem.urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png'}/>
    <div className='newsText'>
       <div>
            <span className='title'>
                {props.newsItem.title}
            </span>
            <br />{' '}
            <span className='author'>
                <a href={props.newsItem.url} target='__blank'>
                    <b>short </b>
                </a>
                <span className='muted'>
                 by {props.newsItem.author?props.newsItem.author: 'unknown'} /
                    {
                        time? `+${hour-12}:${minute} pm`:`${hour}:${minute} am`
                    } on {date[2]} {date[1]} {date[3]},{date[0]}

                </span>
            </span>
        </div> 
        <div className='lowerNewsText'>
            <div className='description'>
                {props.newsItem.description}
                <div className='readmore'>
                    read more at{' '}
                    <a href={props.newsItem.url} target='__blank'>
                        <b>{props.newsItem.source.name}</b>
                    </a>
                </div>

            </div>

        </div>

    </div>
    
    </div>

  )
}
