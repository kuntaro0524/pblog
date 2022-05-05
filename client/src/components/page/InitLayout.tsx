import { Heading } from "@chakra-ui/react";
import { useThreads } from "../hooks/useThreads";
import { ThreadCard } from "../organism/ThreadCard";

export const InitLayout = () => {
  const { threadArray, setThreadArray } = useThreads();

  return (
    <>
      <Heading colorScheme={"teal"} as="h1" size="4xl" isTruncated>
        This is a layout page.
      </Heading>
      {threadArray.map((athread, index) => (
        <ThreadCard threadInfo={athread} />
      ))}
    </>
  );
};
