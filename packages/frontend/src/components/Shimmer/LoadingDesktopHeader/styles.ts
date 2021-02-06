import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;

  /* display: flex;
  justify-content: space-between;
  flex: 1; */

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  > div {
    /* padding: 15px 40px 50px 12px; */

    header {
      display: flex;

      .avatar-skeleton {
        margin: 0 10px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .column {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        flex: 1;

        .row-skeleton {
          height: 12px;

          &:nth-child(1) {
            width: 10%;
            margin-top: 10px;
          }
        }
      }
    }
  }
`
