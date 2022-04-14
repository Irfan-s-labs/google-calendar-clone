import React from 'react'

export default function Container({children, className, ...rest}) {
  return (
    <div className={`w-11/12 mx-auto ${className}`} {...rest}>
        {children}
    </div>
  )
}
