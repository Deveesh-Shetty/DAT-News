import { Search } from "react-feather"
export default function index() {
  return (
      <div>
          <div className='w-full'>
			<form className='flex justify-between items-center w-full py-2 px-10 rounded-md bg-[#f4f4f4]'>
				<input
					placeholder="Search for any word..."
	                type="text"
					className='text-xl w-full bg-transparent border-none outline-none leading-8 font-bold'
				/>
				  <button type='button'
				  	
				  >
					  <Search />
				</button>
			</form>
		</div>
    </div>
  )
}
 