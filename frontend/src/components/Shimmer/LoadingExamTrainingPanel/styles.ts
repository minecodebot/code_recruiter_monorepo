import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;

  > div {
    padding: 15px 40px 50px 12px;

    header {
      display: flex;
      .column {
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        flex: 1;

        .row-skeleton {
          height: 12px;

          &:nth-child(1) {
            width: 60%;
            margin-top: 10px;
          }
          &:nth-child(2) {
            width: 10%;
            margin-top: 10px;
          }
        }
      }
    }
  }
`
