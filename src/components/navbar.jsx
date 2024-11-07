import Logo from "./logo";
import Button from "./button";
function Navbar (){
return (
    <div >
        <div className="flex justify-between bg-100 px-6 py-3 rounded-full">
      <Logo height="48px" width="48px"/>
      <div className="flex">
        <Button type="secondary" className="mr-5">
            Sign In
        </Button>
        <Button type="primary">
        Sign Up
        </Button>
        </div>
      </div>
    </div>
)
}
export default Navbar;