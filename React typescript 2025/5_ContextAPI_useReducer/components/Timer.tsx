import Container from "./UI/Container.js";
import { type Timer as TimerProps} from "../store/timers-context.js"

// type TimerProps = {
//   name: string;
//   time: number;
// };

export default function Timer({name, duration}:TimerProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
