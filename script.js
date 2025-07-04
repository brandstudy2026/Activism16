document.addEventListener('DOMContentLoaded', () => {
  const surveyUrl = 'https://example.com/survey';
  document.getElementById('return-btn').addEventListener('click', () => {
    window.location.href = surveyUrl;
  });
});