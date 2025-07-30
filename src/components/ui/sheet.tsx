'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 bg-black/30 z-50", className)}
    {...props}
  />
))
SheetOverlay.displayName = 'SheetOverlay'

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: 'top' | 'bottom' | 'left' | 'right'
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, side = 'right', ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 bg-white dark:bg-gray-900 transition-all ease-in-out duration-300',
        side === 'left' && 'left-0 top-0 h-full w-64',
        side === 'right' && 'right-0 top-0 h-full w-64',
        side === 'top' && 'top-0 left-0 w-full h-64',
        side === 'bottom' && 'bottom-0 left-0 w-full h-64',
        className
      )}
      {...props}
    />
  </SheetPortal>
))
SheetContent.displayName = 'SheetContent'

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetOverlay,
}
