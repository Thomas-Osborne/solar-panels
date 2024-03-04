export default function Header(props) {

    const Icons = [
        {name: 'GitHub', link: 'https://github.com/Thomas-Osborne'},
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/tom-osborne-716619288/'},
        {name: 'Email', link: 'mailto: thomas.m.osborne.2@gmail.com'}
    ];

    return (
        <header className="border-2 border-red-500">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <ul className="flex px-10">
                    {Icons.map(icon => 
                        <li className="mx-2"><a href={icon.link} target="_blank">{icon.name}</a></li>
                    )}
                </ul>
                <div className="px-10 py-5">
                    <span>Solar Panels</span>
                </div>
            </nav>
        </header>
    )
}