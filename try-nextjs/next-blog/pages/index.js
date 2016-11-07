import React from 'react'
import Link from 'next/link'
export default () => {
  return (
    <div>
      <span>Hello</span>
      <div>
        <Link href='/test'>TEST</Link>
      </div>
      <div>
        <Link href='/prefetch'>PREFETCH</Link>
      </div>
      <div>
        <Link href='/css'>CSS</Link>
      </div>
    </div>
  )
};