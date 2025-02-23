import { FaCircle } from "react-icons/fa";

const teamMembers = [
  { id: 1, name: "Mudipelly Shiva", role: "Full Stack Developer", status: "online", img: "#" },
  { id: 2, name: "Rinith Reddy", role: "Project Manager", status: "offline", img: "#" },
  { id: 3, name: "T RamaKrishna", role: "Backend Developer", status: "online", img: "#" },
  { id: 4, name: "A Ramakrishna", role: "Nill", status: "offline", img: "#" },
];

const TeamMembers = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Team Members
      </h2>
      <ul className="space-y-4">
        {teamMembers.map((member) => (
          <li key={member.id} className="flex items-center gap-4 p-2 border-b last:border-none">
            <img
              src={member.img}
              alt={member.name}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600"
            />
            <div className="flex-1">
              <p className="text-gray-800 dark:text-gray-200 font-medium">{member.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
            </div>
            <FaCircle
              className={`text-xs ${member.status === "online" ? "text-green-500" : "text-gray-400"}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
