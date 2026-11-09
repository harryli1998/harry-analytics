const topic = document.getElementById('topic');
const link = document.getElementById('email-link');
function updateInquiry() {
  const subject = 'Analytics pilot inquiry — ' + topic.value;
  const body = 'Hi Harry,\n\nI’d like to discuss ' + topic.value.toLowerCase() + ' for my business.\n\nBusiness website: \nQuestion I’m trying to answer: \n\n';
  link.href = 'mailto:lihanyuan1998@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
topic.addEventListener('change', updateInquiry);
updateInquiry();
