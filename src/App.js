import "./App.css";
import { useState } from "react";
import Container from "./components/container/Container";

function App() {
  const [containers, setContainers] = useState([
    { id: 0, type: "container", children: [] },
  ]);
  const [chosen, setChosen] = useState(null);
  const [hovered, setHovered] = useState(null);

  const chose = (id) => {
    setChosen(id);
  };

  return (
    <div className="App">
      <header className="App-header">Templates</header>

      <div className="builder">
        <div className="work-area">
          {containers.map((item) => {
            return (
              <Container
                key={item.id}
                onMouseOver={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.children.map((item) => {
                  return <Container key={item.id} />;
                })}
              </Container>
            );
          })}
        </div>
        <div className="toolbar">
          {hovered && <>{hovered.id}</>}
          {chosen && (
            <>
              <div>{chosen?.id}</div>
              <button>template 1</button>
              <button>template 2</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
