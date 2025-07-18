const Footer = (params) => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} My Website. All rights reserved.
                </p>
                <nav className="mt-2">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    ); 
};

export default Footer;