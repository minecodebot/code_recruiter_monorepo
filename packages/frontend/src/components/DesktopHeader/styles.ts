import styled, { css } from 'styled-components'
import {
  FcPuzzle,
  FcPositiveDynamic,
  FcSignature,
  FcPlus
} from 'react-icons/fc'

export const Container = styled.div`
  background: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  /* display: none; */

  @media (min-width: 1180px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;

      color: var(--color-icons);
      cursor: pointer;
      &:hover {
        color: var(--color-dark);
      }
      &.active {
        border-bottom: 2px solid var(--color-dark);
      }
    }
  }

  .homeIcon {
    cursor: pointer;
  }
`

export const LinkedInIcon = styled(FcPuzzle)`
  height: 34px;
  width: 34px;
  color: var(--color-light);
  background-color: var(--color-header);
  border-radius: 4px;
  flex-shrink: 0;
`

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`

export const TrainingIcon = styled(FcPositiveDynamic)`
  ${iconCSS}
`

export const ExamIcon = styled(FcSignature)`
  ${iconCSS}
`

export const AddJob = styled(FcPlus)`
  ${iconCSS}
`

export const AddExam = styled(FcSignature)`
  ${iconCSS}
`

export const AddTraining = styled(FcPositiveDynamic)`
  ${iconCSS}
`
