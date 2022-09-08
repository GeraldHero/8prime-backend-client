import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsList } from "../../../reduxConfig/action/projectAction";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PageviewIcon from "@mui/icons-material/Pageview";
import moment from "moment";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "title", headerName: "Title name", width: 130 },
  { field: "createdAt", headerName: "Created Date:", width: 180 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "action",
    headerName: "Action",
    width: 250,
    headerAlign: "right",
    align: "right",
    renderCell: (params) => {
      const onClickDelete = async () => {
        return {};
      };
      const onClickMessage = async () => {
        return {};
      };
      return (
        <div>
          <Tooltip title="Edit">
            <Link state={{ id: params.row.id }} to={`/dashboard/projects/edit`}>
              <IconButton color="primary" onClick={onClickMessage}>
                <EditIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="View">
            <Link state={{ id: params.row.id }} to={`/dashboard/projects/view`}>
              <IconButton color="primary" onClick={onClickMessage}>
                <PageviewIcon color="secondary" />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={onClickDelete}>
              <DeleteIcon color="error" />
            </IconButton>
          </Tooltip>
        </div>
      );
    },
  },
];

const Projects = () => {
  const [query, setQuery] = useState({
    page: 0,
    limit: 10,
  });

  const dispatch = useDispatch();
  const projectsReduxData = useSelector((state) => state.projects);
  const { page, limit } = query;
  useEffect(() => {
    dispatch(getProjectsList(page, limit));
  }, [page, limit]);

  const { projects, totalPage } = projectsReduxData;

  const rows = projects
    ? projects.map((project) => {
        return {
          id: project._id,
          title: project.title,
          price: project.price,
          createdAt: moment(project.createdAt).format("MMMM Do YYYY"),
        };
      })
    : [];

  return (
    <Paper sx={{ p: 3, m: { xs: 2, md: "2em 5em" } }}>
      Projects
      <div style={{ height: 400, width: 1000 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </Paper>
  );
};

export default Projects;
