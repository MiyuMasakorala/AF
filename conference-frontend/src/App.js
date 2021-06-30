import React from "react";
import "./index.css"
import PostDetails from "./components/PostDetails";
import { Provider } from 'react-redux';
import { store } from './actions/store';
import {AppBar, Container, Typography} from '@material-ui/core';
import ButterToast,{POS_RIGHT,POS_TOP} from "butter-toast";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        
        <AppBar position="center" color="inherit">
          <Typography
            variant="h3"
            align="center"
          >
            Conference Details !!!
          </Typography>
          
          <img
            src="https://thinkcheckattend.org/wp-content/uploads/2017/08/How-to-get-the-most-out-of-conferences-2.jpg"
            style={{ width: "100%", height: "10%", objectFit: "cover" }}
          />
             
        </AppBar>
        <PostDetails />
        <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
      </Container>
    </Provider>
  );
}

export default App;
