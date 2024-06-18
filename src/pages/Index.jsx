import { useState } from "react";
import { Container, Heading, Input, Button, VStack, HStack, Text, Box } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack w="100%">
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTodo} leftIcon={<FaPlus />}>
            Add
          </Button>
        </HStack>
        <VStack w="100%" spacing={2} align="stretch">
          {todos.map((todo, index) => (
            <HStack key={index} justify="space-between" p={2} borderWidth="1px" borderRadius="md">
              <Text>{todo}</Text>
              <Button colorScheme="red" size="sm" onClick={() => deleteTodo(index)} leftIcon={<FaTrash />}>
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;