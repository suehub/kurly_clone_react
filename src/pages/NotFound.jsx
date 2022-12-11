import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <div>
      <Title>존재하지 않는 페이지입니다.</Title>
    </div>
  )
}

const Title = styled.h3`
    margin-top: 50px;
    margin-bottom: 50px;
    font-weight: 500;
    font-size: 28px;
    color: rgb(51, 51, 51);
    line-height: 35px;
    text-align: center;
`;