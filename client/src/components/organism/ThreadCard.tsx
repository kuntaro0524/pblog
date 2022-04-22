import { Box, FormControl, Heading } from "@chakra-ui/react";
import { log } from "console";
import { MouseEventHandler } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

type post_definition = {
  date: string;
  comment: string;
  postby: string;
};

type Props = {
  threadInfo: {
    thread_id: string;
    thread_title: string;
    thread_master: string;
    posts: post_definition[];
  };
};

export const ThreadCard = (props: Props) => {
  const { threadInfo } = props;

  const navigate = useNavigate();

  const onClickBox = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(threadInfo.thread_id);
    navigate("/detail", { state: { posts: threadInfo.posts } });
  };

  return (
    <>
      <FormControl>
        <Box
          id={threadInfo.thread_id}
          w={500}
          h={150}
          background={"lightblue"}
          borderRadius={20}
          onClick={onClickBox}
          m={5}
        >
          <Heading borderRadius={25} background={"lightblue"}>
            {threadInfo.thread_title}
          </Heading>
          <Box textShadow={"0 0 20px blue"}>
            ポスト数 {threadInfo.posts.length}
          </Box>
          <Box textShadow={"0 0 20px red"}> 添付ファイル 2個 </Box>
        </Box>
      </FormControl>
    </>
  );
};
