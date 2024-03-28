export default function FilterNav() {
  return (
    <div className="w-full border-b-2 border-gray-300 py-6 px-16 flex justify-between">
      <div className=" w-fit flex gap-8 align-middle">
        <div className="text-gray-500 w-fit">Filter By:</div>
        <div className="flex align-middle justify-center items-center gap-2 border-b-2 pb-1">
          <input type="radio" name="" id="" />
          <label className="text-blue-900" htmlFor="open">
            Open Now
          </label>
        </div>
        <div className="flex align-middle justify-center items-center gap-2 border-b-2 pb-1">
          <select
            name="price"
            id="price"
            className="text-blue-900 border-none focus:border-none"
          >
            <option value="" className="">
              Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
            <option value="" className="">
              Min Price
            </option>
            <option value="" className="">
              Max Price
            </option>
          </select>
        </div>
        <div className="flex align-middle justify-center items-center gap-2 border-b-2 pb-1">
          <select
            name="price"
            id="price"
            className="text-blue-900 border-none focus:border-none"
          >
            <option value="" className="">
              Categories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
            <option value="" className="">
              Min Price
            </option>
            <option value="" className="">
              Max Price
            </option>
          </select>
        </div>
      </div>
      <div>
        <button className="border-2 py-1 px-8 text-gray-400">Clear All</button>
      </div>
    </div>
  );
}