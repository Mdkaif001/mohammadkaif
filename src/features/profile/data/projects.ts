import { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "hiready-ai",
    title: "Hiready AI, Interview Preparation Tool",
    time: "03.2025 - 04.2025",
    link: "https://ai-interview-frontend-zeta.vercel.app/",
    tags: [
      "Next.js",
      "Tailwind CSS v3",
      "Tailwind CSS",
      "shadcn/ui",
      "Shadcn",
      "Typescript",
      "Nodejs",
      "Express",
      "MongoDB",
      "RAG",
      "LangChain",
    ],
    description:
      "- Developed an AI-powered mock interview platform using Next.js and Tailwind CSS for a modern, responsive UI, supporting both domain-specific and HR-style interviews.\n- Leveraged LangChain with OpenAI API (Node.js, Express.js, MongoDB) to dynamically generate skill-based interview questions and provide real-time AI feedback.\n- Implemented RAG (Retrieval Augmented Generation) pipelines to analyze job descriptions and create role-specific, contextual questions.\n- Integrated speech-to-text and text-to-speech APIs for interactive, voice-enabled interview sessions, simulating realistic interviews.\n- Enabled instant feedback with improved answer suggestions, allowing candidates to refine responses and enhance interview readiness.",
  },
  {
    id: "medibuddy",
    title: "HealthBell, Medicine Reminder App",
    time: "05.2025 - 06.2025",
    link: "https://github.com/Mdkaif001/healthbell",
    tags: [
      "React Native",
      "Expo",
      "Typescript",
      "Expo Local Authentication",
      "Expo Local Notifications",
      "AsyncStorage",
    ],
    description:
      "- Built a medicine reminder app using React Native (Expo), enabling users to manage medications with intuitive add, view, and delete functionality.\n- Implemented local notifications to remind users to take their medicines at scheduled times, enhancing adherence and health tracking and medicine monitoring.\n- Secured the application with local authentication, ensuring data privacy and restricted access for better user safety.\n- Utilized AsyncStorage for offline data persistence, allowing consistent user experience without internet dependency.\n- Designed a clean and user-friendly interface to simplify medication management, improving usability and engagement for daily health routines.",
  },
  {
    id: "code-carft",
    title: "Code Craft, AI-Enhanced Code Editor and Developer Community",
    time: "09.2024 - 10.2024",
    link: "https://github.com/Mdkaif001/code-craft",
    tags: [
      "Next.js",
      "Tailwind CSS v3",
      "Tailwind CSS",
      "shadcn/ui",
      "Shadcn",
      "Typescript",
      "Open AI",
      "Clerk",
      "Webhook",
      "Convex",
    ],
    description:
      "- Developed a fully functional online code editor with Next.js, React, TypeScript, and Tailwind CSS, providing a seamless and responsive coding experience across all devices.\n- Integrated powerful AI-driven mistake detection and automatic code repair tools based on OpenAI, dramatically lowering debugging time and increasing developer productivity.\n- Backend services were developed and maintained with Convex to allow for real-time collaboration, efficient state synchronization, and secure execution of user-submitted code snippets.\n- Implemented Clerk for user authentication and integrated webhook listeners to provide real-time error notifications and status updates during code editing sessions.",
  },
  {
    id: "generate-ai",
    title: "Generate.ai",
    time: "01.2024 - 03.2024",
    link: "https://generate-ai-one.vercel.app/",
    tags: [
      "Next.js",
      "Tailwind CSS v3",
      "Tailwind CSS",
      "shadcn/ui",
      "Shadcn",
      "Typescript",
      "Open AI",
      "Replite AI",
      "Clerk",
      "Prisma",
    ],
    description:
      "- Led the development of Generate.ai, using Next.js 13, React, and Tailwind CSS to create a dynamic, high-performance AI-powered platform with features such as server-side rendering, modular UI components, and responsive design.\n- Deployed OpenAI and Replicate AI tools for advanced image, conversation, video, and music generation, expanding the platform’s creative capabilities and user engagement.",
  },
];
