import PersonContext from "../contexts/PersonContext";

export default function Example1() {
  return (
    <PersonContext.Consumer>
      {(persons) => (
        <ul>
          {persons.map((pseron) => (
            <li>{pseron.name}</li>
        ))}
      </ul>
      )}
    </PersonContext.Consumer>
  )
}