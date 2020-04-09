import { render, cleanup } from '@testing-library/react'
import Navbar from '../Navbar'
afterEach(cleanup)

test('Link changes the class when hovered', () => {
  const { getByText } = render(<Navbar></Navbar>)
  expect(getByText('BT-News')).toBeInTheDocument()
  expect(getByText('Tech')).toBeInTheDocument()
  expect(getByText('Business')).toBeInTheDocument()
})
