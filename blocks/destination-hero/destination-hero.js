export default function decorate(block) {
  // EDS passes the block element — rows are direct children
  const rows = [...block.children];

  // First row = headline
  const headline = rows[0];
  headline.className = 'hero-headline';

  // Second row = subheadline
  if (rows[1]) {
    rows[1].className = 'hero-subheadline';
  }

  // Wrap everything in a semantic container
  const container = document.createElement('div');
  container.className = 'hero-content';
  rows.forEach(row => container.appendChild(row));
  block.appendChild(container);
}
