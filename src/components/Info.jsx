
import vector1 from "../images/Vector1.png"
import vector2 from "../images/Vector2.png"
import vector3 from "../images/vector3.png"


function Info() {
    return (
        <div className="flex flex-col items-center my-24">
            <h3 className="text-blue-500 font-semibold text-xl">What our user and attain surf on our website</h3>
            <h1 className="text-gray-800 font-medium text-4xl mb-12">What Do We Provide</h1>
            <div className="flex w-4/6 border border-gray-200 p-12 rounded-xl shadow-md">
                <div className="w-1/3 border-r h-56 flex flex-col justify-between mr-4">
                    <div className="bg-white border border-gray-200  w-16 h-16 shadow-sm rounded-full flex justify-center items-center">
                        <img alt="" src={vector1} />
                    </div>
                    <h1 className="text-gray-800 text-xl font-semibold">Vessel Schedule</h1>
                    <p className="text-gray-600 text-sm font-light">A pay as-you-go solution for: pallet storage, inventory management, fulfillment(e.g. pick and pack),
                        in/out-bound solutions, and more.</p>
                </div>
                <div className="w-1/3 border-r h-56 flex flex-col justify-between mr-4">
                    <div className="bg-white border border-gray-200  w-16 h-16 shadow-sm rounded-full flex justify-center items-center">
                        <img alt="" src={vector2} />
                    </div>
                    <h1 className="text-gray-800 text-xl font-semibold">Logistics Time Table</h1>
                    <p className="text-gray-600 text-sm font-light">Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight.</p>
                </div>
                <div className="w-1/3  h-56 flex flex-col justify-between ">
                    <div className="bg-white border border-gray-200  w-16 h-16 shadow-sm rounded-full flex justify-center items-center">
                        <img alt="" src={vector3} />
                    </div>
                    <h1 className="text-gray-800 text-xl font-semibold">Terminal Information</h1>
                    <p className="text-gray-600 text-sm font-light">Our packaging solutions are optimized for each individual customer and are selected based on on the customer’s specific needs.</p>
                </div>
            </div>
        </div>
    )
}

export default Info;