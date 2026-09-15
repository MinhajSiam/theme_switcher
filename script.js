const pullCord = document.getElementById('pullCord');

pullCord.addEventListener('click', () => {
    // ১. টানার অ্যানিমেশন যোগ করা
    pullCord.classList.add('pulling');

    // ২. টান শেষ হলে থিম পরিবর্তন করা ও দড়ি আগের জায়গায় ফেরত নেওয়া
    setTimeout(() => {
        document.body.classList.toggle('dark-mode');
        pullCord.classList.remove('pulling');

        // লোকাল স্টোরেজে ইউজারের পছন্দ সেভ রাখা
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, 180);
});

// পেজ লোড হওয়ার সময় আগের থিম লোড করা
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});