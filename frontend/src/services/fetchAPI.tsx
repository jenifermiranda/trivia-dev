export const fetchQuestionsAPI = async () => {
  const response = await fetch('https://opentdb.com/api.php?amount=6');
  const data = await response.json();
  return data;
};
