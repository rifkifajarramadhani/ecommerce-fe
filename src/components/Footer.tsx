import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#101010] lg:bg-black text-white pt-7 md:pt-14 bottom-0">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-5 md:px-14 lg:px-7">
        <div>
          <a href="/" className="block mb-8 lg:mb-4">
            <img
              src="https://utfs.io/f/ccd08d95-ad3a-4c44-9035-29c7a59c5c1f-1zbfv.png"
              alt="Fresh Supermarkets"
              className="mx-auto lg:mx-0 h-16"
            />
          </a>
          <a href="/" className="block">
            <img
              src="https://utfs.io/f/KIQHcaf9YatfNOfkCFX3CVFMWAyxgtinwfJpa4s1oQO6SRE3"
              alt="SmartBuy"
              className="mx-auto lg:mx-0 h-14"
            />
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="list-none space-y-2 lg:columns-1 columns-2 gap-4">
            <li>
              <a href="/faq" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-400">
                Store Finder
              </a>
            </li>
            <li>
              <a href="/track-order" className="hover:text-gray-400">
                Track Your Order
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="list-none space-y-2 lg:columns-1 columns-2 gap-4">
            <li>
              <a href="/about-us" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://namrecruitment.com/wp/"
                className="hover:text-gray-400"
              >
                Job Board
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Poicies and Terms</h3>
          <ul className="list-none space-y-2 lg:columns-1 columns-2 gap-4">
            <li>
              <a href="/terms" className="hover:text-gray-400">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white mt-6 py-4 text-black">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 max-w-[275px] lg:max-w-auto">
            &copy; 2024 Woermann Fresh All rights reserved.{" "}
            <a href="/terms" className="hover:text-gray-400">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="/return-policy" className="hover:text-gray-400">
              Return policy
            </a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 mb-8 lg:mb-0">
            <a
              href="https://www.instagram.com/wfreshnamibia/"
              target="_blank"
              className="hover:text-gray-400 text-4xl lg:text-base"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://web.facebook.com/wbsupers?_rdc=1&_rdr"
              target="_blank"
              className="hover:text-gray-400 text-4xl lg:text-base"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
