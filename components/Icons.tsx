interface IconProps {
  className?: string;
}

export function MenuIcon({ open, className }: IconProps & { open: boolean }) {
  if (open) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ProfileIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Handle + basket */}
      <path
        d="M3 3H5L5.6 6M5.6 6L7.2 14.4C7.38 15.34 8.2 16 9.15 16H16.9C17.83 16 18.64 15.36 18.85 14.45L20.5 7.2C20.64 6.58 20.17 6 19.53 6H5.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="20" r="1.75" fill="currentColor" />
      <circle cx="16.5" cy="20" r="1.75" fill="currentColor" />
    </svg>
  );
}

export function MeatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Steak outline */}
      <path
        d="M4 13.5C4 10 6.5 7.5 10.5 7.5C14 7.5 16 6 18 7C20 8 20.5 10.5 19.5 12.5C18.3 14.9 15.5 16.5 11.5 16.5C7 16.5 4 15.8 4 13.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Marbling line */}
      <path
        d="M7 12.5C9 13.5 12.5 13 14.5 11.5C16 10.4 17.5 10 18.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Bone eye */}
      <circle cx="8.5" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Leaf body */}
      <path
        d="M12 4C7.5 4 4.5 7.5 4.5 12C4.5 16.5 7.5 20 12 20C16.5 20 19.5 16.5 19.5 12C19.5 9.5 18.5 6.5 16.5 4.5C15.5 6 13.5 7 12 7V4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Inner curve / stem swirl */}
      <path
        d="M12 7C12 9.5 13.5 11.5 16.5 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FlameIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer flame */}
      <path
        d="M12 3C12 3 6.5 8 6.5 13.5C6.5 17.1 9 20 12 20C15 20 17.5 17.1 17.5 13.5C17.5 11.5 16.5 9.5 15.5 8C15 9 14 9.8 13.2 9.8C13.8 8 13.5 5 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Inner flame */}
      <path
        d="M10 15.5C10 17 11 18 12 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
