export default function Sidebar() {
    
    const Links = [
        {name: 'Home', link: '/'},
        {name: 'Settings', link: '/'},
        {name: 'Logout', link: '/'}
    ];

    return (
        <div className="bg-gradient-to-br from-orange-500 to-yellow-400 h-screen px-5 py-3 w-50">
            <h2 className="font-bold text-blue-900 text-2xl">Dashboard</h2>
            <ul className="pl-3">
                {Links.map(link => 
                    <li className="my-2 hover:text-blue-300"><a href={link.link}>{link.name}</a></li>
            )}
            </ul>
        </div>
    )
}