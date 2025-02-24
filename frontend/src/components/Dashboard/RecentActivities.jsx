import { useEffect, useState } from "react";
import { FaClock, FaTasks, FaCommentDots } from "react-icons/fa";

const iconMap = {
  task: <FaTasks className="text-blue-500 text-xl" />,
  comment: <FaCommentDots className="text-green-500 text-xl" />,
};

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recent-activities`)
      .then((response) => response.json())
      .then((data) =>
        setActivities(
          data.map((activity) => ({
            ...activity,
            icon: iconMap[activity.type] || <FaTasks className="text-gray-500 text-xl" />,
          }))
        )
      )
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

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
