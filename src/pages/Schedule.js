import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { theme } from "../style/theme";
import { useEffect } from "react";

const Monthly = styled.div`
  width: 800px;
  height: fit-content;
  padding: 10px 10px 30px 10px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  .react-calendar {
    width: 80%;
    height: 100%;
    margin-top: 20px;
    background-color: transparent;
    border: none;
  }
  .react-calendar__navigation button {
    color: rgba(130, 130, 130, 1);
    font-weight: bold;
    min-width: 44px;
    background: none;
    font-size: 1em;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  /* .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    } */
  .react-calendar__tile {
    height: 70px;
    padding-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${({ theme }) => theme.calenderFocusBackground};
    color: rgba(130, 130, 130, 1);
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: ${({ theme }) => theme.calenderFocusBackground};
    border-radius: 6px;
    font-weight: bold;
    color: ${({ theme }) => theme.calenderFocusText};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.calenderFocusBackground};
    border-radius: 6px;
    font-weight: bold;
    color: ${({ theme }) => theme.calenderFocusText};
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: ${({ theme }) => theme.calenderFocusBackground};
  }
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.calenderFocusBackground};
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.calenderCheckBackground};
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${({ theme }) => theme.calenderRangeBackground};
  }
  .react-calendar__tile--range {
    background:  ${({ theme }) => theme.calenderCheckBackground};
    color: ${({ theme }) => theme.calenderFocusText};
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: background: ${({ theme }) => theme.calenderRangeText};
    color: ${({ theme }) => theme.calenderFocusText};
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: ${({ theme }) => theme.calenderRangeText};
    color: ${({ theme }) => theme.calenderFocusText};
  }

  .mark{
    display: flex;

    div{
      margin: 0 2px;
    }
  }

  .diary {
    height: 7px;
    width: 7px;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    margin-left: 1px;
  }
  .todo {
    height: 7px;
    width: 7px;
    background-color: green;
    border-radius: 50%;
    display: flex;
    margin-left: 1px;
  }
`;

function Schedule() {
  const [value, onChange] = useState(new Date());
  const [diaryDate, setDiaryDate] = useState([]);
  const [todoDate, setTodoDate] = useState([]);

  const [diaries, setDiaries] = useState(() => {
    const storedDiaries = localStorage.getItem("diaries");
    return storedDiaries ? JSON.parse(storedDiaries) : [];
  });
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todoList");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    const diaryDates = diaries.map((el) =>
      moment(el.date, "YYYY. MM. DD.").format("YYYY-MM-DD")
    );
    setDiaryDate(diaryDates);
  }, [diaries]);

  useEffect(() => {
    const todoDates = todos.map((el) =>
      moment(el.date, "YYYY. MM. DD.").format("YYYY-MM-DD")
    );
    setTodoDate(todoDates);
  }, [todos]);

  return (
    <Monthly>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        showNeighboringMonth={false}
        tileContent={({ date, view }) => {
          let diary = [];
          let todo = [];
          if (diaryDate.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            diary.push(<div className="diary"></div>);
          }
          if (todoDate.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            todo.push(<div className="todo"></div>);
          }
          return (
            <>
              <div className="mark">
                {diary}
                {todo}
              </div>
            </>
          );
        }}
      />
    </Monthly>
  );
}

export default Schedule;
