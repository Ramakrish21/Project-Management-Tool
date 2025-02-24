import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("#") 
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Team Members
      </h2>
      <ul className="space-y-4">
        {teamMembers.length > 0 ? (
          teamMembers.map((member) => (
            <li key={member.id} className="flex items-center gap-4 p-2 border-b last:border-none">
              <img
                src={member.img || "#"} // Placeholder if no image
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
          ))
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default TeamMembers;
