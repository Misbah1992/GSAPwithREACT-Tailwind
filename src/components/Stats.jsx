
import image121 from "../images/image121.png"
import image123 from "../images/image123.png"
import image125 from "../images/image125.png"



function Stats(){
    return(
        <div className="flex justify-center my-48">
            <div className="flex justify-evenly items-center w-4/5">
            <div className="flex flex-col  items-center space-y-4">
                <img alt="" src={image121}/>
                <p className="text-blue-500 text-lg font-semibold">No Of Users</p>
                <h1 className="text-gray-700 text-4xl font-semibold">36,000</h1>
            </div>
            <div className="h-24 w-1 bg-gray-200 rounded"></div>
            <div className="flex flex-col  items-center space-y-4">
                <img alt="" src={image123}/>
                <p className="text-blue-500 text-lg font-semibold">Satisfied Clients</p>
                <h1 className="text-gray-700 text-4xl font-semibold">93%</h1>
            </div>
             <div className="h-24 w-1 bg-gray-200 rounded"></div>
            <div className="flex flex-col  items-center space-y-4">
                <img alt="" src={image125}/>
                <p className="text-blue-500 text-lg font-semibold">Rapid Performance</p>
                <h1 className="text-gray-700 text-4xl font-semibold">23% Growth</h1>
            </div>
            </div>
        </div>
    )
}

export default Stats