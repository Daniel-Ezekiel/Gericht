import Hero from "./Hero";

const Header = () => {
  return (
    <header className="flex flex-col gap-[3rem]">
      <nav className="flex justify-between items-center">
        <a href="/" className="text-[3rem] uppercase font-bold font-serif">
          Gerícht
        </a>

        <div className="hidden">
          <ul className="navbar--links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Landing</a>
            </li>
          </ul>

          <div className="navbar--action-links">
            <a href="/">Log In / Registration</a>

            <a href="/">Book Table</a>
          </div>
        </div>

        <button className="h-[2.2rem] w-[3rem] relative">
          <div className="border-rounded-[4px] bg-primary h-[0.3rem] w-full before:content-[''] before:absolute before:top-0 before:left-0 before:h-[0.3rem] before:w-full before:bg-primary before:mt-[-1px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:bg-primary after:mt-[1px]"></div>
        </button>
      </nav>

      <Hero />
    </header>
  );
};

export default Header;
