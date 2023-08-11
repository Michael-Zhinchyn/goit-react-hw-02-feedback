import styled from 'styled-components';

const getButtonColor = (option, isHover = false) => {
  switch (option) {
    case 'good':
      return isHover ? 'green' : 'lightgreen';
    case 'neutral':
      return isHover ? 'yellow' : 'lightyellow';
    case 'bad':
      return isHover ? 'red' : 'lightcoral';
    default:
      return isHover ? 'darkgray' : 'gray';
  }
};

export const OptionBtn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  background-color: ${props => getButtonColor(props.option)};
  margin-right: 25px;

  &:hover {
    background-color: ${props => getButtonColor(props.option, true)};
  }
`;
