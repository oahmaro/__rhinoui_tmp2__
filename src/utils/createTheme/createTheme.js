const createTheme = (modifier) => {
  // The function should have three parts
  // 1. The Theme
  let theme
  // 2. Get The Theme
  const getTheme = () => theme
  // 3. Update The Theme
  const updateTheme = (newTheme) => {
    theme = modifier(theme, newTheme)
  }

  return {
    getTheme,
    updateTheme
  }
}

export default createTheme
