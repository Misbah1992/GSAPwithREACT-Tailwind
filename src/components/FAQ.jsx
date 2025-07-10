import Accordion from "./Accordian"
import image109 from "../images/image109.png"
import image110 from "../images/image110.png"




function FAQ() {
    return (
        <div className="flex flex-col items-center my-24">
            <h1 className="text-blue-600 font-semibold text-xl">Explore our FAQ list about container tracking
            </h1>
            <h1 className="text-gray-800 font-medium text-4xl">Frequently asked questions
            </h1>
            <div className="flex justify-between w-3/5 my-16 space-x-4 bg-gray-100  border border-2 border-gray-200 p-2 rounded-xl">
            <div style={{width:"50%"}} className="rounded-lg"><Accordion /></div>
              
                <div  style={{width:"50%"}}>
                    <div className="flex items-center bg-white border border-1 border-gray-200 rounded-xl p-4 space-x-2">
                        <img src={image109} alt="" style={{width:'10rem',height:"10rem"}}/>
                        <div className=" flex flex-col items-center">
                            <h1 className="text-gray-700 text-xl font-semibold">Customer Support</h1>
                            <p className="text-gray-600 text-center text-xs font-light my-2">"At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesepa qui officia des dio dignissimos ducimus qui
                                blanditiis praesepa qui officia desdio dignissimos ducimus qui
                                blanditiis praesepa qui officia deserunt mollitia animi, id est laborum et dolo.</p>
                                <button className="bg-blue-500 text-white  text-sm w-32 h-9 rounded-lg my-2">Contact Us</button>
                        </div>
                    </div>
                     <div className="flex items-center bg-white border border-1 border-gray-200 rounded-xl p-4 space-x-2 mt-4">
                        <img src={image110} alt="" style={{width:'10rem',height:"7rem"}}/>
                        <div className=" flex flex-col items-center">
                            <h1 className="text-gray-700 text-xl font-semibold">Need Help?</h1>
                            <p className="text-gray-600 text-center text-xs font-light my-2">"At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesepa qui officia des dio dignissimos ducimus qui
                                blanditiis praesepa qui officia desdio dignissimos ducimus qui
                                blanditiis praesepa qui officia deserunt mollitia animi, id est laborum et dolo.</p>
                                <button className="bg-blue-500 text-white  text-sm w-32 h-9 rounded-lg my-2">Help</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ