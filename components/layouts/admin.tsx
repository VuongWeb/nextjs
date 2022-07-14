import React from 'react'
import { LayoutProps } from '../../models/layout'

const AdminLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <h2>admin</h2>
            {children}
        </div>
    )
}

export default AdminLayout