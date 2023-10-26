import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const personList = [
    { id:"01", name: "Jose", username: "jose45", email: "jose@email.com" },
    { id:"02", name: "Luis", username: "lucho45", email: "luis@email.com" },
    { id:"03", name: "Cata", username: "cate10", email: "cata@email.com" },
    { id:"04", name: "Claudio", username: "claudio643", email: "claudio@email.com" },
  ];

  return (
    <div className="App">
      {personList.map((person) => (
        <PersonCard
          key={person.id}
          nombrePersona={person.name}
          NombreUsuario={person.username}
          emailUsuario={person.email}
        />
      ))}
    </div>
  );
}

export default App;
