import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formattedUserName = <span>@Pachiiii</span>;

  return (
    //Esto era el React.Fragment COMPONENTE
    <section className="App">
      <TwitterFollowCard
        placeUserName={formattedUserName} //paso la fc (pero no la ejecución!! ejecución: fc() ) para que la ejecute en Tw
        userName={"Scalextric"}
        name={"Scalextric"}
        isFollowing={false}
      />
      <TwitterFollowCard
        placeUserName={formattedUserName}
        userName={"pachiFueraDeCarril"}
        name={"Pachi Fuera de Carril"}
        isFollowing
      />
    </section>
  );
}
