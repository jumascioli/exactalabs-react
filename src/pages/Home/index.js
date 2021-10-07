import React, { useCallback, useEffect, useState } from "react";

import Input from "../../components/Input";
import List from "../../components/List";
import Pagination from "../../components/Pagination";

import TaskService from "../../services/tasks";

import * as S from "./styles";

const LIMIT = 5;

function Home() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [value, setValue] = useState("");

  const getTasks = useCallback(async () => {
    const { data, total } = await TaskService.getTasks({
      page,
      limit: LIMIT,
    });

    setLastPage(total / LIMIT);
    setTasks(data);
  }, [page]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  function handleChange(event) {
    setValue(event.target.value)
  }

  async function handleClick(event) {
    if (value) {
      await TaskService.saveTask({
        title: value,
      });

      setValue("");

      getTasks();
    }
  }

  async function handleSubmit(event) {
    if (value) {
      await TaskService.saveTask({
        title: value,
      });

      setValue("");

      getTasks();
    }
  }

  async function handleDelete(id) {
    await TaskService.deleteTask(id);

    getTasks();
  }

  return (
    <S.Wrapper>
      <S.Title>Task list</S.Title>

      <S.Form onSubmit={handleSubmit}>  
        <Input
          placeholder="DIGITE SUA TASK"
          value={value}
          onChange={handleChange}      
        />

        <S.Button type="submit">Adicionar task</S.Button>
      </S.Form>
  
      <div>
        {!!tasks.length && <List tasks={tasks} onDelete={handleDelete} />}

        {!tasks.length && "Carregando..."}
      </div>

      <Pagination 
        page={page} 
        onNext={() => {
          if (page < lastPage) {
            setPage(page + 1)
          }
        }}
        onPrev={() => {
          if (page > 1) {
            setPage(page - 1)
          }
        }}
      />
    </S.Wrapper>
  );
}

export default Home;
