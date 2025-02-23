import { FaClock, FaTasks, FaCommentDots } from "react-icons/fa";

const activities = [
  { id: 1, icon: <FaTasks className="text-blue-500 text-xl" />, text: "Task assigned to John", time: "2 hours ago" },
  { id: 2, icon: <FaCommentDots className="text-green-500 text-xl" />, text: "Alice commented on a task", time: "4 hours ago" },
  { id: 3, icon: <FaTasks className="text-yellow-500 text-xl" />, text: "Project 'Web App' completed", time: "1 day ago" },
];

const RecentActivities = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Recent Activities
      </h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center justify-between border-b pb-2 last:border-none">
            <div className="flex items-center space-x-3">
              {activity.icon}
              <p className="text-gray-700 dark:text-gray-400">{activity.text}</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
              <FaClock />
              <span>{activity.time}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
