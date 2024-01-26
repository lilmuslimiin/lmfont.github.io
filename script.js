// script.js
document.getElementById('btnSearch').addEventListener('click', function() {
    // Jalankan perintah pencarian teks (Ctrl + F)
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'f', ctrlKey: true }));
});
