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
  return <ul {...props.attributes}>{props.children}</ul>;
};
const H1Element = (props) => {
  return (
    <h1 className="text-6xl" {...props.attributes}>
      {props.children}
    </h1>
  );
};
const H2Element = (props) => {
  return (
    <h1 className="text-5xl" {...props.attributes}>
      {props.children}
    </h1>
  );
};
const H3Element = (props) => {
  return (
    <h1 className="text-4xl" {...props.attributes}>
      {props.children}
    </h1>
  );
};
const H4Element = (props) => {
  return (
    <h1 className="text-3xl" {...props.attributes}>
      {props.children}
    </h1>
  );
};
const H5Element = (props) => {
  return (
    <h1 className="text-2xl" {...props.attributes}>
      {props.children}
    </h1>
  );
};
const H6Element = (props) => {
  return (
    <h1 className="text-xl" {...props.attributes}>
      {props.children}
    </h1>
  );
};
const CaptionElement = (props) => {
  return (
    <h1 className="text-xs" {...props.attributes}>
      {props.children}
    </h1>
  );
};

const DefaultElement = (props) => {
  return (
    <p {...props.attributes} className="text-base">
      {props.children}
    </p>
  );
};

const renderEditorElement = (props) => {
  switch (props.element.type) {
    case "code":
      return <CodeElement {...props} />;
    case "blockQuote":
      return <BlockQuoteElement {...props} />;
    case "numberedList":
      return <NumberedListElement {...props} />;
    case "numberedList":
      return <NumberedListElement {...props} />;
    case "Heading 1":
      return <H1Element {...props} />;
    case "Heading 2":
      return <H2Element {...props} />;
    case "Heading 3":
      return <H3Element {...props} />;
    case "Heading 4":
      return <H4Element {...props} />;
    case "Heading 5":
      return <H5Element {...props} />;
    case "Heading 6":
      return <H6Element {...props} />;
    case "caption":
      return <CaptionElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};
export default renderEditorElement;
