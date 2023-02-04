(() => {
    const backButton = document.querySelector('.btn-back');

    if (backButton) {
        backButton.addEventListener('click', () => {
            if (document.referrer.includes(window.location.hostname)) {
                history.back();
            } else {
                window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
            }
        });
    }
})();
