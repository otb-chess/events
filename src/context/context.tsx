import React from "react"
import { CognitoUser } from "@aws-amplify/auth"

import { useAuth } from "./hooks"
import { SignInInput } from "./types"

interface AuthState {
  user: CognitoUser | null
  signIn(input : SignInInput): Promise<void>
  signOut(): Promise<void>
  deleteUser(): Promise<void>
}

export const AuthContext = React.createContext<AuthState>({
  user: null,
  signIn: async (input) => {},
  signOut: async () => {},
  deleteUser: async () => {},
})

interface AuthProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children } : AuthProps) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}