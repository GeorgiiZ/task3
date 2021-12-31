const url: string = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodosByCount = async (count: number) => {
  const todoList: Todo[] = [];
  const res = await fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < count; i++) {
        todoList.push(data[i]);        
      }      
    });
  return todoList;
}

getTodosByCount(10).then(data => console.log(data));
