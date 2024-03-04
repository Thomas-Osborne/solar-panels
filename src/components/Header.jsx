export default function Header(props) {

    const Icons = [
        {name: 'GitHub', link: 'https://github.com/Thomas-Osborne'},
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/tom-osborne-716619288/'},
        {name: 'Email', link: 'mailto: thomas.m.osborne.2@gmail.com'}
    ];

    return (
        <header className="border-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <div className="px-2 py-5 font-semibold text-3xl">
                    <span>Solar Panels</span>
                </div>

                <ul className="flex px-2">
                    {Icons.map(icon => 
                        <li className="mx-2 hover:text-blue-300"><a href={icon.link} target="_blank">{icon.name}</a></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}