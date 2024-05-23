import LoginDialog from "./account/LoginDilog";
import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
 
const Header =styled(AppBar)`

 height: 200px;

 background-color: #00bfa5;
 box-shadow: none;

`;
const Component = styled(Box)`

  height: 100vh;

  background: #dcdcdc;

`;
const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
