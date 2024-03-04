import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header(props) {

    const Links = [
        {name: 'GitHub', link: 'https://github.com/Thomas-Osborne', icon: faGithub},
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/tom-osborne-716619288/', icon: faLinkedin},
        {name: 'Email', link: 'mailto: thomas.m.osborne.2@gmail.com', icon:faEnvelope}
    ];

    return (
        <header className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white py-2 border-b-2 border-gray-300">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <div className="px-2 font-semibold text-3xl">
                    <h1><a href="/">Solar Panels</a></h1>
                </div>

                <ul className="flex px-2">
                    {Links.map(link =>
                        <li className="mx-2 hover:text-blue-300"><a href={link.link} target="_blank">
                            <button className="text-black hover:transform hover:rotate-12 transition-transform duration-200"><FontAwesomeIcon icon={link.icon} size="2x" /></button>
                        </a></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}