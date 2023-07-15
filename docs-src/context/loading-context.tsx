import React, { createContext, useContext, useState } from 'react'

const LoadingContext = createContext(
  {} as {
    loading: boolean | undefined
    setLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>
  },
)

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean | undefined>()

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
