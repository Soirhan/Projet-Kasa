import './Loader.scss'
import styled, { keyframes } from 'styled-components'

// Animation de rotation
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

// Loader animé (utilisé lors des appels API)
export const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;
`

