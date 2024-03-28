import "../index.css";

export default function Header() {
  return (
    <div className=" w-full px-16 py-10 border-b-2 border-gray-300">
      <div className="title">
        <h1 className="font-sans font-extralight text-5xl mb-5">Restaurant</h1>
      </div>
      <div className="desc w-3/5 ">
        <h4 className="text-gray-600 font-light m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptates deserunt error vel maxime quam illum, consequuntur tenetur
          saepe inventore quisquam
        </h4>
      </div>
    </div>
  );
}
