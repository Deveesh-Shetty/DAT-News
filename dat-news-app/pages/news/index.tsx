import React, {
  useState,
  useEffect,
  useContext
} from "react"
import SearchBox from "@components/Input/SearchBox"
import { useCustom, useApiUrl } from "@pankod/refine-core"
import { NewsContext } from "@components/Input/SearchBox"
import axios from "axios"
import Card from "@components/Card/Card"

export default function news() {
   const { data } = useContext(NewsContext);
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY
  
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => {
        console.log(res.data.articles)
        console.log(res.data.articles[0].urlToImage)
        setNewsData(res.data.articles)
      })
  }, [])
  return (
    <div className="mx-8">
      <ul>
        {data.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read more</a>
          </li>
        ))}
      </ul>
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
  );
}