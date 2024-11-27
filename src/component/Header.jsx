
export default function Header({variant}) {
  return (
    <header className="flex justify-between items-center px-10 py-6">
      <div className="flex items-center space-x-2">
        <img  src="./logo (1).png" alt="Sudha Hospital Logo" className="w-8 h-8" />
        <div className="text-blue-600 text-xl font-bold">Sudha Hospital</div>
      </div>

      <nav className="bg-transparent backdrop-blur-xl inline-flex items-center gap-8 ps-8 pe-1 rounded-full py-1">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About Us</a>
        <a href="#" className="hover:text-blue-600">Doctors</a>
        <a href="#" className="hover:text-blue-600">Blog</a>
        <button className= {variant==="white"? "text-blue-600 bg-white px-4 py-2 rounded-full":"bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"}>Book an appointment</button>
      </nav>
   
    </header>
  )
}
