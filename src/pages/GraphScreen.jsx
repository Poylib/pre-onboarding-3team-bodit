import styled from 'styled-components';
import GraphField from '../components/GraphField/GraphField';

const GraphScreen = () => {
  return (
    <StyledGraphScreen>
      <span>GraphScreen</span>
      <GraphField />
    </StyledGraphScreen>
  );
};
export default GraphScreen;

const StyledGraphScreen = styled.div``;
