import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";

type Props = {
  comment: string;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const ModModal = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { comment, onChangeText } = props;

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Button onClick={onOpen}>ポストを編集する</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ポストを編集しています</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> ポストの内容</FormLabel>
              <Text>
                <Input
                  h={100}
                  w={400}
                  value={comment}
                  onChange={onChangeText}
                  placeholder="First name"
                />
              </Text>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              ポストを変更する
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
