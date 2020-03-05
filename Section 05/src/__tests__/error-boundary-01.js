import React from 'react'
import { render } from '@testing-library/react'
import { reportError as mockReportError } from '../api'
import { ErrorBoundary } from '../error-boundary'

jest.mock('../api')

afterEach(() => {
  jest.clearAllMocks()
})

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('💣')
  } else {
    return null
  }
}

test('calls reportError and renders that there was a problem', () => {
  mockReportError.mockResolvedValueOnce({ success: true })

  const { rerender } = render(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>
  )

  rerender(
    <ErrorBoundary>
      <Bomb shouldThrow={true} />
    </ErrorBoundary>
  )

  const error = expect.any(Error)
  const info = { componentStack: expect.stringContaining('Bomb') }
  expect(mockReportError).toHaveBeenCalledWith(error, info)
})
