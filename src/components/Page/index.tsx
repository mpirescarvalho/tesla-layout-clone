import React from 'react';

import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            { name: 'Model One', lightContrast: false },
            { name: 'Model Two', lightContrast: true },
            { name: 'Model Three', lightContrast: true },
            { name: 'Model Four', lightContrast: true },
            { name: 'Model Five', lightContrast: true },
            { name: 'Model Six', lightContrast: false },
            { name: 'Model Seven', lightContrast: true },
          ].map((item, index) => (
            <ModelSection
              key={item.name}
              className='colored'
              modelName={item.name}
              last={index === 6}
              overlayNode={
                <DefaultOverlayContent
                  label={item.name}
                  description='Order Online for Delivery'
                  contrast={item.lightContrast ? 'light' : 'dark'}
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
