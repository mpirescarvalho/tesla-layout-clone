import React, { useEffect, useRef } from 'react';

import useModel from '../useModel';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
  last?: boolean;
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  last = false,
  ...props
}) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef, last });
    }
  }, [modelName, overlayNode, registerModel, last]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
