document.addEventListener('DOMContentLoaded', () => {
  const surveyUrl = 'https://unc.az1.qualtrics.com/jfe/form/SV_dpshwYR13RpWonQ';
  document.getElementById('return-btn').addEventListener('click', () => {
    window.location.href = surveyUrl;
  });
});
