import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Circle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Rating = ({ size, strokeWidth, circleOneStroke, rating }) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const progress = rating * 10;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;

  useEffect(() => {
    const progressOffset = circumference - (circumference * progress) / 100;
    setOffset(progressOffset);
    circleRef.current.style = 'transition: all 2s ease-in-out';
  }, [setOffset, progress, circumference, offset]);
  return (
    <Circle>
      <svg
        style={{
          display: 'block',
          maxWidth: '100%',
        }}
        width={size}
        height={size}
      >
        <circle
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          fill="#081b22"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          stroke={progress > 65 ? '#28d07a' : '#d2d531'}
          ref={circleRef}
          cx={center}
          cy={center}
          fill="none"
          r={radius}
          transform={`rotate(-90 ${center} ${center})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x={center}
          y={center}
          fill="#fff"
          textAnchor="middle"
          fontSize="11px"
        >
          {progress}%
        </text>
      </svg>
    </Circle>
  );
};

Rating.propTypes = {
  size: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
};

export default Rating;
