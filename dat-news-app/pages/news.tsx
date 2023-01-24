import React,{useState,useEffect} from 'react'
import { axiosInstance } from '@pankod/refine-simple-rest'

import axios from "axios";
import Card from '@components/Card';

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
          <div className='grid grid-cols-4'>
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
