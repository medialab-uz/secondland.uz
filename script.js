// All Telegram calls point to the channel invite link supplied by the owner.
document.querySelectorAll('a[href^="https://t.me/"]').forEach(link => {
  link.addEventListener('click', () => {
    // Intentionally no tracking or personal data collection.
  });
});
