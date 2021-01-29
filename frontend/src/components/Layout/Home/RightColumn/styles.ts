import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 100vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  max-height: calc(100vh - 120px);

  position: fixed;
  top: 102px;
  margin-left: calc(100vh + 50px) !important;
`
