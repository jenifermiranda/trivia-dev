export const fetchQuestionsAPI = async () => {
  // https://opentdb.com/api.php?amount=6
  const response = await fetch('http://localhost:3001/questions');
  const data = await response.json();
  return data;
};
