import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    //Esto era el React.Fragment COMPONENTE
    <section className="App">
      <TwitterFollowCard
        userName={"Scalextric"}
        name={"Scalextric"}
        isFollowing={false}
      />
      <TwitterFollowCard
        userName={"pachiFueraDeCarril"}
        name={"Pachi Fuera de Carril"}
        isFollowing
      />
    </section>
  );
}
