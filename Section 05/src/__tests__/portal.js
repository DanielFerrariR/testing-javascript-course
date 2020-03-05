import React from 'react'
import { render, within } from '@testing-library/react'
import { Modal } from '../modal'

// test('modal shows the children', () => {
//   const { getByTestId } = render(
//     <>
//       <div data-testid="foo" />
//       <Modal>
//         <div data-testid="test" />
//       </Modal>
//     </>,
//     { baseElement: document.getElementById('modal-root') }
//   )
//   queries.getByTestId(document.body, 'foo')
//   expect(getByTestId('test')).toBeInTheDocument()
// })

test('modal shows the children', () => {
  render(
    <>
      <div data-testid="foo" />
      <Modal>
        <div data-testid="test" />
      </Modal>
    </>
  )
  const { getByTestId } = within(document.getElementById('modal-root'))
  expect(getByTestId('test')).toBeInTheDocument()
})
