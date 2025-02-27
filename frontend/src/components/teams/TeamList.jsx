import { useState } from "react";

const TeamList = ({ team, onRemoveMember, onEditMember }) => {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  const handleEditClick = (member) => {
    setEditId(member.id);
    setEditName(member.name);
    setEditRole(member.role);
  };

  const handleSaveEdit = () => {
    onEditMember(editId, editName, editRole);
    setEditId(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-700">Team Members</h2>
      <ul className="mt-4">
        {team.map((member) => (
          <li key={member.id} className="p-2 border-b flex justify-between items-center">
            {editId === member.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="border p-1 rounded mr-2"
                />
                <input
                  type="text"
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                  className="border p-1 rounded mr-2"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>
                  <strong>{member.name}</strong> - {member.role}
                </span>
                <div>
                  <button
                    onClick={() => handleEditClick(member)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onRemoveMember(member.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
