
import image50 from "../images/image50.png"

function Reviews() {
    return (
        <div className="flex items-center flex-col my-24">
            <h3 className="text-blue-500 font-semibold text-xl">What our customer says about us</h3>
            <h1 className="text-gray-800 font-medium text-4xl mb-12">Reviews</h1>
            <div className="border border-gray-200 w-4/6 flex items-center justify-between p-12 rounded-xl shadow-lg">
                <img alt="" src={image50} />
                <div className="ml-4">
                <i className="text-md text-gray-600">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesepa qui officia des dio dignissimos ducimus qui blanditiis praesepa qui officia desdio dignissimos ducimus qui blanditiis praesepa qui officia deserunt mollitia animi, id est laborum et dolo.</i>
                <h4 className="text-xl text-blue-900 font-semibold mt-4">John Doe</h4>
                <p className="text-md text-gray-800">Relation specialist</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews