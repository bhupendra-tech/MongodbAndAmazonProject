const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.superScript) {
    children = <sup>{children}</sup>;
  }
  if (leaf.subScript) {
    children = <sub>{children}</sub>;
  }
  return <span {...attributes}>{children}</span>;
};

export default Leaf;
