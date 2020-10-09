import { h, VNode } from 'preact'
import { styled } from 'linaria/react'
import { TransitionStatus } from 'react-transition-group/Transition'
import { CSSTransition } from 'react-transition-group'

export interface TransitionFadeProps {
  visible?: boolean
  timingDelay?: number
  timeoutOnExit?: number
  timingDuration?: number
  children: VNode | VNode[]
}

export function TransitionFade({
  visible,
  children,
  timeoutOnExit = 0,
  timingDelay = 100,
  timingDuration = 200,
}: TransitionFadeProps) {
  return (
    <CSSTransition mountOnEnter unmountOnExit in={visible} timeout={{ enter: 0, exit: timeoutOnExit }}>
      {transitionStatus => (
        <Details transitionStatus={transitionStatus} delay={timingDelay} duration={timingDuration}>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Details>
      )}
    </CSSTransition>
  )
}

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

interface DetailsProps {
  delay: number
  duration: number
  transitionStatus: TransitionStatus
}

const Details = styled.div<DetailsProps>`
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-delay: ${({ delay }) => delay}ms;
  transition-duration: ${({ duration }) => duration}ms;
  opacity: ${({ transitionStatus }) => getOpacityFromTransition(transitionStatus)};
`

function getOpacityFromTransition(status: TransitionStatus): string {
  if (status === 'entering') return '0'
  if (status === 'entered') return '1'
  if (status === 'exiting') return '0'

  return '0'
}
