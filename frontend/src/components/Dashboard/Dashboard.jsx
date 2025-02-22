import ProjectSummary from "./ProjectSummary";
import TaskStatus from "./TaskStatus";
import RecentActivities from "./RecentActivities";
import TeamOverview from "./TeamOverview";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center my-6">
  Dashboard
</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectSummary />
        <TaskStatus />
        <RecentActivities />
        <TeamOverview />
      </div>
    </div>
  );
};

export default Dashboard;
