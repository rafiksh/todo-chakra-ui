import { Button, HStack, Input } from "@chakra-ui/react";

export const AddTodo = ({ setTodos }: { setTodos: Function }) => {
  const hanldeSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      todo: { value: string };
    };

    if (!target.todo.value) return;

    setTodos((prevTodos: any) => [
      ...prevTodos,
      {
        id: prevTodos.at(-1)?.id + 1 || 1,
        title: target.todo.value,
        completed: false,
      },
    ]);

    target.todo.value = "";
  };

  return (
    <form onSubmit={hanldeSubmit}>
      <HStack>
        <Input
          name="todo"
          variant={"filled"}
          placeholder="Write something to do"
        />
        <Button type="submit" px="8" colorScheme={"purple"}>
          Add
        </Button>
      </HStack>
    </form>
  );
};
