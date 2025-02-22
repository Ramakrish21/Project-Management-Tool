import { FaCircle } from "react-icons/fa";

const teamMembers = [
  { id: 1, name: "Mudipelly Shiva", role: "Full Stack Developer", status: "online", img: "#" },
  { id: 2, name: "Rinith Reddy", role: "Project Manager", status: "offline", img: "#" },
  { id: 3, name: "T RamaKrishna", role: "Backend Developer", status: "online", img: "#" },
  { id: 4, name: "A Ramakrishna", role: "Nill", status: "offline", img: "#" },
];

const TeamMembers = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Team Members</h2>
      <ul className="space-y-4">
        {teamMembers.map((member) => (
          <li key={member.id} className="flex items-center gap-4">
            <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full border" />
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
            <FaCircle className={`text-xs ${member.status === "online" ? "text-green-500" : "text-gray-400"}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
