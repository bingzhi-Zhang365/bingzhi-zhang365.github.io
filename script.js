const controls = document.querySelector('.filters');
const buttons = [...controls.querySelectorAll('button')];
const papers = [...document.querySelectorAll('.publication')];
const status = document.querySelector('#pub-status');
controls.querySelector('[data-filter="all"]').textContent = `All (${papers.length})`;

function filterPapers(filter) {
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
  }
  for (const paper of papers) {
    paper.hidden = !(filter === 'all' || (filter === 'selected' && paper.dataset.selected === 'true'));
  }
  status.textContent = `${papers.filter(paper => !paper.hidden).length} publications shown.`;
}

controls.hidden = false;
for (const button of buttons) {
  button.addEventListener('click', () => filterPapers(button.dataset.filter));
}

// A deep link must remain visible even when it points outside the selected list.
function revealLinkedPaper() {
  const paper = papers.find(item => `#${item.id}` === window.location.hash);
  if (paper?.hidden) filterPapers('all');
  if (paper) paper.scrollIntoView({block: 'start'});
}
filterPapers('selected');
revealLinkedPaper();
window.addEventListener('hashchange', revealLinkedPaper);

// Assemble the address only on interaction to reduce simple address harvesting.
for (const button of document.querySelectorAll('.email-action')) {
  button.hidden = false;
  button.addEventListener('click', () => {
    const mailbox = ['bingzhi', 'zhang', '95'].join('');
    const domain = ['gmail', 'com'].join('.');
    window.location.href = `mailto:${mailbox}@${domain}`;
  });
}
