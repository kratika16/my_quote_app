import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/Login";
import QuoteList from "./components/QuoteList";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
} from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import { logout } from "./features/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Provider store={store}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item xs={3}>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Quote App
              </Typography>
            </Grid>

            {isAuthenticated && (
              <Grid item xs={9} >
                <Grid container justifyContent="end">
                  <Grid item xs={8} sm={10} display="flex" justifyContent="end">
                    <Typography variant="h6">
                      Welcome, {user.username}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={2} display="flex" justifyContent="end">
                    <Button color="inherit" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Container>{!isAuthenticated ? <Login /> : <QuoteList />}</Container>
    </Provider>
  );
};

export default App;
