import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(props) {    
    const Links = [
        {key: 'Home', link: '/', icon: faHouse},
        {key: 'Settings', link: '/', icon: faGear},
    ];

    const Modals = [
        {key: 'Logout', modalClick: props.openModal, icon: faRightFromBracket},
    ]

    return (
        <div className="h-screen py-3 w-50 border-r-2 border-gray-300">
            <h2 className="font-bold text-blue-900 text-2xl px-10">Dashboard</h2>

            {/* Links for routing */}
            <ul>
                {Links.map(link => 
                    <li className="px-10 py-1 hover:bg-gray-200" key={link.key}><a href={link.link}>
                        <button>
                            <i className="pr-1 w-6"><FontAwesomeIcon icon={link.icon} fixedWidth /></i><span className="pl-1">{link.key}</span>
                        </button>
                    </a></li>
                )}
            </ul>

            {/* Links to open up modals*/}
            <ul>
                {Modals.map(modal => 
                    <li className="px-10 py-1 hover:bg-gray-200" key={modal.key}>
                        <button onClick={modal.modalClick}>
                            <i className="pr-1 w-6"><FontAwesomeIcon icon={faRightFromBracket} fixedWidth /></i><span className="pl-1">Logout</span>
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}