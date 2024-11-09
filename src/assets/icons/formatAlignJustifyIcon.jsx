function FormatAlignJustifyIcon({ width = "16px", height = "16px" }) {
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
        d="M18 6H6m12 4H6m12 4H6m12 4H6"
      />
    </svg>
  );
}
export default FormatAlignJustifyIcon;
