export default function Navbar(){
    return(
        <>
        <header className="borderBlue">
            <nav className="flex justify-between px-2 md:px-10 py-4">
                <h1 className="bebas-neue-regular">LOGO</h1>
                <div>
                    <a className="bebas-neue-regular">Home</a>
                    <a className="mx-3 bebas-neue-regular">About</a>
                    <a className="bebas-neue-regular">Contact</a>
                    <a className="mx-3 bebas-neue-regular">Services</a>
                    <a className="bebas-neue-regular">Blog</a>
                </div>
            </nav>
        </header>
        </>
    )
}