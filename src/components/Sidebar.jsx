export default function Sidebar() {
    
    const Links = [
        {name: 'Home', link: '/'},
        {name: 'Settings', link: '/'},
        {name: 'Logout', link: '/'}
    ];

    return (
        <div className="bg-dark-purple h-screen pt-10 w-50">
            <h2>Dashboard</h2>
            <ul className="pl-3">
                {Links.map(link => 
                    <li className="my-2 hover:text-blue-300"><a href={link.link}>{link.name}</a></li>
            )}
            </ul>
        </div>
    )
}