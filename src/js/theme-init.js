(function () {
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemPreference;
    document.documentElement.setAttribute('data-theme', currentTheme);
})();
