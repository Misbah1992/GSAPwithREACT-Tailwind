import image6 from "../images/image6.png"
import image141 from "../images/image141.png"


function About2() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center my-16">
                 <div className="w-1/3 mx-2">
                <img src={image141} alt=""/>
                </div>
                <div className="w-1/3 flex flex-col justify-between mx-2" >
                    <img src={image6} alt=""/>
                    <div className="bg-gray-100 h-full mt-4 border rounded-3xl rounded-bg flex flex-col justify-center space-y-4 px-4">
                        <h1 className="text-blue-900 text-lg font-bold">HEADING</h1>
                        <p className="text-gray-600 text-sm font-medium">Rest assured that your cargo is in safe hands when you book
                            with WorldLog by Avantgarde.</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default About2