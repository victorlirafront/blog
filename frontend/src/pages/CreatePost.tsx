import React from "react";
import Header from "@/components/layout/Header";
import { StyledMainContent } from "./styles/MainContent.styled";

const CreatePost = function () {
  return (
    <React.Fragment>
      <Header />
      <StyledMainContent>
        <h1>CreatePost</h1>
      </StyledMainContent>
    </React.Fragment>
  );
};

export default CreatePost;
