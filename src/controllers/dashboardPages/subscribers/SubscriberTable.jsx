import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'phone',
    headerName: 'Phone Number',
    type: 'number',
    width: 200,
  },

  {
    field: 'messages',
    headerName: 'Message',
    type: 'number',
    hide: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 250,
    headerAlign: 'right',
    align: 'right',
    renderCell: (params) => {
      const onClickDelete = async () => {
        return alert(JSON.stringify(params.row, null, 4));
      };
      const onClickMessage = async () => {
        return alert(JSON.stringify(params.row.messages, null, 4));
        //return (window.location.href = '/update');
      };

      return (
        <div>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon color='error' />
          </IconButton>
          <IconButton color='primary' onClick={onClickMessage}>
            <Badge badgeContent={params.row.messages.length} color='error'>
              <MailIcon />
            </Badge>
          </IconButton>
        </div>
      );
    },
  },
];

export default function DataTable({ subscribers, totalPage, page, setPage }) {
  const rows = subscribers.map((item, idx) => {
    return {
      id: idx,
      name: item.name,
      email: item.email,
      phone: item.phone,
      messages: item.messages,
    };
  });

  return (
    <div style={{ height: 650, width: 1000 }}>
      <DataGrid
      page={10}
        onPageChange={() => setPage(page + 1)}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
