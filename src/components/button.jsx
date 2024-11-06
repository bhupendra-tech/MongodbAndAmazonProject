// type : primary, secondary (text and outline), text
function Button({type,children}){
const classes = `px-6 py-2 rounded-full font-semibold hover:bg-300
${ type === "secondary" && "border border-opacity-100 border-300"}
${ type === "primary" && "bg-800 text-50 hover:bg-700"}` 
return <button className={classes}>{children}</button>
}
export default Button;