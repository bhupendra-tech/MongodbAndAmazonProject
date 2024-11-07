import MenuList from "./menuList";
import SearchBar from "./searchBar";

function SideMenu() {
  return (
    <div className="w-full h-full bg-50 rounded-3xl p-4 overflow-hidden shadow-xl">
      <SearchBar />
      <div className="h-full overflow-y-auto mt-7">
        <div className="bg-100 py-1 px-2 rounded-lg">Dashboard</div>
        <MenuList />
      </div>
    </div>
  );
}
export default SideMenu;

// an array of object subjectList
