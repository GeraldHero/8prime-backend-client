import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';

// Redux Subscribers action.
import { getSubscribersList } from '../../../reduxConfig/action/subscriberAction';

// local file
import Dialog from './dialog/Dialog';
import Snackbar from './snackbar/Snackbar';
import Modal from './modal/Modal';
const DataTable = () => {
  const [query, setQuery] = useState({
    page: 0,
    limit: 10,
    openDialog: false,
    deleteItems: '',
    snackbarOpen: false,
    modalOpen: false,
    message: '',
  });

  const dispatch = useDispatch();
  const subscribersReduxData = useSelector((state) => state.subscribers);
  const { page, limit, openDialog } = query;

  // If page or limit has change value it will call the dispatch from redux.
  useEffect(() => {
    dispatch(getSubscribersList(page, limit));
  }, [dispatch, page, limit, openDialog]);

  // Destructuring the redux subscribers data.
  const { subscriberList, totalPage } = subscribersReduxData.subscribers;

  // It will listen to the DataGrid onChange value
  const queryHandler = (name, value) => {
    if (!subscribersReduxData.loading) {
      return setQuery({ ...query, [name]: value });
    }
  };

  // Header or the Columns settings in the DataGrid properties.
  const columns = [
    { field: 'id', headerName: 'ID', width: 200, hide: true },
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
      headerAlign: 'right',
      align: 'right',
      width: 200,
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
          return setQuery({
            ...query,
            openDialog: true,
            deleteItems: params.row,
          });
          //alert(JSON.stringify(params.row, null, 4))
        };
        const onClickMessage = async () => {
          return setQuery({
            ...query,
            modalOpen: true,
            message: params.row.messages,
          });

          // alert(JSON.stringify(params.row.messages, null, 4));
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

  // The "rows" data in the DataGrid rows. Conditional statement if subscribersReduxData has value. The other hand is an empty array.
  // The key need to be exact in the fields column value.
  const rows = subscriberList
    ? subscriberList.map((item) => {
        return {
          id: item._id,
          name: item.name,
          email: item.email,
          phone: item.phone,
          messages: item.messages,
        };
      })
    : [];

  // This will be populate on the DataGrid properties
  // totalPage is from subscribersReduxData and need to be load. Set default to 0 by using logical "OR" operator.
  const dataGridSettings = {
    page,
    disableSelectionOnClick: true,
    paginationMode: 'server',
    rows,
    rowCount: totalPage || 0,
    columns,
    pageSize: limit,
    rowsPerPage: limit,
    rowsPerPageOptions: [5, 10, 20],
  };

  return (
    <div style={{ height: 650, width: 1500 }}>
      <DataGrid
        onPageChange={(pageNumber) => queryHandler('page', pageNumber)}
        {...dataGridSettings}
        onPageSizeChange={(a) => queryHandler('limit', a)}
        components={{
          Toolbar: GridToolbar,
        }}
        loading={subscribersReduxData.loading}
      />
      <Modal query={query} setQuery={setQuery} />
      <Dialog query={query} setQuery={setQuery} />
      <Snackbar open={query.snackbarOpen} queryHandler={queryHandler} />
    </div>
  );
};

export default DataTable;
