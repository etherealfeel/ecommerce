'use client'

import { createContext, SetStateAction, useContext, useState } from 'react'

interface IContextType {
  categoryFilters: string[]
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
  sortTerm: string
  setSortTerm: React.Dispatch<SetStateAction<string>>
}

export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sortTerm: '',
  setSortTerm: () => '',
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sortTerm, setSortTerm] = useState('-createdAt')
  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        sortTerm,
        setSortTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
