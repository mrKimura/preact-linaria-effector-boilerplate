import { h } from 'preact'
import { styled } from 'linaria/react'

export interface PreloaderProps {}

export function Preloader({}: PreloaderProps) {
  return <Container />
}

const Container = styled.div`
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  z-index: 99;
  cursor: inherit;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(255, 255, 255, 0.4);
  &:after {
    content: '';
    top: 50%;
    left: 50%;
    width: 32px;
    height: 32px;
    border-width: 4px;
    border-radius: 50%;
    position: absolute;
    border-style: solid;
    animation: rotate 1s linear;
    animation-iteration-count: infinite;
    border-color: white transparent transparent transparent;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`
