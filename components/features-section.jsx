import { cn } from "@/lib/utils";
import {
  IconMessageCircle,
  IconShieldLock,
  IconChartBar,
  IconUsers,
  IconBell,
  IconHelp,
  IconRefresh,
  IconHeart,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Anonymous Feedback",
      description:
        "Share your thoughts freely with complete anonymity. Your identity stays protected.",
      icon: <IconShieldLock />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Get instant insights and trends from feedback data with beautiful visualizations.",
      icon: <IconChartBar />,
    },
    {
      title: "Multiple Channels",
      description:
        "Collect feedback through various channels - web, mobile, email, and more.",
      icon: <IconMessageCircle />,
    },
    {
      title: "Team Collaboration",
      description:
        "Work together with your team to analyze and act on feedback effectively.",
      icon: <IconUsers />,
    },
    {
      title: "Smart Notifications",
      description:
        "Get instant alerts for important feedback and trending topics.",
      icon: <IconBell />,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is always ready to help you with any questions.",
      icon: <IconHelp />,
    },
    {
      title: "Feedback Templates",
      description:
        "Use pre-built templates or create custom ones for different feedback types.",
      icon: <IconRefresh />,
    },
    {
      title: "User Satisfaction",
      description:
        "Track and improve user satisfaction with comprehensive feedback analysis.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center  relative z-10 py-10 max-w-7xl mx-auto font-mono p-6">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "dark:border-neutral-800",
        index < 4 && "dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
