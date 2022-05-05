import { filter } from "@chakra-ui/react";
import { useContext } from "react";
import { DiagnosticCategory } from "typescript";
import { AllPostContext } from "../provider/PostProvider";

export const usePosts = () => {
  const { postArray, setPostArray } = useContext(AllPostContext);
  return { postArray, setPostArray };
};
