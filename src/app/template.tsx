import React from 'react'

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <h3>我是 template</h3>
        {children}
    </div>
  )
}
