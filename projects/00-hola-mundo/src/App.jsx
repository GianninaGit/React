import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    //Esto era el React.Fragment COMPONENTE
    <section className="App">
      <TwitterFollowCard isFollowing={false} userName={"Scalextric"}>
        Scalextric
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName={"pachiFueraDeCarril"}>
        Pachi
      </TwitterFollowCard>
    </section>
  );
}
