'use client'

import { createContext, useContext } from 'react'

export type Theme = 'default' | 'cyan'

export const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'default',
  toggle: () => {},
})

export const useTheme = () => useContext(ThemeContext)
