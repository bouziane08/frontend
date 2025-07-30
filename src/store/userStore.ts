'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Role = 'admin' | 'moderator' | 'user'

type User = {
  id: string
  name: string
  email: string
  avatar: string
  role: Role
}

type UserState = {
  user: User | null
  isLoggedIn: boolean
  login: (user: User) => void
  logout: () => void
  hasRole: (role: Role) => boolean
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      login: (user) => set({ user, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false }),
      hasRole: (role) => get().user?.role === role,
    }),
    {
      name: 'user-storage', // مفتاح التخزين في localStorage
    }
  )
)
