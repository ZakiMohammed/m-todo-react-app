const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const getAll = async () => {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
}