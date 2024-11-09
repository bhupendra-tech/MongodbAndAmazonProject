function FormatItalicIcon({ width = "16px", height = "16px" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
      />
    </svg>
  );
}
export default FormatItalicIcon;
