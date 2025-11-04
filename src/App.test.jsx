import {describe,it,expect} from "vitest"
import { render, screen } from '@testing-library/react'
import App from './App.jsx'
import '@testing-library/jest-dom/vitest'


describe('App Component', () => {
  it('renders the App component', () => {
    render(<App />)
    expect(screen.getByText(/hi/i)).toBeInTheDocument()
  })
})