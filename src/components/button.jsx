// type : primary, secondary (text and outline), text
function Button({ type, children, className, size }) {
  const classes = `px-10 py-2 rounded-full font-semibold hover:bg-300 ${
    size === "small" ? "h-10" : "h-16"
  } ${type === "secondary" ? "border border-opacity-100 border-300" : ""} ${
    type === "primary" ? "bg-800 text-50 hover:bg-700" : ""
  } ${className ? className : ""}`;
  return <button className={classes}>{children}</button>;
}
export default Button;
