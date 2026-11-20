// Shared SweetLivingRoom arch mark for icon / apple-icon / opengraph-image (ImageResponse JSX).
export function GearMark({ size, ink = "#2A2724" }: { size: number; ink?: string }) {
  void ink;
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 33V16a15 15 0 0 1 30 0v17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" fill="#2F4739" />
      <path d="M8 33V16.5a10 10 0 0 1 20 0V33H8Z" fill="#FAF6F0" />
      <rect x="10.5" y="23" width="15" height="5.5" rx="1.6" fill="#C2714F" />
      <rect x="10.5" y="19.5" width="3.5" height="6" rx="1.6" fill="#C2714F" />
      <rect x="22" y="19.5" width="3.5" height="6" rx="1.6" fill="#C2714F" />
      <circle cx="18" cy="14" r="2.2" fill="#D2A24C" />
    </svg>
  );
}
