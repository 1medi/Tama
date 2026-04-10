export default function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
          <span className="text-sm text-neutral-700 sm:text-center dark:text-gray-400">
            © 2017{" "}
            <a href="/" className="text-neutral-800 hover:text-[#C96F2C]">
              Tama Supermarket LTD
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-neutral-700 sm:mt-0">
            <li>
              <a href="#About" className="text-neutral-800 hover:text-[#C96F2C] me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/pages/privacy" className="text-neutral-800 hover:text-[#C96F2C] me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/pages/terms" className="text-neutral-800 hover:text-[#C96F2C] me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-800 hover:text-[#C96F2C]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
