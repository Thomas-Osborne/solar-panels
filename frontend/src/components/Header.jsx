import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header(props) {

    const Links = [
        {link: 'https://www.github.com/Thomas-Osborne', icon: faGithub, key: 'GitHub'},
        {link: 'https://www.linkedin.com/in/tom-osborne-716619288/', icon: faLinkedin, key: 'LinkedIn'},
        {link: 'mailto: thomas.m.osborne.2@gmail.com', icon:faEnvelope, key: 'Email'}
    ];

    return (
        <header className="bg-gradient-to-br from-yellow-400 to-orange-500 py-2 border-b-2 border-gray-300">
            <nav className="flex items-center justify-between p-4">
                <div className="flex px-2 font-semibold text-3xl items-center">
                    <img src="../src/assets/sun.png" alt="Sun Logo" width="50"/>
                    <h1 className="text-white pl-2"><a href="/">Solar Panels</a></h1>
                </div>

                <div className="relative flex items-right">
                    <ul className="flex px-2">
                        {Links.map(link =>
                            <li className="mx-2 hover:text-blue-300" key={link.key}><a href={link.link} target="_blank">
                                <button className="text-black hover:transform hover:rotate-12 transition-transform duration-200"><FontAwesomeIcon icon={link.icon} size="2x" /></button>
                            </a></li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}