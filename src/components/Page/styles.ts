import styled from 'styled-components';

import model1Img from '../../assets/images/model1.jpg';
import model2Img from '../../assets/images/model2.jpg';
import model3Img from '../../assets/images/model3.jpg';
import model4Img from '../../assets/images/model4.jpg';
import model5Img from '../../assets/images/model5.jpg';
import model6Img from '../../assets/images/model6.jpg';
import model7Img from '../../assets/images/model7.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${model1Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background: url(${model2Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: url(${model3Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: url(${model4Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: url(${model5Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background: url(${model7Img});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: url(${model6Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60%;
  }
`;

export const Spacer = styled.div`
  height: 5vh;
  background: url(${model6Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 90%;
`;
