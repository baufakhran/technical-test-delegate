import CardNews from '../CardNews'
import { render, cleanup } from '@testing-library/react'
afterEach(cleanup)

test('Link changes the class when hovered', () => {
  const { getByText } = render(
    <CardNews
      title={'ini title'}
      urlImage={
        'https://cdn03.indozone.id/content/2020/04/09/Z8sgDm/t_5e8ea59b1ba29_700.jpg'
      }
      description={'ini desc'}
    ></CardNews>
  )
  expect(getByText('ini title')).toBeInTheDocument()
  expect(getByText('ini desc')).toBeInTheDocument()
})
