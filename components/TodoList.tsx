import React from "react";
import {
  Checkbox,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export const TodoList = ({
  todos,
  setTodos,
}: {
  todos: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  setTodos: Function;
}) => {
  const handleDelete = (id: number) => {
    setTodos((prevTodos: any) =>
      prevTodos.filter((todo: any) => todo.id !== id)
    );
  };

  const handleComplete = (id: number) => {
    setTodos((prevTodos: any) =>
      prevTodos.map((todo: any) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if (!todos.length) return <Text>No todos yet</Text>;

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="grey.100"
      borderWidth="2px"
      p={4}
      borderRadius="lg"
      w="full"
      maxW={{ base: "full", md: "md" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Checkbox
            isChecked={todo.completed}
            onChange={() => handleComplete(todo.id)}
          />
          <Text textDecoration={todo.completed ? "line-through" : "none"}>
            {todo.title}
          </Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound
            aria-label="delete-todo"
            onClick={() => handleDelete(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};
