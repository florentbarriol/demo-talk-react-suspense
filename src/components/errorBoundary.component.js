import React from 'react';
import styled from 'styled-components';
import { Layer, Button, Heading, Image } from 'grommet';

const LayerStyled = styled(Layer)`
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export class ErrorBoundary extends React.PureComponent {
  state = {
    hasError: false
  };

  // Invoke after an error has been thrown by a descendant component.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.debug('Oups an error occured ', error, info);
  }

  handlerOnClick() {
    window.location = `http://${window.location.host}`;
    return false;
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <LayerStyled responsive={false}>
          <Image src="https://media.giphy.com/media/uCeC6zBklAwgM/giphy.gif" />
          <Heading
            level="1"
            textAlign="center"
            alignSelf="center"
            margin="medium"
          >
            Oups, there is something wrong !
          </Heading>
          <Button
            label="Go to home"
            onClick={this.handlerOnClick}
            margin="medium"
          />
        </LayerStyled>
      );
    }
    return children;
  }
}
