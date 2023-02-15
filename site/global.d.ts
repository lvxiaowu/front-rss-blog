import React from 'react'

declare module '*.less' {
  const content: any
  export default content
}
declare module '*.css' {
  const content: any
  export default content
}
declare const __ENV__: 'dev' | 'pre' | 'pro' | string
interface Window {}

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean
    global?: boolean
  }
}
