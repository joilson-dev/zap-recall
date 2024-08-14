import { StyleProperty } from './Progression-styles';

function Progression({ completed, total }) {
  return (
    <StyleProperty>
      <p>{completed}/{total} CONCLUÍDOS</p>
    </StyleProperty>
  );
}

export default Progression;
