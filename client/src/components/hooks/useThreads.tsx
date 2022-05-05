import { filter } from "@chakra-ui/react";
import { useContext } from "react";
import { DiagnosticCategory } from "typescript";
import { AllPostContext } from "../provider/PostProvider";
import { AllThreadContext } from "../provider/ThreadProvider";

export const useThreads = () => {
  const { threadArray, setThreadArray } = useContext(AllThreadContext);
  return { threadArray, setThreadArray };
};
