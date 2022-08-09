import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reduxConfig/action/userAction';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Grid, CircularProgress } from '@mui/material';
import Stack from '@mui/material/Stack';
import DynamicTextField from '../components/Login/DynamicTextField';
import MyMessage from '../components/myMessage/MyMessage';

import Logo from '../assets/image/logo-img.jpg';

const MyLogin = () => {
  const [values, setValues] = useState({
    username: 'geraldAdmin',
    password: 'admin123',
  });
  // Redux Tool
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  let navigate = useNavigate();

  useEffect(() => {
    //userInfo has token reroute to dashboard
    if (userInfo?.token) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const { username, password } = values;
  const formHundle = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const onChangeHundler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      name: 'username',
      label: 'Enter you Username',
      helperText: 'Should be 3-16 character with no special character',
      type: 'text',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'password',
      label: 'Enter you Password',
      helperText:
        'Minimum eight characters, least one capital and one lower case letter, one number and one special character',
      type: 'password',
      required: true,
    },
  ];
  // Password validation
  // pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
  // This regex will enforce these rules:
  // At least one upper case English letter, (?=.*?[A-Z])
  // At least one lower case English letter, (?=.*?[a-z])
  // At least one digit, (?=.*?[0-9])
  // At least one special character, (?=.*?[#?!@$%^&*-])
  // Minimum eight in length .{8,} (with the anchors)

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ overflow: 'hidden', height: '87.8vh', width: '100%' }}
      >
        <Box
          component='img'
          sx={{ height: '87.8vh', width: '100%' }}
          alt='logo-img'
          src={Logo}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ padding: 20, position: 'absolute', width: '30%', right: 0 }}>
          {error?.errors
            ? error?.errors.map((item, index) => (
                <MyMessage key={index} variant='error'>
                  {item.msg}
                </MyMessage>
              ))
            : error && <MyMessage variant='error'>{error}</MyMessage>}
        </Box>

        <Box
          component='form'
          onSubmit={formHundle}
          sx={{
            marginTop: { md: '20%' },
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
        >
          {inputs.map((input, idx) => (
            <DynamicTextField
              key={idx}
              {...input}
              value={values[input.name]}
              onChangeHundler={onChangeHundler}
            />
          ))}
          <Button sx={{ width: '200px', mx: 'auto' }} type='submit'>
            {loading ? <CircularProgress size='20px' /> : <span>Submit</span>}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyLogin;
