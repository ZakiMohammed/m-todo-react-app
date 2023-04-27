const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getAll = async () => {
  const res = await fetch(`${baseUrl}?userId=1`);
  const data = await res.json();
  return data;
}