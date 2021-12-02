import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';

interface LoginProps {
  username: string;
  password: string;
  passwordError: boolean;
  showPassword: boolean;
  authenticationFailed: boolean;
  onUsernameChange(event: any): void;
  onPasswordChange(event: any): void;
  onPasswordVisibleChange(event: any): void;
  onSubmit(event: any): void;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm: React.FC<LoginProps> = ({
  username,
  password,
  passwordError,
  showPassword,
  authenticationFailed = false,
  onUsernameChange,
  onPasswordChange,
  onPasswordVisibleChange,
  onSubmit,
}: LoginProps) => {

  const classes = useStyles();

  return (
    <Container id="container-login" component="main" maxWidth="xs">
      <CssBaseline />
      <div id="container-login-box" className={classes.paper}>
        <Avatar id="avatar-login" className={classes.avatar}>
          <LockOutlinedIcon id="icon-login" style={{ marginLeft: "auto", marginRight: "auto" }} />
        </Avatar>
        <Typography id="sig-in-typography" component="h1" variant="h5">
          Sign in
        </Typography>
        <Grid id="grid-container-login-form" container>
          <Grid id="grid-item-username" item xs={12} sm={12} md={12} lg={6} xl={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={onUsernameChange}
              error={authenticationFailed}
            />
          </Grid>
          <Grid id="grid-item-password" item xs={12} sm={12} md={12} lg={6} xl={4}>
            <FormControl id="form-control-password" variant="outlined" style={{ width: "-webkit-fill-available" }}>
              <InputLabel id="input-label-password" htmlFor="password" error={passwordError}>Password * </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={onPasswordChange}
                autoComplete="off"
                required
                error={authenticationFailed}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={onPasswordVisibleChange}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {
                authenticationFailed ?
                  <FormHelperText error={authenticationFailed} id="helper-text-incorrect-password">Incorrect Credentials.</FormHelperText> : null

              }
            </FormControl>
          </Grid>
          <Grid id="grid-item-button" item style={{ flexGrow: 1 }}>
            <Button
              id="button-sign-in"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default LoginForm;
