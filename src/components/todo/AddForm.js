import React, { useState, useRef, useEffect, memo } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

const StyledAddForm = styled.div`
  button::selection {
    background: none;
  }
  input::selection {
    background: none;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 275px;
    height: 32px;
    background-color: ${({ theme }) => theme.orangeInput};
    border: none;
    padding: 0 10px;
    border-radius: 5px 0 0 5px;
  }
  input::placeholder {
    color: ${({ theme }) => theme.color};
  }

  button {
    width: 65px;
    height: 32px;
    border: none;
    background-color: ${({ theme }) => theme.greenButton};
    font-weight: bold;
    font-family: "NanumRg";
    border-radius: 0 5px 5px 0;
  }
  button:hover {
    cursor: pointer;
  }
`;

const AddForm = memo(({ addTodo }) => {
  const [value, setValue] = useState("");
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    setValue("");
  }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledAddForm>
      <form className="add-form">
        <input
          ref={input}
          value={value}
          onChange={onChangeInput}
          placeholder={`오늘의 할 일 입력하기 !`}
        />
        <button type="submit" onClick={addTodo(value)}>
          추가
        </button>
      </form>
    </StyledAddForm>
  );
});

export default AddForm;
