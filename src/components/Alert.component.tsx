import { FC, useEffect } from 'react';
import { AlertType } from '../App';

import { Container } from '../styles/Alert.style';

const Alert: FC<AlertType> = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2500);
    return () => clearTimeout(timeout);
  });

  return (
    <Container>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Container>
  );
};

export default Alert;
