import type { FC, SVGProps } from "react";

interface SkillIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export const SkillIcon: FC<SkillIconProps> = ({ name, className, ...props }) => {
  const norm = name.trim().toLowerCase();

  switch (norm) {
    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <rect x="1" y="1" width="22" height="22" rx="3" fill="#F7DF1E" />
          <path d="M12.5 17.5c.5.8 1.1 1.2 2 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.5-1.4-1.5-.7-2.5-1.5-2.5-3.1 0-1.5 1.2-2.6 3-2.6 1.3 0 2.3.5 3 1.7l-1.7 1.1c-.4-.7-.8-.9-1.3-.9s-.9.3-.9.7c0 .5.3.8 1.3 1.2 1.9.8 2.8 1.6 2.8 3.2 0 1.8-1.4 2.9-3.5 2.9-1.9 0-3.1-.9-3.7-2.2zm-6.5.2c.4.6.7 1 1.4 1 .6 0 .9-.3.9-1.1v-6.8h2.2v6.8c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-2z" fill="#222" />
        </svg>
      );

    case "python":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <path d="M11.8 2C7.2 2 7.5 4 7.5 4v3h4.5v1H5.7S2 7.6 2 12.2s3.2 4.5 3.2 4.5h1.9v-2.6s-.1-3.2 3.1-3.2h5.3s3-.1 3-2.9V5.1S19 2 11.8 2zm-2.5 2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB" />
          <path d="M12.2 22c4.6 0 4.3-2 4.3-2v-3H12.1v-1h6.3s3.6.4 3.6-4.2-3.2-4.5-3.2-4.5h-1.9v2.6s.1 3.2-3.1 3.2H8.5s-3 .1-3 2.9v2.9S5 22 12.2 22zm2.5-2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD43B" />
        </svg>
      );

    case "php":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB3" />
          <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" fill="#fff">PHP</text>
        </svg>
      );

    case "react":
    case "react.js":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="10" ry="3.9" />
            <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case "fastapi":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <path d="M12 1.5 2.5 12l9.5 10.5L21.5 12z" fill="#009688" />
          <path d="m13.5 5.5-6 7h4l-1 6 6-8h-4z" fill="#fff" />
        </svg>
      );

    case "wordpress":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <circle cx="12" cy="12" r="10.5" fill="none" stroke="#21759B" strokeWidth="2" />
          <path d="m5.5 7 3.2 9.5L12 8.4l3.2 8.1L19 7M9.3 7l2.7 7 2.5-7" fill="none" stroke="#21759B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "tanstack query":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF4154" />
          <text x="12" y="16.5" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" fill="#fff">Q</text>
        </svg>
      );

    case "tanstack router":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#00A98F" />
          <text x="12" y="16.5" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" fill="#fff">R</text>
        </svg>
      );

    case "java":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          {/* Steam curves */}
          <path
            d="M8.5 3.5c1.2 1.5.5 3-1 4.2M12 2c1.8 1.8.8 3.8-1 5.2M15.5 3c1.5 1.5.8 3.2-.8 4.5"
            fill="none"
            stroke="#EA2D2E"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Coffee cup */}
          <path
            d="M4 11h11a1 1 0 0 1 1 1v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4a1 1 0 0 1 1-1z"
            fill="#5382A1"
          />
          {/* Handle */}
          <path
            d="M15 12h2a2.5 2.5 0 0 1 0 5h-2"
            fill="none"
            stroke="#5382A1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Saucer */}
          <path
            d="M3 21h14"
            fill="none"
            stroke="#5382A1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "spring boot":
    case "spring":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <circle cx="12" cy="12" r="10.5" fill="#6DB33F" />
          {/* Leaf / power symbol */}
          <path
            d="M12 6.5v6M8.5 8.5a5 5 0 1 0 7 0"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "next.js":
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path
            d="M8 8v8M8 8l8.2 10M16 8v5.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#3178C6" />
          <path
            d="M5 8.5h6M8 8.5v8M13.5 14c.8.9 2 1.3 3.2.7.9-.5 1-1.6.3-2.2-.8-.7-2.7-.9-3.2-1.8-.5-.8-.1-2.1 1-2.5 1.4-.5 2.6 0 3.2.7"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <path
            d="M12 2C12 2 6 8.5 6 14.5a6 6 0 0 0 11.7 2C17.9 14.8 12 2 12 2z"
            fill="#47A248"
          />
          <path
            d="M12 2.5v18.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "mysql":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          {/* Dolphin silhouette */}
          <path
            d="M3 13c3-5 9-7 14-4 2 1.2 3.8 3.5 4 6-2-1.5-4-1.8-6-1.2-2.5.8-4.5 2.8-7 2.4-2.2-.4-3.5-2-5-3.2z"
            fill="#00758F"
          />
          <path
            d="M14 9c.5-2.2 2-3.8 3.8-4.5-.4 1.8-.2 3.5.5 4.8"
            fill="#F29111"
          />
          <circle cx="18" cy="11.5" r="1" fill="#FFFFFF" />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          {/* Elephant head profile */}
          <path
            d="M12 3c-4.5 0-7 3.5-7 7.5 0 3 1.8 5 3.5 6.5v3.5c0 .5.5 1 1 1h2.5c.5 0 1-.5 1-1v-2c2-.2 4-1.2 5-3 1.2-2.2 1.5-5-.5-7.5-1.2-1.5-3-2-5.5-2.5z"
            fill="#336791"
          />
          <path
            d="M7 11c1-1.5 3-2 5-2s4 .5 5 2"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="15.5" cy="10" r="1" fill="#FFFFFF" />
        </svg>
      );

    case "cpanel":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <path
            d="M6 7.5c3.5-3.5 8.5-3.5 12 0l-2.5 2.5c-2-2-5.5-2-7.5 0s-2 5.5 0 7.5 5.5 2 7.5 0l2.5 2.5c-3.5 3.5-8.5 3.5-12 0s-3.5-9 0-12.5z"
            fill="#FF6C2C"
          />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props} fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case "docker":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          {/* Whale + container boxes */}
          <rect x="5" y="9" width="2" height="2" fill="#2496ED" rx="0.3" />
          <rect x="8" y="9" width="2" height="2" fill="#2496ED" rx="0.3" />
          <rect x="11" y="9" width="2" height="2" fill="#2496ED" rx="0.3" />
          <rect x="8" y="6" width="2" height="2" fill="#2496ED" rx="0.3" />
          <rect x="11" y="6" width="2" height="2" fill="#2496ED" rx="0.3" />
          <rect x="14" y="9" width="2" height="2" fill="#2496ED" rx="0.3" />
          <path
            d="M21.5 12c-.5-.3-1.6-.2-2.3.2-.2-1.3-.9-2.2-2.2-2.2-1.3 0-1.8.8-2 1.3H2c-.4 2.5.5 5.5 3 6.8 4 2 9.5 2 13.5-1 2-1.5 2.5-3.5 3-5.1z"
            fill="#2496ED"
          />
        </svg>
      );

    case "aws":
    case "amazon web services":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          {/* AWS letters / simplified smile */}
          <path
            d="M6 13l2.5-6h1.5l2.5 6m-5.3-2h4.1M17 7v6m0-3c.5-.8 1.5-1.2 2.5-.8s1.5 1.2 1.5 2.2v1.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Orange Smile arrow */}
          <path
            d="M4 17.5c5 2.5 11 2.5 16 0"
            fill="none"
            stroke="#FF9900"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.5 16.5l2 1.5-1 2"
            fill="none"
            stroke="#FF9900"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "express.js":
    case "express":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <rect width="22" height="22" x="1" y="1" rx="5" fill="currentColor" fillOpacity="0.12" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
            fill="currentColor"
          >
            ex
          </text>
        </svg>
      );

    case "iot and robotics":
    case "iot":
    case "robotics":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          {/* Microchip / IoT CPU */}
          <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3" fill="#3DD6E8" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" />
          {/* Pins */}
          <path
            d="M8 2v3M12 2v3M16 2v3M8 19v3M12 19v3M16 19v3M2 8h3M2 12h3M2 16h3M19 8h3M19 12h3M19 16h3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...props}>
          <circle cx="12" cy="12" r="6" fill="var(--accent)" />
        </svg>
      );
  }
};
