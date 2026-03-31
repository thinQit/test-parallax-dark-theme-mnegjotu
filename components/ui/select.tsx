'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn('w-full rounded-md border border-[#1a1a1a] bg-[#09090b] px-3 py-2 text-sm text-[#fafafa] outline-none focus:ring-2 focus:ring-[#00F5D4]', className)}
      {...props}
    >
      {children}
    </select>
  )
}
