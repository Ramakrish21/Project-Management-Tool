import { FaClock, FaTasks, FaCommentDots } from "react-icons/fa";

const activities = [
  { id: 1, icon: <FaTasks className="text-blue-500 text-xl" />, text: "Task assigned to John", time: "2 hours ago" },
  { id: 2, icon: <FaCommentDots className="text-green-500 text-xl" />, text: "Alice commented on a task", time: "4 hours ago" },
  { id: 3, icon: <FaTasks className="text-yellow-500 text-xl" />, text: "Project 'Web App' completed", time: "1 day ago" },
];

const RecentActivities = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center justify-between border-b pb-2 last:border-none">
            <div className="flex items-center gap-3">
              {activity.icon}
              <p className="text-gray-700">{activity.text}</p>
            </div>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <FaClock />
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
