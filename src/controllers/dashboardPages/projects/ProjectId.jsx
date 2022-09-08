import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getSpecificProject } from "../../../reduxConfig/action/projectAction";
import { Link } from "react-router-dom";
import {
  Paper,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  FilledInput,
  Box,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
const ProjectId = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state.id) navigate("/dashboard/projects");
  const projectReduxData = useSelector((state) => state.projects);
  const { id } = location.state;
  const pathArr = location.pathname.split("/");
  const path = pathArr[3];
  let isEditPath = path === "edit";

  useEffect(() => {
    dispatch(getSpecificProject(id));
  }, [dispatch, id]);

  const { project } = projectReduxData;
  // if (project) {
  //   console.log(Object.keys(project).length);
  //   console.log(project);
  // }

  const gridSpace = {
    container: {
      spacing: 3,
      my: 1,
    },
    firstItems: {
      xs: 12,
      md: 4,
    },
    secondItems: {
      xs: 6,
      md: 3,
    },
  };
  return project ? (
    <Box
      sx={{
        display: "flex",
        width: "90vw",
        margin: "2rem auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: "90%", p: 5 }}>
        <Divider>
          <Typography
            sx={{
              fontFamily: "Monospace",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 24,
            }}
          >
            {path} page
          </Typography>
        </Divider>
        <Grid container {...gridSpace.container}>
          <Grid item {...gridSpace.firstItems}>
            <FormControl fullWidth variant="filled" disabled={!isEditPath}>
              <InputLabel htmlFor="Title-Compo">Title:</InputLabel>
              <FilledInput id="Title-Compo" value={project.title} />
            </FormControl>
          </Grid>

          <Grid item {...gridSpace.firstItems}>
            <FormControl fullWidth variant="filled" disabled={!isEditPath}>
              <InputLabel htmlFor="Description">Description:</InputLabel>
              <FilledInput id="Description" value={project.description} />
            </FormControl>
          </Grid>
          <Grid item {...gridSpace.firstItems}>
            <FormControl fullWidth variant="filled" disabled={!isEditPath}>
              <InputLabel htmlFor="Title-List"> Title List:</InputLabel>
              <FilledInput id="Title-List" value={project.listTitle} />
            </FormControl>
          </Grid>
        </Grid>

        <Divider>Project Details</Divider>

        <Grid container {...gridSpace.container}>
          <Grid item {...gridSpace.secondItems}>
            <FormControl fullWidth variant="filled" disabled={!isEditPath}>
              <InputLabel htmlFor="Price"> Bedrooms:</InputLabel>
              <FilledInput id="Price" value={project.bedrooms} />
            </FormControl>
          </Grid>
          <Grid item {...gridSpace.secondItems}>
            <FormControl fullWidth variant="filled" disabled={!isEditPath}>
              <InputLabel htmlFor="sq"> Square Meter:</InputLabel>
              <FilledInput id="sq" value={project.sq} />
            </FormControl>
          </Grid>

          <Grid item {...gridSpace.secondItems}>
            <FormControl fullWidth variant="filled" disabled={!isEditPath}>
              <InputLabel htmlFor="cr"> Comfort Room:</InputLabel>
              <FilledInput id="cr" value={project.cr} />
            </FormControl>
          </Grid>

          <Grid item {...gridSpace.secondItems}>
            <FormControl fullWidth variant="filled" disabled={!isEditPath}>
              <InputLabel htmlFor="Price"> Price:</InputLabel>
              <FilledInput id="Price" value={project.price} />
            </FormControl>
          </Grid>
        </Grid>

        <Stack>
          <Stack direction="column" spacing={2}>
            {project.area.map((item, idx) => {
              return (
                <FilledInput
                  key={`${item} - ${idx}`}
                  defaultValue={item}
                  disabled={!isEditPath}
                />
              );
            })}
          </Stack>
        </Stack>

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          m={5}
        >
          <Button
            component={Link}
            to={"/dashboard/projects"}
            variant="outlined"
            size="large"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>

          {isEditPath ? (
            <Button
              color="success"
              variant="outlined"
              size="large"
              startIcon={<PublishIcon />}
            >
              Submit
            </Button>
          ) : (
            <Button
              component={Link}
              to={`/dashboard/projects/edit`}
              color="secondary"
              variant="outlined"
              size="large"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          )}

          <Button
            color="error"
            variant="outlined"
            size="large"
            startIcon={<DeleteIcon />}
            disabled={!isEditPath}
          >
            Delete
          </Button>
        </Stack>
      </Paper>
    </Box>
  ) : (
    <div>Loading</div>
  );
};

export default ProjectId;

{
  /* <Stack
direction="column"
justifyContent="center"
alignItems="stretch"
spacing={2}
>
 
 

<Stack {...stackStyle}>
  <Typography variant="h6" width={180}>
    Area:
  </Typography>

  <Stack direction="column" spacing={2}>
    {project.area.map((item, idx) => {
      return (
        <TextField
          key={`${item} - ${idx}`}
          defaultValue={item}
          disabled
        />
      );
    })}
  </Stack>
</Stack>

<Stack {...stackStyle}>
  <Typography variant="h6" width={180}>
    Image:
  </Typography>

  <img src={`data:image/png;base64, ${project.image}`} alt="img-1" />
</Stack>
</Stack> */
}
