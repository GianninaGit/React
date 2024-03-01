import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    //Esto era el React.Fragment COMPONENTE
    <section className="App">
      <TwitterFollowCard initialIsFollowing={false} userName={"Scalextric"}>
        Scalextric
      </TwitterFollowCard>

      <TwitterFollowCard initialIsFollowing userName={"pachiFueraDeCarril"}>
        Pachi Fuera de Carril
      </TwitterFollowCard>
    </section>
  );
}
