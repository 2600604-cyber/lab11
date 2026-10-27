// Name: Soban Iqbal | Reg. No: 2600604
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  // ----- Task 1: JSX practice -----
  const celsius = 30; // change to 40 to see "Hot day!" appear
  const fruits = ["Apple", "Mango", "Banana"];
  const isWeekend = false;

  return (
    <div>
      <h1>Lab 11: React Basics</h1>

      {/* Task 1 */}
      <h2>Task 1: JSX practice</h2>
      <p>
        Temperature: {celsius}&deg;C = {(celsius * 9) / 5 + 32}&deg;F
      </p>
      <p>Today is a: {isWeekend ? "Weekend" : "Working day"}</p>

      <h3>Fruits</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {celsius > 35 && <p>Hot day!</p>}

      {/* Task 2 + 3 */}
      <h2>Task 2 and 3: ProfileCard</h2>
      <ProfileCard name="Ali Khan" role="Teacher" city="Islamabad" />
      <ProfileCard name="Sara Ahmed" role="Student" city="Lahore" />
      <ProfileCard name="Hamza Raza" />
    </div>
  );
}

export default App;
