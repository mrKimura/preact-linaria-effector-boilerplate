import { h, VNode, Fragment } from 'preact'
import { styled } from 'linaria/react'
import ScrollLock from 'react-scrolllock'

import { TransitionFade } from '../transition-wrappers'

export interface DimmerProps {
  active: boolean
  onClick?: () => void
  children?: VNode | VNode[]
}

export function Dimmer({ active, children, onClick }: DimmerProps) {
  return (
    <Fragment>
      <TransitionFade visible={active} timingDuration={100} timeoutOnExit={100}>
        <Container onClick={onClick}>{children}</Container>
      </TransitionFade>
      <ScrollLock isActive={active} />
    </Fragment>
  )
}

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  z-index: 101;
  position: fixed;
  user-select: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 100ms ease-in-out;
`
