import Button from "./Button";
import Divider from "./Divider";

const About = () => {
  return (
    <section className='bg-[url("/src/assets/section1-bg.png")] flex flex-col gap-[30px] my-[60px] py-[40px]  px-[2rem]'>
      <div className='flex flex-col gap-[10px]'>
        <h2 className='font-serif font-bold text-primary text-[3.2rem]'>
          About Us
        </h2>
        <Divider />
        <p className='mt-[10px] mb-[10px] font-sans text-[1.5rem] text-gray xl:w-full xl:text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
          possimus vero architecto quasi placeat atque, accusantium optio harum
          aliquid, hic quas pariatur obcaecati officia nihil!
        </p>
        <Button text='Know More' />
      </div>

      <div className='flex flex-col gap-[15px]'>
        <h2 className='font-serif font-bold text-primary text-[3.2rem]'>
          Our History
        </h2>
        <Divider />
        <p className='mt-[10px] font-sans text-[1.5rem] text-gray xl:w-full xl:text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
          possimus vero architecto quasi placeat atque, accusantium optio harum
          aliquid, hic quas pariatur obcaecati officia nihil!
        </p>
        <Button text='Know More' />
      </div>
    </section>
  );
};

export default About;
