import { render, cleanup } from '@testing-library/react'
import Navbar from '../Navbar'
afterEach(cleanup)

test('Navbar must have Navbar brand(BT-news) and link of the pages(tech and bis)', () => {
  const { getByText } = render(<Navbar></Navbar>)
  expect(getByText('BT-News')).toBeInTheDocument()
  expect(getByText('Tech')).toBeInTheDocument()
  expect(getByText('Business')).toBeInTheDocument()
})
