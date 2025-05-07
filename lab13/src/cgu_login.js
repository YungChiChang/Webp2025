import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';

const theme = createTheme();

const RootGrid = styled(Grid)(({ theme }) => ({
  height: '100vh',
}));

const ImageSection = styled(Grid)(({ theme }) => ({
  backgroundImage:
    'url(https://obs.line-scdn.net/0haTI-X-8JPnt0VCutK6JBLEwCMgpHMiRyVmUjGgFTYBhZeHEsHGdtGAYBN1cKZnwqVDsjGwRXN0xYMXBvSA/w644)',
  backgroundRepeat: 'no-repeat',
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}));

const StyledPaper = styled('div')(({ theme }) => ({
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: theme.spacing(4),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        I_LOVE_CSIE@CGU
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function CGU_Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <RootGrid container component="main">
        <CssBaseline />
        <ImageSection item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <StyledPaper>
            <StyledAvatar>
              <LockOutlinedIcon />
            </StyledAvatar>
            <Typography component="h1" variant="h5">
              Sign in CSIE@CGU
            </Typography>
            <StyledForm noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <StyledButton type="submit" fullWidth variant="contained">
                Sign In
              </StyledButton>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </StyledForm>
          </StyledPaper>
        </Grid>
      </RootGrid>
    </ThemeProvider>
  );
}
