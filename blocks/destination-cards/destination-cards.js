export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.className = 'card';
    const cells = [...row.children];

    if (cells[0]) cells[0].className = 'card-title';
    if (cells[1]) cells[1].className = 'card-description';

    if (cells[2]) {
      const rawLink = cells[2].textContent.trim();
      const href = rawLink.startsWith('/')
        ? rawLink
        : cells[2].querySelector('a')?.href || '#';

      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        window.location.href = href;
      });
      cells[2].hidden = true;
    }
  });
}
