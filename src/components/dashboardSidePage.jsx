import DragDropZone from "./dropzone";
import Button from "../components/button";

function dashboardSidePage() {
  return (
    <div className="pt-6 pl-6">
      <h1 className="text-4xl font-semibold">Want to learn something ?</h1>
      <h3 className="text-2xl font-semibold mt-6">Create a new subject</h3>
      <div className="bg-100 px-6 py-10 rounded-xl mt-4 max-w-96 flex flex-col gap-4">
        <form className="flex flex-col">
          <label
            htmlFor="subjectInputName"
            className="text-xs bg-transparent text-400 font-semibold"
          >
            Subject Name
          </label>
          <input
            id="subjectInputName"
            type="text"
            className="outline-none bg-200 py-2 px-4 rounded-full mt-2 text-600 "
            placeholder="type something"
            required
          />
        </form>
        <DragDropZone />
        <Button size="small" type="primary">
          Create
        </Button>
      </div>
    </div>
  );
}

export default dashboardSidePage;
