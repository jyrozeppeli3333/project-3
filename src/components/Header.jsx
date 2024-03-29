import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Form, Link, NavLink } from "react-router-dom";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import ModalRegister from "./ModalRegister";
import { setUser } from "../store/Slices/userSlice";
import Register from "./Register";
import Login from "./Login";
import { useAuth } from "./hooks/Auth";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

const Header = ({ user }) => {
  // const { user } = props;
  const { isAuth, email } = useAuth();
  useEffect(() => {
    console.log(user, "my user");
  }, [email, user]);

  const dispatch = useDispatch();
  console.log(email);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box maxW={1536} as="header">
      <Box flex justifyContent="space-between">
        <Flex
          borderBottom="1px solid #f2f2f2"
          gap="7px"
          alignItems="center"
          py="20px"
          pl="50px"
          justifyContent="space-between"
          pr="50px"
        >
          <Flex gap="15px">
            <Link to="/aboutus">О нас</Link>
            {/* <Link to="/contacts">Контакты</Link> */}
            {user.email ? <Link to="/admin">Админ Панель</Link> : null}
          </Flex>
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            w="fit-content"
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Flex>
      </Box>
      <Box pl="50px">
        <Box flex flexDirection="row" justifyContent="space-between">
          <Flex
            gap="20px"
            alignItems="center"
            fontSize="26px"
            fontWeight="600"
            justifyContent="space-between"
            margin="0 auto"
          >
            <Flex gap="20px" display={{ base: "none", md: "flex" }}>
              <Link to="/">
                <Image w="70px" src="/assets/logo.png" alt="logo" />
              </Link>
              <Flex flexDir="column">
                <Text as="span" fontWeight="500" fontSize="17px">
                  Доставка пиццы Бишкек
                </Text>
                <Text as="span" fontWeight="300" fontSize="15px">
                  37 мин 4.77
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Text as="span" fontWeight="400" fontSize="17px">
                  0 (551) 550-550
                </Text>
                <Text
                  as="span"
                  fontWeight="300"
                  fontSize="15px"
                  color="rgb(153, 153, 153)"
                >
                  Звонок по телефону
                </Text>
              </Flex>
            </Flex>

            <Box
              flex
              flexDirection="row"
              gap="4px"
              justifyContent="space-between"
            >
              <Flex
                alignItems="center"
                flexDirection="row"
                gap="15px"
                justifyContent="space-between"
                pr="50px"
              >
                <Flex gap="20px">
                  <Box>
                    {/* <NavLink to="dodocoins">
                      <Text as="span" fontWeight="400" fontSize="16px">
                        Огогокоины
                      </Text>
                    </NavLink> */}
                  </Box>
                  <Box>
                    {user.email ? (
                      <NavLink to="/cabinet">
                        <Text as="span" fontWeight="400" fontSize="16px">
                          Кабинет
                        </Text>
                      </NavLink>
                    ) : (
                      <Flex gap="20px">
                        <Login />
                        <Register />
                      </Flex>
                    )}
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
