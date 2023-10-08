import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="mt-20"> 

            <footer className="bg-gray-200 dark:bg-gray-900">
                <div className="lg:mx-auto w-full max-w-[1440px] p-4 py-6 lg:py-8 lg:pl-0 pl-10">
                    <div className="md:flex md:justify-between  ">
                        <div className="mb-6 md:mb-0">
                            <p className="text-4xl font-bold text-center">ET- <span className="text-blue-600">EVENTS</span></p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Features</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com" className="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:block ">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <p className="text-center text-sm"> All rights reserved bt ET-EVENTS</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;