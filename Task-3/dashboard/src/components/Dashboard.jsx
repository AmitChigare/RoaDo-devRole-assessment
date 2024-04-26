import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/dashboardActions";
import { Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Grid container spacing={3} style={{ padding: "100px" }}>
      Dashboard is looking stunning, but i need to have some more extra time to
      build it. Anyways, i have setup the project using vite+react app
      react-redux and installed required dependencies mentioned in the task.
      With your permission, i will continue to work on this project and will
      submit it as soon as possible. Thanks for your understanding. <br />
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
