import { Box, Button, Grid, GridItem, Heading, Spacer } from "@chakra-ui/react";
import { elementDragControls } from "framer-motion/types/gestures/drag/VisualElementDragControls";
import { useEffect, useState } from "react";
import { unstable_HistoryRouter, useLocation } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { useThreads } from "../hooks/useThreads";
import { ModModal } from "./ModModal";
import { Post } from "./Post";

export const Posts = () => {
  const location = useLocation();

  const { threadArray, setThreadArray } = useThreads();

  const [selID, setSelID] = useState<{ post_id: string }>(
    location.state as { post_id: string }
  );

  console.log("**************88");
  console.log(threadArray);
  console.log("**************88");

  const targetThread = threadArray.filter((elem) => {
    return elem.thread_id === selID.post_id;
  });

  return (
    <>
      {targetThread[0].posts.map((elem, index) => (
        <p key={index}>{elem.message}</p>
      ))}
      <Box>
        <Button> ポストを新たに投稿する </Button>
      </Box>
    </>
  );
};
