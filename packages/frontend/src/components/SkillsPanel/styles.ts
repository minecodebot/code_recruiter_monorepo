import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 12px;

  > div {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 12px 16px;

    .title {
      color: var(--color-light);
      margin-bottom: 10px;
    }
    .tag {
      // color: var(--color-gray);
      display: flex;
      align-items: center;
      padding: 3.5px 0;
      justify-content: space-between;
    }

    .certified {
      opacity: 0.5;
    }
  }
`
