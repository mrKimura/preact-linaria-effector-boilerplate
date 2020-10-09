import { h, VNode } from 'preact'
import { styled } from 'linaria/react'
import { TransitionStatus } from 'react-transition-group/Transition'
import { CSSTransition } from 'react-transition-group'
import { useState, useEffect, useRef } from 'preact/compat'

export interface TransitionDropdownProps {
  visible?: boolean
  timingDelay?: number
  timeoutOnExit?: number
  timingDuration?: number
  children: VNode | VNode[]
}

export function TransitionDropdown({
  visible,
  children,
  timingDelay = 0,
  timeoutOnExit = 300,
  timingDuration = 300,
}: TransitionDropdownProps) {
  const [detailsHeight, setDetailsHeight] = useState('0')

  const childrenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!childrenRef.current) return
    if (detailsHeight !== '0' && !visible) {
      setDetailsHeight('0')
      return
    }

    const { height } = getComputedStyle(childrenRef.current)

    setDetailsHeight(height)
  }, [detailsHeight, visible, children])

  return (
    <CSSTransition unmountOnExit in={visible} timeout={{ enter: 0, exit: timeoutOnExit }}>
      {transitionStatus => (
        <Details
          delay={timingDelay}
          height={detailsHeight}
          duration={timingDuration}
          transitionStatus={transitionStatus}
        >
          <ChildrenWrapper ref={childrenRef}>{children}</ChildrenWrapper>
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
  height?: string
  delay: number
  duration: number
  transitionStatus: TransitionStatus
}

const Details = styled.div<DetailsProps>`
  overflow-y: hidden;
  transition-property: height;
  transition-timing-function: ease-in-out;
  transition-delay: ${({ delay }) => delay}ms;
  transition-duration: ${({ duration }) => duration}ms;
  height: ${({ transitionStatus, height }) => getHeightFromTransition(transitionStatus, height)};
`

function getHeightFromTransition(status: TransitionStatus, height?: string): string {
  if (!height) return '0'

  if (status === 'entering') return '0'
  if (status === 'entered') return height
  if (status === 'exiting') return '0'

  return '0'
}
