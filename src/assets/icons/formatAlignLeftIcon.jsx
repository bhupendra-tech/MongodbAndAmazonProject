function FormatAlignLeftIcon({ width = "16px", height = "16px" }) {
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
        d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
      />
    </svg>
  );
}
export default FormatAlignLeftIcon;
