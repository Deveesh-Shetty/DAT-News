import React,{useState,useEffect} from 'react'
import {
    useCustom,
    useApiUrl
} from "@pankod/refine-core";



import axios from "axios";
import Card from '@components/Card/Card';



export default function news() {
    const apiKey = 'edb4da861e9d4cad9563a6c5fe3ff158'
    
    const [newsData,setNewsData]=useState([])

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(res => {
        console.log(res.data.articles)
        setNewsData(res.data.articles)
      }
    )
    
  },[])
  return (
    <div>
      <h1 className='text-5xl ml-6 font-extrabold'>Headlines</h1>
          <div className='grid md:grid-cols-4 grid-cols-1'>
        {
          newsData.map((news: any,i:number) => (
            <div className='p-4' key={i}>
              <Card
                urlToImage={news.urlToImage}
                title={news.title}
                description={news.description}
              />
            </div>
          ))

        }
        
      </div> 
      

    </div>
  )
}
