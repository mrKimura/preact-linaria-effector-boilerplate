import { h, VNode } from 'preact'
import { styled } from 'linaria/react'
import { useCallback } from 'preact/compat'
import { MouseEvent } from 'react'

import { textStyle, pallette } from '../../theme'

import { Dimmer } from '../dimmer'

export interface ModalProps {
  title?: string
  active: boolean
  textAction?: string
  onAction?: () => void
  textCancel?: string
  onCancel?: () => void
  children?: VNode | VNode[]
}

export function Modal({ title, children, textAction, textCancel, active, onAction, onCancel }: ModalProps) {
  const handleModalClick = useCallback((e: MouseEvent<HTMLElement>) => e.stopPropagation(), [])
  const handleActionClick = useCallback((e: MouseEvent<HTMLButtonElement>) => onAction(), [onAction])
  const handleCancelClick = useCallback((e: MouseEvent<HTMLButtonElement>) => onCancel(), [onCancel])

  const hasActionBtn = Boolean(textAction) && Boolean(onAction)
  const hasCancelBtn = Boolean(textCancel) && Boolean(onCancel)

  return (
    <Dimmer active={active} onClick={onCancel}>
      <Container onClick={handleModalClick}>
        {title && <Title>{title}</Title>}
        {children && <ChildrenContainer>{children}</ChildrenContainer>}
        <ButtonsBlock>
          {hasActionBtn && <BtnAction onClick={handleActionClick}>{textAction}</BtnAction>}
          {hasCancelBtn && <BtnCancel onClick={handleCancelClick}>{textCancel}</BtnCancel>}
        </ButtonsBlock>
      </Container>
    </Dimmer>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  width: 270px;
  padding-top: 20px;
  background: rgba(242, 242, 242, 1);
  overflow: hidden;
`

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`

const Title = styled.span`
  ${textStyle('modalBig')};
  text-align: center;
  padding: 0 16px;
`

const ButtonsBlock = styled.div`
  display: flex;
  height: 44px;
  border-top: 1px solid ${pallette('Divider Gray')};

  > *:not(:last-child) {
    border-right: 1px solid ${pallette('Divider Gray')};
  }
`

const Btn = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 1 0 50%;
  color: ${pallette('Accent Xenon Blue')};
  ${textStyle('modalBig')};
  border: none;
  background-color: transparent;
  outline: none;
  transition: color 30ms ease-in-out;
  &:active {
    color: rgba(0, 122, 255, 0.5);
  }
`

const BtnAction = styled(Btn)`
  font-weight: 500;
`

const BtnCancel = styled(Btn)``
