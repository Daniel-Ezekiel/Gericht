const Button = (props) => {
  return (
    <a className='block font-serif py-[1.2rem] w-[13rem] bg-primary text-center text-base font-bold text-[#000] hover:bg-[transparent] hover:text-primary border'>
      {props.text}
    </a>
  );
};

export default Button;
