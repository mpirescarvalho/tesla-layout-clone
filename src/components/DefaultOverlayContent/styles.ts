import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
  }

  > h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }

  &.light {
    > h1 {
      color: #d2d3d6;
      text-shadow: -1px 0 #393c41, 0 1px #393c41, 1px 0 #393c41, 0 -1px #393c41;
    }

    > h2 {
      color: #b6b9ba;
      text-shadow: -1px 0 #5c5e62, 0 1px #5c5e62, 1px 0 #5c5e62, 0 -1px #5c5e62;
    }
  }

  &.dark {
    > h1 {
      color: #393c41;
    }

    > h2 {
      color: #5c5e62;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 130px;

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;
  }

  > button {
    background: #1a1720;
    color: #fff;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;

      @media (min-width: 600px) {
        margin: 0 0 0 10px;
      }
    }
  }
`;
