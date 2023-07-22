import React from 'react';

import { SectionContainer, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <div>
        <Title>{title}</Title>
        {children}
      </div>
    </SectionContainer>
  );
};

export default Section;
