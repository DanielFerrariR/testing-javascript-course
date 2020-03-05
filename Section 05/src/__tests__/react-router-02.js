import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Main } from '../main'

test('main renders about and home and I can navigate to those pages', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const { getByRole, getByText } = render(
    <Router history={history}>
      <Main />
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent(/home/i)
  fireEvent.click(getByText(/about/i))
  expect(getByRole('heading')).toHaveTextContent(/about/i)
})

test('lading on bad page shows no match component', () => {
  const history = createMemoryHistory({
    initialEntries: ['/something-that-does-not-match']
  })
  const { getByRole } = render(
    <Router history={history}>
      <Main />
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent(/404/i)
})
