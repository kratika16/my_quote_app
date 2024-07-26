import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import QuoteList from './components/QuoteList';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import { logout } from './features/authSlice';

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
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Quote App
          </Typography>
          {isAuthenticated && (
            <>
              <Typography variant="h6" style={{ marginRight: '20px' }}>
                Welcome, {user.username}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        {!isAuthenticated ? <Login /> : <QuoteList />}
      </Container>
    </Provider>
  );
};

export default App;
