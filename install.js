document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-button').forEach(btn => {
        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.classList.add('copy-button-btn'); // Add this line
        button.style.marginLeft = '0.5em';
        button.style.cursor = 'pointer';
        button.style.fontSize = '1em';
        const code = btn.parentElement;
        if (code && code.tagName.toLowerCase() === 'code') {
            code.appendChild(button);
            btn.remove();
            button.addEventListener('click', () => {
                navigator.clipboard.writeText(code.childNodes[0].textContent.trim());
                button.textContent = 'Copied!';
                setTimeout(() => button.textContent = 'Copy', 1200);
            });
        }
    });
});