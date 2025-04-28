const bubbleContainer = document.getElementById("bubbles");

for (let i = 0; i < 50; i++) {
  const bubble = document.createElement("span");

  const size = Math.random() * 40 + 10; // 10px to 50px
  const left = Math.random() * 100;     // 0% to 100%
  const duration = Math.random() * 5 + 4; // 4s to 9s
  const delay = Math.random() * -10;    // negative delay for staggered start

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;

  bubble.classList.add('bubble'); // Add a class for styling if needed
  bubbleContainer.appendChild(bubble);
}