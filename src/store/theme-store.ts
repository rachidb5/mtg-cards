import { create } from 'zustand'

const useTheme = create((set) => ({
  Theme: 'light',
  toggleTheme: () => set((state: { Theme: string }) => ({ Theme: state.Theme === 'light' ? 'dark' : 'light' })),
}))

export default useTheme;