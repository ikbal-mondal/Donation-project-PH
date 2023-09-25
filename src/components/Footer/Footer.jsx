import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="p-10 bg-base-100 border-2 mt-24 text-base-content">
            <div className="footer grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 justify-center items-center max-w-6xl mx-auto">
                <aside>
                <Link to='/' className=""><img className='w-24 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJY2I8addnPIN33kKQmqiC1mwK3CpYsITWSZ-f5qT3w7OS-jdAnvSnjjM_G_FCdqynEWc&usqp=CAU" alt="" />   <span className='text-xl font-medium text-purple-900'>Donation</span></Link>
             
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;