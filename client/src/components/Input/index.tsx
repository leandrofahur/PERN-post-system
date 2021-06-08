import styled from 'styled-components';

interface Props {
  positive?: boolean;
}

export default styled.input<Props>`
  background: tranparent;
  border-radius: 5px;

  font-weigth: bold;
  font-size: 15px;

  outline: 0;
`;
