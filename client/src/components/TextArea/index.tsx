import styled from 'styled-components';

interface Props {
  rows?: number;
  placeholder?: string;
}

export default styled.textarea<Props>`
  rows: ${(props) => props.rows};
  background: var(--secondary);
  color: var(--white);
  border-radius: 3px;
  outline: none;
  padding: 8px;

  &:focus {
    outline: none !important;
    border-color: var(--twitter);
    box-shadow: 0 0 3px var(--twitter);
  }

  &::placeholder {
  }
`;
