import { FollowCard } from "../FollowCard";
import "./styles.css";

const users = [
  {
    userName: "jhonatan2022",
    name: "Jhonatan2022",
    isFollowing: true,
  },
  {
    userName: "deividbautista",
    name: "deividbautista",
    isFollowing: true,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: false,
  }
]; 

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <FollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </FollowCard>
      ))}
    </section>
  );
}
