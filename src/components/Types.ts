import React from "react"

export type DataType = {
    articles:NewsType[],
    status: string,
    totalResults: number
}
export type NewsType = {
    source:{id:string,name:string},
    author:string,
    title:string,
    description:string,
    url: URL["href"],
    urlToImage: URL["href"],
    publishedAt: string,
    content: string
    
}
export type newsContextPropType = {
    setNewsArray:(articles:NewsType[]) => void
    newsArray:NewsType[],
    newsResults?: number,
    loadmore:number,
    setLoadmore:(loadmore:number) => void
    
  }

export type newsCardPropType = {
    newsItem:NewsType
}