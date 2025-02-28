import { useState, useEffect } from "react";
import axios from "axios"; 
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash, X } from "lucide-react";

const API_URL = "http://localhost:5000/api/projects"; 

const Projects = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentProject, setCurrentProject] = useState({ id: null, name: "", status: "", team: "" });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(API_URL);
      setProjects(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleCreateProject = async () => {
    if (!currentProject.name || !currentProject.status || !currentProject.team) return;

    try {
      if (isEditMode) {
        await axios.put(`${API_URL}/${currentProject._id}`, currentProject);
        console.log(`change successfully on ID  ${currentProject._id}`);
        
      } else {
        await axios.post(API_URL, currentProject);
      }
      fetchProjects();
      closeModal();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleEdit = (project) => {
    setCurrentProject(project);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Error: Project ID is undefined");
      return;
    }
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        console.log("Deleting project with ID:", id);
        await axios.delete(`${API_URL}/${id}`);
        fetchProjects();
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setCurrentProject({ id: null, name: "", status: "", team: "" });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white flex items-center gap-2">
          <Plus size={18} /> Create Project
        </Button>
      </div>

      <Input
        placeholder="Search projects..."
        className="w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((project) => (
            <Card key={project._id} className="p-4 border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Status: {project.status}</p>
                <p className="text-gray-600">Team: {project.team}</p>
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => handleEdit(project)} size="sm" className="bg-yellow-500 text-white flex items-center gap-1">
                    <Edit size={16} /> Edit
                  </Button>
                  <Button onClick={() => handleDelete(project._id)} size="sm" className="bg-red-500 text-white flex items-center gap-1">
                    <Trash size={16} /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{isEditMode ? "Edit Project" : "Create Project"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500">
                <X size={20} />
              </button>
            </div>
            <Input
              placeholder="Project Name"
              className="w-full mb-2"
              value={currentProject.name}
              onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })}
            />
            <Input
              placeholder="Status"
              className="w-full mb-2"
              value={currentProject.status}
              onChange={(e) => setCurrentProject({ ...currentProject, status: e.target.value })}
            />
            <Input
              placeholder="Team"
              className="w-full mb-4"
              value={currentProject.team}
              onChange={(e) => setCurrentProject({ ...currentProject, team: e.target.value })}
            />
            <Button onClick={handleCreateProject} className="w-full bg-green-600 text-white">
              {isEditMode ? "Save Changes" : "Create"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
