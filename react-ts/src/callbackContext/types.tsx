interface Theme {
  color: string,
  background: string,
}

type AvailableThemes = 'light' | 'dark';

const themes: Record<AvailableThemes, Theme> = {
  light: {
    color: '#000000',
    background: '#eeeeee'
  },
  dark: {
    color: '#ffffff',
    background: '#222222'
  }
}

export default themes;
