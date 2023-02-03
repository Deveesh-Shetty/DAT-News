import { Search } from "react-feather";
import {
  useState, useEffect,createContext
} from "react";
import axios from "axios";
import {
  useCustom,
  useApiUrl,
} from "@pankod/refine-core";

interface Article {
  title: string;
  description: string;
  url: string;
}
interface NewsContextValue {
  data: Article[];
}

export const NewsContext = createContext<NewsContextValue>({
  data: []
});

export default function index() {
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("searching...");
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.articles);
        setSearchData(res.data.articles[0]);
      });

  };

  

  return (
    <div>
      <NewsContext.Provider value={{data:searchData}}>
      <div className="w-full">
        <form
          method="POST"
          onSubmit={handleSearch}
          className="flex justify-between items-center w-full py-2 px-10 rounded-md bg-[#f4f4f4]">
          <input
            placeholder="Search for any word..."
            type="text"
            className="text-xl w-full bg-transparent border-none outline-none leading-8 font-bold"
            onFocus={() => setSearchClicked(true)}
            onBlur={() => setSearchClicked(false)}
          />
          <button type="button" title="Search">
            <Search />
          </button>
        </form>
        </div>
        </NewsContext.Provider>
    </div>
  );
}
