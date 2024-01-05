export const fetchQuestionsAPI = async () => {
  const response = await fetch('http://localhost:3001/questions');
  const data = await response.json();
  return data;
};
