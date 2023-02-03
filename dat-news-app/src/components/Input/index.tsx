import { Search } from "react-feather";
import { useState, useEffect } from "react";
export default function index() {
  const [searchClicked, setSearchClicked] = useState(false);
  useEffect(() => {
    if (searchClicked) {
      // add backdrop filter
      document.body.classList.add("backdrop-filter");
      document.body.classList.add("backdrop-blur-sm");
    } else {
      // remove backdrop filter
      document.body.classList.remove("backdrop-filter");
      document.body.classList.remove("backdrop-blur-sm");
    }
  }, [searchClicked]);

  return (
    <div>
      <div className="w-full">
        <form className="flex justify-between items-center w-full py-2 px-10 rounded-md bg-[#f4f4f4]">
          <input
            placeholder="Search for any word..."
            type="text"
            className="text-xl w-full bg-transparent border-none outline-none leading-8 font-bold"
            onFocus={() => setSearchClicked(true)}
          />
          <button type="button" title="Search">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
}
