const CodeElement = (props) => {
  return (
    <pre
      {...props.attributes}
      className="bg-200 border-l-4 overflow-y-auto max-w-3xl border-500 whitespace-pre-wrap pl-4"
    >
      <code>{props.children}</code>
    </pre>
  );
};
const BlockQuoteElement = (props) => {
  return (
    <h4
      {...props.attributes}
      className="border-l-4 overflow-y-auto max-w-3xl border-500 whitespace-pre-wrap text-lg pl-4 text-400"
    >
      {props.children}
    </h4>
  );
};
const NumberedListElement = (props) => {
  console.log("2121212");
  return <ul {...props.attributes}>{props.children}</ul>;
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const renderEditorElement = (props) => {
  switch (props.element.type) {
    case "code":
      return <CodeElement {...props} />;
    case "blockQuote":
      return <BlockQuoteElement {...props} />;
    case "numberedList":
      return <NumberedListElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};
export default renderEditorElement;
