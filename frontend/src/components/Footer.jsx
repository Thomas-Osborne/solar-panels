export default function Footer() {
    return (
        <footer className="text-xs text-center py-5 text-gray-500">
            <p>Created by Tom Osborne 2024</p>
            <div className="container mx-auto flex justify-center gap-4 py-2">
                <a href="/" className="hover:text-gray-400 hover:underline">Home</a>
                <a href="https://www.github.com/Thomas-Osborne" className="hover:text-gray-400 hover:underline" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/tom-osborne-716619288/" className="hover:text-gray-400 hover:underline" target="_blank">LinkedIn</a>
                <a href="https://www.solcast.com" className="hover:text-gray-400 hover:underline" target="_blank">Solar Irradiance Data</a>
            </div>
        </footer>
    )
}