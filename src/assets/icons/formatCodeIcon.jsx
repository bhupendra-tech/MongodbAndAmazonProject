function FormatCodeIcon({ width = "16px", height = "16px" }) {
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
        d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
      />
    </svg>
  );
}
export default FormatCodeIcon;
