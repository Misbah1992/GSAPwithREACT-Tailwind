import ad2 from "../images/ad2.png"
import image2 from "../images/iamge2.png"

function About() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-blue-600 font-semibold text-xl">About Us</h1>
            <h1 className="text-gray-800 font-medium text-4xl">Learn About Us And Who We Are</h1>
            <div className="flex justify-center my-16">
                <div className="w-1/3 flex flex-col justify-between mx-2" >
                    <img src={image2} alt=""/>
                    <div className="bg-gray-100 h-full mt-4 border rounded-3xl rounded-bg flex flex-col justify-center space-y-4 px-4">
                        <h1 className="text-blue-900 text-lg font-bold">HEADING</h1>
                        <p className="text-gray-600 text-sm font-medium">Rest assured that your cargo is in safe hands when you book
                            with WorldLog by Avantgarde.</p>
                    </div>
                </div>
                <div className="w-1/3 mx-2">
                <img src={ad2} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About