import styled, { css } from 'styled-components'
import { FcSimCard } from 'react-icons/fc'

export const Container = styled.div`
  /* height: 100vh; */
  width: 100%;
  @media (min-width: 1180px) {
    width: 100vh;
  }

  /* overflow-y: scroll; */

  /* ::-webkit-scrollbar { */
  /* display: none; */
  /* } */
  /* -ms-overflow-style: none; */
  /* scrollbar-width: none; */
`

export const Row = styled.div`
  &.actions {
    justify-content: space-between;

    @media (min-width: 1180px) {
      justify-content: flex-start;
    }

    button {
      background: none;
      border: none;
      outline: none;
      // color: var(--color-gray);
      font-size: 14px;
      font-weight: 600;

      display: flex;
      align-items: center;
      padding: 14px 8px;

      cursor: pointer;
      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.05);
      }

      span {
        /* display: none; */

        @media (min-width: 1180px) {
          display: unset;
        }
      }
    }
  }
`

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`

export const LikeIcon = styled(FcSimCard)`
  ${iconCSS}
`
