import { Stack } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box, Typography } from "@mui/material";

const columns = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 150,
    renderCell: (params) => <Avatar alt="Avatar" src={params.value} />,
  },
  { field: "name", headerName: "Name", width: 200 },
  { field: "coins", headerName: "Coins", type: "number", width: 100 },
];

const rows = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://via.placeholder.com/50x50.png?text=Avatar",
    coins: 100,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://via.placeholder.com/50x50.png?text=Avatar",
    coins: 200,
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "https://via.placeholder.com/50x50.png?text=Avatar",
    coins: 300,
  },
];


const AllThree = () => {
  return (
    <Stack sx={{ p: "32px", overflow: "auto" }} gap={2} direction="row">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Recent Winners
        </Typography>
        <Box
          style={{
            height: "70vh",
            width: "100%",
            backgroundColor: "rgb(0,0,0,0.5)",
            color: "white",
            border: "2px solid red",
          }}
          m="50px auto auto auto"
        >
          <DataGrid rows={rows} columns={columns} paginationMode="pagination" />
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Top Performers
        </Typography>
        <Box
          style={{
            height: "70vh",
            width: "100%",
            backgroundColor: "rgb(0,0,0,0.5)",
            color: "white",
            border: "2px solid red",
          }}
          m="50px auto auto auto"
        >
          <DataGrid rows={rows} columns={columns} paginationMode="pagination" />
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          History
        </Typography>
        <Box
          style={{
            height: "70vh",
            width: "100%",
            backgroundColor: "rgb(0,0,0,0.5)",
            color: "white",
            border: "2px solid red",
          }}
          m="50px auto auto auto"
        >
          <DataGrid rows={rows} columns={columns} paginationMode="pagination" />
        </Box>
      </div>
    </Stack>
  );
};

export default AllThree;
