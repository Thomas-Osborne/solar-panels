export default function Sidebar() {
    
    const Links = [
        {name: 'Home', link: '/'},
        {name: 'Settings', link: '/'},
        {name: 'Logout', link: '/'}
    ];

    return (
        <div className="h-screen py-3 w-50 border-r-2 border-gray-300">
            <h2 className="font-bold text-blue-900 text-2xl">Dashboard</h2>
            <ul>
                {Links.map(link => 
                    <li className="my-2 hover:text-blue-300 hover:bg-gray-200"><a href={link.link}>{link.name}</a></li>
            )}
            </ul>
        </div>
    )
}