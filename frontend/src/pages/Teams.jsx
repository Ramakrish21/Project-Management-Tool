import TeamList from "../components/Teams/TeamList";
import TeamForm from "../components/Teams/TeamForm";
import { useState, useEffect } from "react";

const Teams = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const storedTeam = JSON.parse(localStorage.getItem("team")) || [];
    setTeam(storedTeam);
  }, []);

  const addMember = (newMember) => {
    const updatedTeam = [...team, newMember];
    setTeam(updatedTeam);
    localStorage.setItem("team", JSON.stringify(updatedTeam));
  };

  const removeMember = (id) => {
    const updatedTeam = team.filter((member) => member.id !== id);
    setTeam(updatedTeam);
    localStorage.setItem("team", JSON.stringify(updatedTeam));
  };

  const editMember = (id, updatedName, updatedRole) => {
    const updatedTeam = team.map((member) =>
      member.id === id ? { ...member, name: updatedName, role: updatedRole } : member
    );
    setTeam(updatedTeam);
    localStorage.setItem("team", JSON.stringify(updatedTeam));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center my-6">
        Team Management
      </h1>
      <TeamForm onAddMember={addMember} />
      <TeamList team={team} onRemoveMember={removeMember} onEditMember={editMember} />
    </div>
  );
};

export default Teams;
