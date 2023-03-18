const Button = (props) => {
  return (
    <button className="mt-8 w-[13rem] h-[4rem] bg-primary text-base font-bold text-[#000] hover:bg-[transparent]  hover:text-primary border">
      {props.text}
    </button>
  );
};

export default Button;
