export const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

  console.log('storedDarkMode:', storedDarkMode);
  console.log('prefersDarkMode:', prefersDarkMode);
  return storedDarkMode || prefersDarkMode;
};
