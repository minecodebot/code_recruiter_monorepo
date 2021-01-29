import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 12px;

  margin-top: 8px;

  .profile-cover {
    width: 100%;
    height: 54px;
    background: var(--color-background);
    box-shadow: 0px -5px 0px 5px var(--color-background);
  }

  h1 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    // color: var(--color-black);
  }
  h2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    // color: var(--color-gray);
  }
  .separator {
    width: 100%;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 0 12px;
  }
  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0 12px;
    padding: 0 0 12px 0;
    font-weight: 600;

    .key {
      // color: var(--color-gray);
    }
    .value {
      color: var(--color-light);
    }
  }
`
