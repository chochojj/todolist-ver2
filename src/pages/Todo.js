import TodoList from "../components/todo/TodoList";
import Todo from "../components/todo/Todo";
import AddForm from "../components/todo/AddForm";
import styled from "styled-components";
import { theme } from "../style/theme";

const TodoContain = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${({ theme }) => theme.containerBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color};
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

function TodoPage() {
  return (
    <TodoContain>
      <TodoList>
        <AddForm />
        <Todo />
      </TodoList>
    </TodoContain>
  );
}

export default TodoPage;
