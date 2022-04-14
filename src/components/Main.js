import React from 'react';


export default function Main({children, className, ...rest}) {
  return (
    <Main className='h-full'>
       {children}
    </Main>
  )
}
