type IconName =
  | "pin"
  | "guests"
  | "calendar"
  | "arrow"
  | "down"
  | "sun"
  | "compass"
  | "flower"
  | "menu";
export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "pin" && (
        <>
          <path d="M12 21s7-6 7-12A7 7 0 0 0 5 9c0 6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </>
      )}
      {name === "guests" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" />
        </>
      )}
      {name === "calendar" && (
        <>
          <rect x="4" y="5" width="16" height="16" rx="3" />
          <path d="M8 3v4m8-4v4M4 11h16m-11 4h6m-6 3h3" />
        </>
      )}
      {name === "arrow" && <path d="M4 12h16m-6-6 6 6-6 6" />}
      {name === "down" && <path d="M12 3v18m-6-6 6 6 6-6" />}
      {name === "sun" && (
        <>
          <circle cx="12" cy="12" r="4.5" />
          {Array.from({ length: 16 }, (_, i) => (
            <path key={i} d="M12 1v3" transform={`rotate(${i * 22.5} 12 12)`} />
          ))}
        </>
      )}
      {name === "compass" && (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="m16 8-2 6-6 2 2-6 6-2ZM12 2v2m0 16v2M2 12h2m16 0h2" />
        </>
      )}
      {name === "flower" &&
        Array.from({ length: 8 }, (_, i) => (
          <ellipse
            key={i}
            cx="12"
            cy="6.5"
            rx="2.5"
            ry="5"
            transform={`rotate(${i * 45} 12 12)`}
          />
        ))}
      {name === "menu" && <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}
