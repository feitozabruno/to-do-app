"use client";

import { Check, Circle, CirclePlus, ClipboardList, Trash2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./_components/header";

interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    setTasks((tasks) => {
      return [
        ...tasks,
        {
          id: Date.now(),
          description: inputValue.trim(),
          completed: false,
        },
      ];
    });

    setInputValue("");
  };

  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const tasksCompleted = tasks.filter((task) => task.completed !== false);

  return (
    <>
      <Header />

      <main className="px-2 md:px-0">
        <form
          method="post"
          className="mx-auto mt-[-1.8rem] flex h-fit max-w-[46rem] gap-2 text-base-gray-100"
        >
          <input
            type="text"
            name="task"
            id="task"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Adicione uma nova tarefa"
            className="w-full rounded-lg border border-base-gray-700 bg-base-gray-500 p-4 placeholder-base-gray-300"
          />
          <button
            type="submit"
            onClick={handleCreateNewTask}
            disabled={!inputValue.trim()}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-dark p-4 text-sm font-bold hover:bg-blue-base disabled:cursor-not-allowed"
          >
            Criar
            <CirclePlus className="h-4 w-4" />
          </button>
        </form>

        <div className="mx-auto my-16 flex w-full max-w-[46rem] flex-col gap-6">
          <header className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <strong className="text-sm text-blue-base">
                Tarefas criadas
              </strong>
              <span className="rounded-full bg-base-gray-400 px-2 py-1 text-xs font-bold text-base-gray-100">
                {tasks.length}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <strong className="text-sm text-purple-base">Concluídas</strong>
              <span className="rounded-full bg-base-gray-400 px-2 py-1 text-xs font-bold text-base-gray-100">
                {tasksCompleted.length}
              </span>
            </div>
          </header>

          {!tasks.length ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-t border-base-gray-400 py-16 text-base-gray-300">
              <ClipboardList className="h-14 w-14" />
              <p>
                <strong className="block">
                  Você ainda não tem tarefas cadastradas
                </strong>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {tasks.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="flex items-center gap-4 rounded-lg border border-base-gray-400 bg-base-gray-500 p-4"
                  >
                    <button
                      type="button"
                      onClick={() => handleCompleteTask(task.id)}
                      className="h-5 w-5"
                    >
                      {task.completed ? (
                        <Check className="h-5 w-5 rounded-full bg-purple-dark p-1 text-base-gray-100 hover:rounded-full hover:bg-purple-base" />
                      ) : (
                        <Circle className="h-5 w-5 text-blue-base hover:rounded-full hover:bg-blue-dark/20 hover:text-blue-dark" />
                      )}
                    </button>

                    <p
                      className={`w-full text-sm ${task.completed ? "text-base-gray-300 line-through" : "text-base-gray-100"}`}
                    >
                      {task.description}
                    </p>

                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="h-6 w-6"
                    >
                      <Trash2 className="rounded p-1 text-base-gray-300 hover:bg-base-gray-600 hover:text-danger" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
