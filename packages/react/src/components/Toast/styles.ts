import * as ToastElement from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(ToastElement.Root, {
  padding: '$3 $4',
  background: '$gray800',
  fontFamily: '$default',
  borderRadius: '$sm',
  border: '$gray600 1px solid',
  position: 'relative',
  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(ToastElement.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(ToastElement.Description, {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  marginTop: '$1',
})

export const ToastClose = styled(ToastElement.Close, {
  color: '$gray200',
  fontSize: '$sm',
  background: 'none',
  position: 'absolute',
  top: '$4',
  right: '$4',
  border: 'none',
  cursor: 'pointer',
})

export const ToastViewport = styled(ToastElement.Viewport, {
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: VIEWPORT_PADDING,
  width: 390,
  maxWidth: '100vh',
  margin: 0,
  listStyle: 'none',
  zIndex: 999999,
  outline: 'none',
})
