import { useState } from '#app'
import { onMounted } from 'vue'

export function useTheme() {
  const isDark = useState<boolean>('theme-is-dark', () => false)

  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    if (process.client) {
      if (dark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const toggleTheme = () => {
    const nextDark = !isDark.value
    applyTheme(nextDark)
    if (process.client) {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light')
    }
  }

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        applyTheme(savedTheme === 'dark')
      } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        applyTheme(systemPrefersDark)
      }

      // Add a single listener for changes to prefers-color-scheme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          applyTheme(e.matches)
        }
      })
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
