export const fetchQuestions  = () =>
    fetch('http://localhost:3000/assessment.json')
    .then(res =>res.json())
    .catch((err) => err)
