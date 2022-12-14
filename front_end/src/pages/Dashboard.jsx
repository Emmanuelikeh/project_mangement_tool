import React, { useState, useEffect, useCallback } from 'react'
import Navigation from '../components/Navigation'
import ProjectsTable from '../components/ProjectsTable'
import RecentProjects from '../components/RecentProjects'
import {decodeToken} from 'react-jwt';

function Dashboard() {
  const [recentProjects, setRecentProjects] = useState();
  const [allProjects, setAllProjects] = useState();
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("Token");
  const decodedToken = decodeToken(token);

  const getAllProjects = async () => {
    await fetch(`http://localhost:5001/api/projects/${decodedToken._id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json', 'authorization': token }
    })
      .then(res => res.json())
      .then(json => {
        setAllProjects(json.data);
      });
  }

  const getRecentProjects = async () => {
    await fetch(`http://localhost:5001/api/projects/recent/${decodedToken._id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json', 'authorization': token }
    })
      .then(res => res.json())
      .then(json => {
        setRecentProjects(json.data);
      });
  };


  useEffect(()=> {
    getAllProjects();
    getRecentProjects();
  }, [refresh])

  return (
    <div>
      <Navigation />
      <RecentProjects setRefresh={() => setRefresh(!refresh)} projects={recentProjects}/>
      <ProjectsTable setRefresh={() => setRefresh(!refresh)} projects={allProjects}  />
    </div>
  )
}

export default Dashboard;
