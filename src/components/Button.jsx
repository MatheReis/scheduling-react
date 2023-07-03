const Button = (props) => {
  const { color, text } = props;

  const buttonClasses = `bg-red-500 text-white font-semibold py-2 px-4 rounded w-32 h-10`;

  return <button className={buttonClasses}>Clique aqui</button>
};
