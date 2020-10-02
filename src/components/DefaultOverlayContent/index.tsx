import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string;
  description: string;
  contrast?: 'light' | 'dark';
}

const DefaultOverlayContent: React.FC<Props> = ({
  label,
  description,
  contrast = 'dark',
}) => {
  return (
    <Container>
      <Heading className={contrast}>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className='white'>Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
