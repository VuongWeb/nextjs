import React from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const NotFound = ({children}: LayoutProps) => {
  return (
    <div>NotFound {children}</div>
  )
}

export default NotFound