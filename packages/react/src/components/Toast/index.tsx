import * as ToastElement from '@radix-ui/react-toast'
import { ComponentProps } from '../../types/ComponentProps'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastElement.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}

        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastElement.Provider>
  )
}

Toast.displayName = 'Toast'
