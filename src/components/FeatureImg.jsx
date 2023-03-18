import heroImg from "../assets/hero-img.png";

const FeatureImg = () => {
  return (
    <div className="max-w-[42rem] mx-auto p-[1.5rem] relative before:absolute before:content-[''] before:bg-primary before:top-0 before:right-0 before:h-[65%] before:w-[65%] before:-z-[1] after:absolute after:content-[''] after:bg-primary after:bottom-0 after:left-0 after:h-[65%] after:w-[65%] after:-z-[1] sm:w-[50%] xl:m-0 xl:p-[2rem] xl:min-w-[33%]">
      <img
        src={heroImg}
        alt="food"
      />
    </div>
  );
};

export default FeatureImg;
