import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "pachiFueraDeCarril",
    name: "Pachi Fuera de Carril",
    isFollowing: true,
  },

  {
    userName: "scalextric",
    name: "Scalextric",
    isFollowing: false,
  },
  {
    userName: "autoslot",
    name: "Jota Pe",
    isFollowing: false,
  },
  {
    userName: "slotPixelsBugs",
    name: "Slot Pixels & Bugs",
    isFollowing: true,
  },
];
export function App() {
  return (
    //Esto era el React.Fragment COMPONENTE
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
