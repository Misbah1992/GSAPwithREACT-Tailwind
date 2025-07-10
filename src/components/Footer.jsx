import logo from "../images/logo.png"
import Link from "../images/Link.png"
import Link2 from "../images/Link2.png"
import Link3 from "../images/Link3.png"
import Link4 from "../images/Link4.png"
import Link5 from "../images/Link5.png"
import Link6 from "../images/Link6.png"
import Link7 from "../images/Link7.png"
import Link8 from "../images/Link8.png"
import langicon from "../images/lang-icon.png"

function Footer() {
    return (
        <div className="w-full border top border-1 border-gray-200">
            <div className="flex px-64 justify-between pt-12">
                <div className="flex items-center space-x-4">
                    <img alt="" src={logo} style={{ width: "8rem" }} />
                    <p className="text-xs text-gray-700 text-light">2025 © WorldLog.<br />
                        All rights reserved.</p>
                </div>
                <div className="flex space-x-2">
                    <img alt="" src={Link8} className="h-10 w-10" />
                    <img alt="" src={Link7} className="h-10 w-10" />
                    <img alt="" src={Link6} className="h-10 w-10" />
                    <img alt="" src={Link5} className="h-10 w-10" />
                    <img alt="" src={Link4} className="h-10 w-10" />
                    <img alt="" src={Link3} className="h-10 w-10" />
                    <img alt="" src={Link2} className="h-10 pl-6" />
                    <img alt="" src={Link} className="h-10 " />
                </div>
            </div>
            <div className="flex w-full px-64 justify-between py-12">
                <div className="space-y-2">
                    <h1>Heading</h1>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className="space-y-2">
                    <h1>Heading</h1>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className="space-y-2">
                    <h1>Heading</h1>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className="space-y-2">
                    <h1>Heading</h1>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className="space-y-2">
                    <h1>Heading</h1>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
            </div>
            <div className="w-full px-64">
                <div className="flex space-x-3 items-center">
                    <img alt="" src={langicon} style={{ height: "0.90rem" }} />
                    <p className="text-xs text-gray-900">English</p>
                </div>
            </div>
            <p className="px-64 text-xs text-gray-600 pt-4 pb-12">Founded in August of 2005, Worldlog is a trusted community marketplace for people to send goods around the world. Worldlog.com helps to arrange the international cargo delivery from 1m³ or
                50 kg till shiploads. Thanks to world-class customer service and a growing community of cargo agents, Worldlog.com is the easiest way for people to ship their goods overseas, or to offer free
                space in the container, truck or vessel to millions of consignors.</p>
        </div>
    )
}

export default Footer