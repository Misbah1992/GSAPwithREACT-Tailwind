

function Navbar() {
  return (
    <div className="flex justify-between py-8 px-32 items-center">
      <img src="" alt="no-image"/>
      <div className="flex space-x-12 font-semibold text-gray-700 pl-64">
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Faq</h5>
        <h5>Contact</h5>
      </div>
      <div className="flex items-center space-x-4">
        <h5 className="text-blue-400">Book an Advertisment</h5>
        <div className="w-1 h-6 bg-gray-200 rounded-xl" ></div>
        <div className="bg-blue-400 text-white px-8 py-2 rounded-xl">Dashboard</div>
      </div>
    </div>
  );
}

export default Navbar;
