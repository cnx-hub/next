import React from 'react'

export default function layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
        <h2>我是 dashBoard layout</h2>
        {children}
    </div>
  )
}
