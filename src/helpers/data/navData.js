import {
  AlertCircle,
  Book,
  Heart,
  HelpCircle,
  Home,
  LogIn,
  MessageSquare,
  Smartphone,
} from "react-feather";

export const navData = [
  {
    id: 1,
    link: "/about",
    label: "About",
  },
  {
    id: 2,
    link: "/how-it-works",
    label: "How it works",
  },
  {
    id: 3,
    link: "/scholarships",
    label: "Scholarships",
  },
  {
    id: 4,
    link: "/collaborate",
    label: "Collaborate",
  },
  {
    id: 5,
    link: "/login",
    label: "Login",
  },
];

export const sidebarData = [
  {
    id: 1,
    link: "/",
    icon: Home,
    label: "Home",
  },
  {
    id: 2,
    link: "/how-it-works",
    icon: HelpCircle,
    label: "How it works",
  },
  {
    id: 3,
    link: "/about",
    icon: AlertCircle,
    label: "About",
  },
  {
    id: 4,
    link: "/collaborate",
    icon: Heart,
    label: "Collaborate",
  },
  {
    id: 5,
    link: "/scholarships",
    icon: Book,
    label: "Scholarships Policy",
  },
  {
    id: 6,
    link: "/support",
    icon: MessageSquare,
    label: "Get In touch",
  },
  {
    id: 7,
    link: "https://play.google.com/store/apps/details?id=com.alteryouth.userapp",
    icon: Smartphone,
    label: "Get the app",
  },
  {
    id: 8,
    link: "/login",
    icon: LogIn,
    label: "Log In",
  },
];
