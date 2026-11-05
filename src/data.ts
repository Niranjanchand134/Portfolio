/* ========= EDIT YOUR CONTENT HERE ========= */
export interface Project {
  id: string;
  grp: "work" | "me";
  n: string;
  tag: string;
  b: string;
  stack: string[];
  role: string;
  stat: string;
  ch: string;
  so: string;
  re: string[];
  link: string;
  yr: string;
  team: string;
  m: string[][];
  f: string[];
  lr: string;
}

export interface Exp {
  w: string;
  t: string;
  o: string;
  website?: string;
  logo?: string;
  logoVariant?: "company" | "education";
  logoText?: string;
  location?: string;
  p?: string[];
}

export interface Data {
  name: string;
  ini: string;
  role: string;
  email: string;
  city: string;
  first: string;
  status: string;
  photo: string;
  lede: string;
  about: string;
  quote: string;
  companies: string[];
  stats: { to: number; s: string; l: string }[];
  steps: { t: string; d: string }[];
  projects: Project[];
  exp: Exp[];
  edu: Exp[];
  skills: Record<string, string[]>;
  ach: string[];
  resume: string;
  quotes: string[][];
  links: string[][];
}

export const D: Data = {
  name: "Niranjan",
  ini: "NC",
  role: "BICT Student at Virinchi | Full Stack Developer | UI/UX Designer",
  email: "niranjachand134@gmail.com",
  city: "Kathmandu, Nepal",
  first: "Niranjan",
  status: "Open to collaborations",
  photo: "/logos/profile.jpg",
  lede: "I build high-impact web platforms, dashboards, and scalable software solutions, and I make personal projects in my spare time.",
  about: "I’m a full stack developer with 16 months of experience, including 13 months at Crimson Tech, where I worked across frontend and backend. I build React interfaces and Python (FastAPI) backends, and I’m finishing my BICT at Virinchi in 2026. Outside work, I build personal projects to try new tools.",
  quote: "Make it work, make it clear, then make it fast.",
  companies: ["Crimson Tech", "Saayami Technology"],
  stats: [
    { to: 2, s: "", l: "Companies" },
    { to: 13, s: "", l: "Projects" },
    { to: 16, s: " mos", l: "Professional experience" },
  ],
  steps: [
    {
      t: "Understand the problem",
      d: "We agree on the goal, the user and what success looks like before any code.",
    },
    {
      t: "Build in small releases",
      d: "Working software every week, so you see progress and can change direction.",
    },
    {
      t: "Measure and hand over",
      d: "Dashboards, docs and a clean handover so your team owns what we built.",
    },
  ],
  projects: [
    {
      id: "lc-nc-workflow-editor",
      grp: "work",
      n: "LC-NC Vision Workflow Editor",
      tag: "Low-code computer vision",
      b: "A visual workflow system for assembling image-processing and inspection pipelines from connected nodes.",
      stack: ["React", "TypeScript", "React Flow", "FastAPI", "Python", "VisionCore", "YOLO"],
      role: "Software developer",
      stat: "Visual workflow editor",
      ch: "Building or changing image-inspection flows directly in code makes workflow configuration harder to manage.",
      so: "Created a React Flow editor that sends workflow graphs to a FastAPI backend, which executes operations in dependency order through VisionCore.",
      re: [
        "Build image-processing flows by connecting visual nodes",
        "Execute graph operations in dependency order",
        "Return serialized workflow results to the frontend",
      ],
      link: "",
      yr: "2025–2026",
      team: "Crimson Tech",
      m: [
        ["React Flow", "visual graph editor"],
        ["FastAPI", "workflow execution API"],
        ["VisionCore", "computer-vision operations"],
      ],
      f: ["Node-based workflow editing", "Dependency-aware execution", "VisionCore and YOLO integration"],
      lr: "A node-based workflow makes inspection pipelines easier to configure while leaving execution and vision operations in the backend.",
    },
    {
      id: "dove-ods",
      grp: "work",
      n: "Dove ODS",
      tag: "Multi-camera object detection",
      b: "A multi-camera object-detection and inspection system that groups images and model results by production cycle for live monitoring and quality reporting.",
      stack: ["Python", "PyQt5", "FastAPI", "Next.js", "PostgreSQL", "Redis", "PyTorch", "YOLO"],
      role: "Software developer",
      stat: "Multi-camera inspection",
      ch: "Production teams need a shared view of camera inspection results and cycle-level quality data, including images that arrive late or out of order.",
      so: "Built a desktop inspection client, authenticated ingestion API and browser dashboard that group camera uploads by stable inspection IDs and track per-camera completion.",
      re: [
        "Queues image publishing in the background so network requests do not block camera processing",
        "Provides live multi-camera monitoring, inspection history and object-level PDF reports",
        "Tracks image status and defect classifications while preserving unknown results as distinct from no defects",
      ],
      link: "",
      yr: "2025–2026",
      team: "Crimson Tech",
      m: [
        ["Inspection ID", "cross-camera cycle grouping"],
        ["PostgreSQL + Redis", "persistent and live data"],
        ["JWT + camera API keys", "authenticated access"],
      ],
      f: ["Desktop camera inspection", "Live production and quality dashboard", "Filtered reports and PDF downloads"],
      lr: "Stable inspection-cycle IDs let independent cameras contribute results to one reliable object-level view.",
    },
    {
      id: "skoda-nutrunner-inspection",
      grp: "work",
      n: "SKODA Nutrunner Inspection",
      tag: "Industrial machine vision",
      b: "A PLC-integrated inspection system that captures camera frames, classifies bolt positions and returns pass/fail feedback to a SKODA nutrunner production line.",
      stack: ["Python", "FastAPI", "OpenCV", "YOLO", "Snap7", "Hikvision MVS", "pywebview"],
      role: "Software developer",
      stat: "PLC-integrated inspection",
      ch: "The production line needs camera-based bolt inspection that stays responsive to PLC triggers and health checks, even when image capture or inference is slow.",
      so: "Built a desktop runtime that separates PLC trigger handling from camera capture and inference, compares predictions with expected PLC values, and reports inspection results.",
      re: [
        "Supports replay and Hikvision MVS camera sources",
        "Separates PLC and inference workers to keep trigger and heartbeat logic responsive",
        "Shows live inspection status, PLC tags, camera snapshots and event logs",
      ],
      link: "",
      yr: "2025–2026",
      team: "Crimson Tech",
      m: [
        ["PLC", "trigger and result feedback"],
        ["YOLO", "bolt-position classification"],
        ["FastAPI", "desktop monitoring UI"],
      ],
      f: ["Camera capture and inference", "Expected-position validation", "PLC pass/fail feedback"],
      lr: "Separating PLC handling from image inference helps keep line-control logic responsive when vision processing takes longer.",
    },
    {
      id: "wms-weight-recorder",
      grp: "work",
      n: "WMS Weight Recorder",
      tag: "Industrial desktop application",
      b: "An offline-first weight management system for recording noodle-production samples, validating pack weights and syncing records to a central service.",
      stack: ["Python", "PyQt5", "Flask", "SQLite", "SQLAlchemy", "PySerial", "Redis"],
      role: "Software developer",
      stat: "Offline-first weighing",
      ch: "Operators need a reliable way to capture scale readings, check them against product tolerances and retain records when central connectivity is unavailable.",
      so: "Built a desktop application with live scale input, stable-weight capture, local SQLite storage and an outbox worker that forwards records through Redis Streams.",
      re: [
        "Capture stable scale readings and validate them against product tolerances",
        "Store batches locally and provide history, charts and CSV export",
        "Queue records for background synchronization with the central service",
      ],
      link: "",
      yr: "2025–2026",
      team: "Crimson Tech",
      m: [
        ["SQLite", "local-first records"],
        ["PySerial", "scale connection"],
        ["Redis Streams", "background sync"],
      ],
      f: ["Live weighing and batch capture", "Product and tolerance management", "History, charts and CSV export"],
      lr: "Local persistence and a background outbox help weighing continue independently of central-service availability.",
    },
    {
      id: "omr-results-dashboard",
      grp: "work",
      n: "OMR Results Dashboard",
      tag: "Education analytics",
      b: "A dashboard for uploading weekly OMR results, reviewing student records and tracking cumulative and week-by-week performance.",
      stack: ["React", "TypeScript", "Vite", "FastAPI", "SQLAlchemy", "SQLite", "CSV"],
      role: "Software developer",
      stat: "Weekly results analytics",
      ch: "Staff need a consistent way to manage weekly result files and review an individual student's performance across multiple weeks.",
      so: "Built a dashboard and week log for CSV result management, searchable student analysis, paginated results and performance charts.",
      re: [
        "Register weeks and upload or replace result CSV files",
        "Search by roll number and review cumulative or weekly scores",
        "Browse paginated results and view weekly performance charts",
      ],
      link: "",
      yr: "2025–2026",
      team: "Crimson Tech",
      m: [
        ["CSV", "weekly result uploads"],
        ["Roll number", "student search"],
        ["FastAPI", "results API"],
      ],
      f: ["Weekly result management", "Student performance breakdowns", "Score trends and top-scorer charts"],
      lr: "Keeping weekly uploads and roll-number analysis together makes student performance easier to review over time.",
    },
    {
      id: "flow-studio",
      grp: "work",
      n: "Flow Builder Studio",
      tag: "Product UI",
      b: "Drag-and-drop interface where line engineers build multi-camera inspection flows without code.",
      stack: ["React", "TypeScript", "Node.js"],
      role: "Frontend engineer",
      stat: "No-code",
      ch: "Inspection pipelines needed a developer every time a product changed.",
      so: "Built a visual block editor for cameras, AI detection and PLC output.",
      re: [
        "Engineers build and edit flows themselves",
        "Multi-camera pipelines configured in hours",
        "Fewer support requests for changes",
      ],
      link: "",
      yr: "2025",
      team: "Product team",
      m: [
        ["Hours", "to go live"],
        ["8+", "cameras per flow"],
        ["0", "code needed"],
      ],
      f: ["Drag-and-drop blocks", "Multi-camera orchestration", "Live preview of results"],
      lr: "Designing for engineers on the factory floor means clarity beats cleverness.",
    },
    {
      id: "event-board",
      grp: "me",
      n: "Local Event & Meetup Board",
      tag: "Full-stack web app",
      b: "A hyperlocal Nepal events platform for discovering meetups, workshops, tutoring, sales and community activities.",
      stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
      role: "Project developer",
      stat: "Event marketplace",
      ch: "Local events are scattered across social platforms, while organizers and attendees lack a focused way to discover and manage them.",
      so: "Built an event platform with verified organizers, event listings, RSVPs, waitlists and eSewa/Khalti payments.",
      re: [
        "Organizer verification and role-based admin tools",
        "Event schedules, capacity management and attendee reservations",
        "Payment verification and automatic waitlist promotion",
      ],
      link: "",
      yr: "2026",
      team: "Project",
      m: [
        ["Free & paid", "events"],
        ["eSewa + Khalti", "payments"],
        ["Verified", "organizers"],
      ],
      f: ["Organizer verification", "RSVPs and waitlists", "Local payment gateways"],
      lr: "Trust and clear reservation rules are essential when bringing local organizers and attendees together.",
    },
    {
      id: "camera-detection",
      grp: "me",
      n: "Camera Detection",
      tag: "Computer vision",
      b: "A multi-camera RTSP monitoring dashboard with edge AI detections, searchable event records and continuous video recording.",
      stack: ["Python", "Flask", "OpenCV", "YOLO", "SQLite"],
      role: "Project developer",
      stat: "Real-time monitoring",
      ch: "Monitoring multiple camera streams and reviewing detection events requires a unified, responsive workflow.",
      so: "Combined threaded RTSP streaming with person and vehicle detection, speed estimation, license-plate OCR and a web dashboard.",
      re: [
        "Live multi-camera view with focus, zoom and pan controls",
        "Detection snapshots, filters, analytics and CSV export",
        "Continuous H.264 recordings with an in-browser archive",
      ],
      link: "https://github.com/Niranjanchand134/Camera-Detection",
      yr: "2026",
      team: "Project",
      m: [
        ["Multi-camera", "RTSP streams"],
        ["Person + vehicle", "AI detection"],
        ["H.264", "video archive"],
      ],
      f: ["Live AI monitoring", "License plate OCR and speed estimation", "Searchable records and recordings"],
      lr: "A monitoring dashboard is most useful when live detections and recorded evidence are easy to review together.",
    },
    {
      id: "vision-mouse",
      grp: "me",
      n: "VisionMouse",
      tag: "AI gesture control",
      b: "A low-latency virtual mouse that uses webcam hand gestures to control the desktop cursor, clicks, dragging and scrolling.",
      stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      role: "Project developer",
      stat: "Hands-free input",
      ch: "Precise cursor movement and common mouse actions normally require a physical input device.",
      so: "Tracked hand landmarks, classified gestures and mapped a calibrated hand workspace to screen coordinates with cursor smoothing.",
      re: [
        "Pinch gestures for left click, right click and drag",
        "Two-finger scrolling and fist-based pause mode",
        "Calibration, on-screen feedback and fail-safe release behavior",
      ],
      link: "",
      yr: "2026",
      team: "Project",
      m: [
        ["Webcam", "hand tracking"],
        ["One Euro", "cursor smoothing"],
        ["2-point", "calibration"],
      ],
      f: ["Gesture-based cursor control", "Click, drag and scroll", "Calibration and safety lock"],
      lr: "Smoothing and fail-safe behavior matter as much as gesture recognition for comfortable hands-free control.",
    },
    {
      id: "sajha-krishi",
      grp: "me",
      n: "SajhaKrishi",
      tag: "Academic team project",
      b: "A farmer-to-buyer marketplace concept connecting Nepali farmers with retailers, restaurants, hotels and cooperatives.",
      stack: ["React", "Spring Boot", "Spring Data JPA", "MySQL", "Tailwind CSS"],
      role: "Project team member",
      stat: "7th semester",
      ch: "Farmers and bulk buyers often rely on middlemen and have limited access to direct, transparent sales channels.",
      so: "Designed a marketplace for farm listings, bulk orders, KYC, direct communication and eSewa payments.",
      re: [
        "Farmer product listings and buyer search/order flows",
        "KYC and role-based access for marketplace participants",
        "Location-based listings and in-app negotiation concept",
      ],
      link: "",
      yr: "2025",
      team: "Team of 4",
      m: [
        ["Farmer to buyer", "marketplace"],
        ["eSewa", "payments"],
        ["Team of 4", "contributors"],
      ],
      f: ["Direct farm-product marketplace", "Bulk buyer ordering", "KYC and secure payments"],
      lr: "Digital marketplaces can improve market access when they account for the needs of both farmers and institutional buyers.",
    },
    {
      id: "smartweld-hub",
      grp: "me",
      n: "SmartWeld Hub",
      tag: "Final-year project proposal",
      b: "A proposed online marketplace connecting customers with verified welding and ironwork service providers in Nepal.",
      stack: ["Java", "Spring Boot", "React", "AI-assisted design", "eSewa"],
      role: "Project author",
      stat: "Proposal",
      ch: "Finding welding services and managing custom fabrication orders is often fragmented across calls, referrals and in-person visits.",
      so: "Proposed a platform for service discovery, custom orders, AI-assisted design and cost estimates, payments and order tracking.",
      re: [
        "Role-based dashboards for customers, providers and administrators",
        "Custom product requests with design previews and material estimates",
        "Planned secure local payments and multilingual access",
      ],
      link: "",
      yr: "2025",
      team: "Individual proposal",
      m: [
        ["Service", "marketplace"],
        ["AI-assisted", "design concept"],
        ["Order", "tracking"],
      ],
      f: ["Verified provider listings", "Custom welding orders", "AI-assisted design and cost estimation"],
      lr: "The proposal focuses on making custom metalwork easier to discover, specify and track.",
    },
  ],
  exp: [
    {
      w: "16 Sep 2025 - 15 Oct 2026",
      t: "Full Stack Developer",
      o: "Crimson Tech Pvt. Ltd.",
      website: "https://crimsontech.io/",
      logo: "/logos/crimsontechlogo.png",
      logoVariant: "company",
      location: "Balkumari, Lalitpur, Nepal",
      p: [
        "Worked on frontend and backend web development projects using modern web technologies.",
        "Developed responsive user interfaces.",
        "Built and integrated APIs and worked with databases.",
        "Debugged frontend and backend issues.",
        "Used Git and participated in code review.",
      ],
    },
    {
      w: "May 2025 - Aug 2025 (3 months)",
      t: "Frontend Developer Intern",
      o: "Saayami Technology Pvt. Ltd.",
      website: "https://saayami.com/",
      logo: "/logos/saayamilogo.png",
      logoVariant: "company",
      location: "Lalitpur, Nepal",
      p: [
        "Built responsive web pages and UI components for client business websites using HTML, CSS, JavaScript and React.js.",
        "Styled interfaces with Bootstrap and Tailwind CSS for consistent layouts across screen sizes.",
        "Turned design mockups into working frontend code.",
        "Fixed UI bugs and improved mobile and cross-browser responsiveness.",
        "Used Git and GitHub to collaborate with the team and acted on feedback from senior developers.",
      ],
    },
  ],
  edu: [
    {
      w: "2022 - 2026",
      t: "BICT (Hons) Software Engineering",
      o: "Asia e University",
      logo: "/logos/aeu.png",
      logoVariant: "education",
    },
    {
      w: "2021 - 2022",
      t: "XII (CBSE)",
      o: "Hetauda School of Management",
      logo: "/logos/HSM.png",
      logoVariant: "education",
    },
    {
      w: "2020",
      t: "SEE (CBSE)",
      o: "Shree Chaulani Secondary English Boarding School",
      logo: "/logos/school.png",
      logoVariant: "education",
    },
  ],
  skills: {
    all: [
      "JavaScript",
      "Python",
      "PHP",
      "React",
      "FastAPI",
      "WordPress",
      "TanStack Query",
      "TanStack Router",
      "Java",
      "Spring Boot",
      "Next.js",
      "Typescript",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "cPanel",
      "GitHub",
      "Docker",
      "AWS",
    ],
  },
  ach: [
    "Full-stack web apps, APIs & dashboards",
    "UI/UX & web design",
    "13 months at Crimson Tech",
    "BICT (Hons) Software Engineering",
  ],
  resume: "",
  quotes: [],
  links: [
    ["GitHub", "https://github.com/Niranjanchand134"],
    ["LinkedIn", "https://www.linkedin.com/in/niranjan-chand/"],
    ["Instagram", "https://www.instagram.com/niranjanchand134/"],
  ],
};
