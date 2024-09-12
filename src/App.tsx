import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section>
        <header>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>
          </nav>
        </header>

        <h1>Protecting Nature for a Sustainable future</h1>

        <span>
          Look throught nature to understand what is nature realy are and feel
          this way to make sure you do right things to save that beautiful
          world.
        </span>

        <button>See more</button>
      </section>

      <section>
        <div>
          <h1>Hi Guys!!</h1>
          <span>
            Welcome to a world where nature is valued, protected and inspires us
            all to care for it. We, the freeway team, are passionate defenders
            of our planet, dedicated to not only preserving its unique beauty
            and diversity, but also inspiring others to participate in this
            important cause.{" "}
          </span>
        </div>

        <div>
          <img src="" alt="" />
        </div>
      </section>
    </main>
  );
}

export default App;
