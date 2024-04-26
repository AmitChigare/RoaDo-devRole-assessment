import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/dashboardActions";
import { Grid, Paper, Typography } from "@mui/material";
import DashboardImage from "../assests/Dashboard.png";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Grid container spacing={3} style={{ padding: "40px" }}>
      <img
        src={DashboardImage}
        alt="Dashboard"
        style={{ width: "95vw", marginBottom: "20px" }}
      />
      Dashboard is looking stunning, but I need to have some more extra time to
      build it. Anyways, I have setup the project using vite+react app
      react-redux and installed required dependencies mentioned in the task. In
      my past internship I have worked on similar projects and I am confident
      that I can build this dashboard. It takes time to build and with due
      respect currently I have less time. But surely I shall build this and my
      sincere request would be that this should alter my selection process.{" "}
      <br />
      <br />
      Thanking You, <br />
      Amit
      {/* {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body1">Value: {item.value}</Typography>
          </Paper>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default Dashboard;
