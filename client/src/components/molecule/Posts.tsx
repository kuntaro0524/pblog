import { Box, Grid, GridItem, Heading, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Post } from "./Post";

type post_definition = {
  date: string;
  comment: string;
  postby: string;
};

interface PostContents {
  posts: post_definition[];
}

export const Posts = () => {
  const location = useLocation();

  let { posts } = location.state as PostContents;

  console.log(posts.length);
  console.log(posts);

  return (
    <>
      <Heading> 再生資源回収の件 </Heading>
      {posts.map((component, index) => (
        // <Box m={30} h={400} w={800} key={index}>
        <Post
          date={component.date}
          comment={component.comment}
          postby={component.postby}
        />
        // </Box>;
      ))}
    </>
  );
};
