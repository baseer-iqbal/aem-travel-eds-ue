export default function decorate(block) {
  // Each row in the table = one card
  const rows = [...block.children];

  rows.forEach(row => {
    row.className = 'card';

    const cells = [...row.children];

    // Cell 0 = destination name
    if (cells[0]) {
      cells[0].className = 'card-title';
    }

    // Cell 1 = description
    if (cells[1]) {
      cells[1].className = 'card-description';
    }

    // Cell 2 = link — wrap whole card as anchor
    if (cells[2]) {
      const link = cells[2].querySelector('a')
        || Object.assign(document.createElement('a'), {
            href: cells[2].textContent.trim()
          });
      link.className = 'card-link';
      link.setAttribute('aria-label', `View ${cells[0]?.textContent}`);

      // Make whole card clickable
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        window.location.href = link.href;
      });

      // Hide the raw link cell
      cells[2].style.display = 'none';
    }
  });
}
