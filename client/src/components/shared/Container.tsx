import React from 'react'
import { cn } from '@/utils'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
   return (
      <div className={cn('px-4 md:px-6 lg:px-8 w-11/12 mx-auto py-3 md:py-6', className)}>{children}</div>
   )
}

export default Container