
import { Input } from 'antd';
import { EnvironmentOutlined,SearchOutlined ,CalendarOutlined} from '@ant-design/icons';


function HeroSection() {
    return (
        <div className="flex flex-col items-center my-32">
            <h1 className="text-4xl text-gray-800 font-medium ">Up To Date <span className="text-blue-600 font-bold"><i >Container Schedule</i></span></h1>
            <p className="px-96 text-center text-normal font-light mt-6">WorldLog offers a wide range of products, including container tracking and air cargo tracking, that empower shippers and logistics service providers to enhance their supply chain visibility.</p>
            <div className=' mt-16 border rounded-2xl border-gray-30 flex px-12 py-6 pt-10 justify-center items-center space-x-4'>
                <div className=''>
                    <div className='border border-gray-300 rounded-lg p-3 relative'>
                        <p className='bg-white inline-block font-medium absolute px-2 top-0 -m-2  z-10 text-sm text-gray-500'>Origin</p>
                        <div className='flex'>
                            <EnvironmentOutlined style={{color:"#667085"}}/>
                            <Input placeholder="Enter Location" style={{ border: "none" }} />
                        </div>
                    </div>
                </div>
                 <div className=''>
                    <div className='border border-gray-300 rounded-lg p-3 relative'>
                        <p className='bg-white inline-block font-medium absolute px-2 top-0 -m-2  z-10 text-sm text-gray-500'>Destination</p>
                        <div className='flex'>
                            <EnvironmentOutlined style={{color:"#667085"}}/>
                            <Input placeholder="Enter Location" style={{ border: "none" }} />
                        </div>
                    </div>
                </div>
                 <div className=''>
                    <div className='border border-gray-300 rounded-lg p-3 relative'>
                        <p className='bg-white inline-block font-medium absolute px-2 top-0 -m-2  z-10 text-sm text-gray-500'>From Date</p>
                        <div className='flex'>
                            <CalendarOutlined style={{color:"#667085"}}/>
                            <Input placeholder="Choose Date" style={{ border: "none" }} />
                        </div>
                    </div>
                </div>
                 <div className=''>
                    <div className='border border-gray-300 rounded-lg p-3 relative'>
                        <p className='bg-white inline-block font-medium absolute px-2 top-0 -m-2  z-10 text-sm text-gray-500'>To Date</p>
                        <div className='flex'>
                            <CalendarOutlined style={{color:"#667085"}}/>
                            <Input placeholder="Choose Date" style={{ border: "none" }} />
                        </div>
                    </div>
                </div>
                <div className='bg-blue-600 rounded-lg py-3 px-4'>
                    <SearchOutlined  style={{color:"white",fontSize:"2rem"}}/>
                </div>
               
               


            </div>
        </div>
    )
}

export default HeroSection