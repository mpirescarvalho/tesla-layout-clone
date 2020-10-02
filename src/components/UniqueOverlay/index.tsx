/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href='#'>UI Clone</a>
          </li>
          <li>
            <a href='#'>
              made with{' '}
              <span role='img' aria-label='purple heart'>
                💜
              </span>
            </a>
          </li>
          <li>
            <a href='#'>by Marcelo Carvalho</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
