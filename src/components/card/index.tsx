import "./styles";
import { Box } from "./styles";

interface CardProps {
  name: string;
  hobby: string;
  age: number;
}

export const Card = ({ name, hobby, age }: CardProps) => (
  <Box className="card">
    <h2 className="card-name">{name}</h2>
    <p className="card-hobby">
      <small>Hobby: </small>
      {hobby}
    </p>
    <h4 className="card-age">idade: {age} anos</h4>
  </Box>
);
