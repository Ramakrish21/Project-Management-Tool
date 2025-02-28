const Project = require("../models/projectModel");

const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

const createProject = async (req, res) => {
  const { name, status, team } = req.body;
  const project = new Project({ name, status, team });
  await project.save();
  res.status(201).json(project);
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedProject);
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.json({ message: "Project deleted" });
};

module.exports = { getProjects, createProject, updateProject, deleteProject };