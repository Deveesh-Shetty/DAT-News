import React, { useState, useEffect } from "react"
import SearchBox from "@components/Input/SearchBox"
import { useCustom, useApiUrl } from "@pankod/refine-core"

import axios from "axios"
import Card from "@components/Card/Card"

export default function news() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY

  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => {
        console.log(res.data.articles)
        setNewsData(res.data.articles)
      })
  }, [])
  return (
    <div className="mx-8">
      <div className="flex items-center font-extrabold my-4 text-center gap-4 justify-between w-full">
        <p className="text-4xl ml-4">Headlines</p>
        <div className="w-3/5 mr-4">
          <SearchBox />
        </div>
      </div>
      <div className="flex flex-wrap mb-8">
        {newsData.map((news: any, i: number) => (
          <div className="p-4 basis-full md:basis-1/3 lg:basis-1/4" key={i}>
            <Card
              urlToImage={news.urlToImage}
              title={news.title}
              description={news.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
