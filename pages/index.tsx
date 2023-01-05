import { useState } from "react";
import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { TodoList } from "../components/TodoList";
import { AddTodo } from "../components/AddTodo";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const { colorMode, setColorMode } = useColorMode();

  return (
    <VStack justify="center">
      <IconButton
        icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
        isRound
        size="lg"
        alignSelf="flex-end"
        aria-label="theme-switch"
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      />
      <Heading
        mb={8}
        fontWeight="extrabold"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        TODO App
      </Heading>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </VStack>
  );
}
