import React from 'react';

export default function ArrowLeftIcon({ color, height = 24, width = 24 }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
  );
}
