function toggledropdown() {
    const content = document.getElementById('content');
    content.classList.toggle('show');

    const button = document.querySelector('.dropdown-btn');
    button.textContent = content.classList.contains('show') ? 'Hide Projects' : 'Featured Projects';
}