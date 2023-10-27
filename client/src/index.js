import React, { ErrorBoundary } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Login from "./components/login";
import Project from "./components/project";
import Signup from "./components/signup";
import Task from "./components/task";
import Team from "./components/team";
import TeamRoaster from "./components/teamRoaster";
import UserStory from "./components/userStory";
import "./index.css";
import DisplayTeams from "./components/DisplayTeams";
import DisplayProjects from "./components/DisplayProjects";
import AddTeamMember from "./components/AddTeamMember";
import DisplayUsersWithTeam from "./components/DisplayUsersWithTeam";
import DisplayUserStory from "./components/DisplayUserStory";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-teammember" element={<AddTeamMember />} />
      <Route path="/display-teammember" element={<DisplayUsersWithTeam />} />
      <Route path="/list-userStories" element={<DisplayUserStory />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/display-projects" element={<DisplayProjects />} />
      <Route path="/teams" element={<Team />} />
      <Route path="/display-teams" element={<DisplayTeams />} />
      <Route path="/teamRoasters" element={<TeamRoaster />} />
      <Route path="/userStories" element={<UserStory />} />
      <Route path="/tasks" element={<Task />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </RouterProvider>
  </React.StrictMode>
);
