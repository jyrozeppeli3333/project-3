import {
  Box,
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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ModalLogin = ({ handleLogin }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   console.log(handleLogin, "jiro");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleClickForm = () => {
    handleLogin(email, pass);
    onClose();
    setEmail("");
    setPass("");
  };

  return (
    <Box>
      <Button onClick={onOpen}>Войти</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                ref={initialRef}
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Your password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                handleClickForm();
              }}
              colorScheme="orange"
              mr={3}
            >
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalLogin;
