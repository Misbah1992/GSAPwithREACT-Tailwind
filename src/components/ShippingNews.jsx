
import Carousel from "./Carousel"

function ShippingNews(){
    return(
        <div className="flex flex-col items-center my-24">
            <h3 className="text-blue-500 font-semibold text-xl">Updated news for our viewers about shipping</h3>
            <h1 className="text-gray-800 font-medium text-4xl mb-12">Updated Shipping News</h1>
            <div>
                <Carousel/>
            </div>
        </div>
    )
}

export default ShippingNews