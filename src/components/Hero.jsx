import Button from "./Button";
import scroll from "../assets/scroll.png";
import FeatureImg from "./FeatureImg";
import Divider from "./Divider";

const Hero = () => {
  return (
    <section className='relative hero flex flex-col gap-[2.8rem] sm:flex-row sm:items-center sm:justify-center xl:h-[80vh] xl:gap-[15rem]'>
      <div className='hidden absolute left-0 top-[50%] -rotate-90 flex gap-[2.5rem] min-[1366px]:flex'>
        <span>#Bar</span>
        <span>#Gericht</span>
      </div>

      <div className='font-serif text-[1.5rem] sm:w-[50%] xl:w-[fit-content]'>
        <p className='text-[2rem] xl:text-xl'>Chase the new flavour</p>

        <Divider />

        <h1 className='font-bold text-[5.5rem] leading-[1.2] text-primary capitalize md:text-[6rem] xl:text-[9rem]'>
          The key to <br /> fine dining
        </h1>

        <p className='mt-5 mb-[20px] max-w-[42rem] font-sans text-[1.5rem] text-gray xl:w-full xl:text-base'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>

        <Button text='Explore Now' />
      </div>

      <FeatureImg />

      <button className='hidden absolute bottom-0 right-0 xl:block'>
        <img src={scroll} alt='scroll-img' className='h-[12rem]' />
      </button>
    </section>
  );
};

export default Hero;
