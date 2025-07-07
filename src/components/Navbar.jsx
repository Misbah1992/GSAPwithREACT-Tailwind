import logo from "../images/logo.png"

function Navbar() {
  return (
    <div style={{fontFamily:"Montserrat"}} className="flex justify-between py-5 px-32 items-center">
      <img className="w-32" src={logo} alt="no-image"/>
      <div className="flex space-x-12 font-medium text-gray-600 pl-72 text-md">
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Faq</h5>
        <h5>Contact</h5>
      </div>
      <div className="flex items-center space-x-4 font-light">
        <h5 className="text-blue-500 text-sm">Book an Advertisment</h5>
        <div className="w-1 h-6 bg-gray-200 rounded-xl" ></div>
        <div className="bg-blue-400 text-white text-sm px-8 py-3 rounded-xl">Dashboard</div>
      </div>
    </div>
  );
}

export default Navbar;
