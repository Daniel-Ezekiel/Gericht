import Hero from "./Hero";

const Header = () => {
  return (
    <header className='flex flex-col gap-[6rem] xl:h-[100vh] xl:gap-[0] xl:px-[3rem] xl:max-w-[168rem] xl:mx-auto'>
      <nav className='flex justify-between items-center h-[10vh] xl:justify-start xl:gap-[15rem]'>
        <a
          href='/'
          className='text-[3rem] uppercase font-bold font-serif lg:w-[25%]'
        >
          Gerícht
        </a>

        <div className='hidden xl:flex xl:justify-between xl:w-[70%] xl:gap-[2.5rem]'>
          <ul className='navbar--links lg:flex lg:gap-[2.5rem]'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Pages</a>
            </li>
            <li>
              <a href='/'>Contact Us</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Landing</a>
            </li>
          </ul>

          <div className='flex'>
            <div className='px-[3rem] border-r-[0.2rem] border-gray'>
              <a href='/'>Log In / Registration</a>
            </div>

            <div className='px-[3rem]'>
              <a href='/'>Book Table</a>
            </div>
          </div>
        </div>

        <button className='h-[2.2rem] w-[3rem] relative xl:hidden'>
          <div className="border-rounded-[4px] bg-primary h-[0.3rem] w-full before:content-[''] before:absolute before:top-0 before:left-0 before:h-[0.3rem] before:w-full before:bg-primary before:mt-[-1px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:bg-primary after:mt-[1px]"></div>
        </button>
      </nav>

      <Hero />
    </header>
  );
};

export default Header;
