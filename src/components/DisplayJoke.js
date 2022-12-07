export default function DisplayJoke({ joke }) {
  const loaded = () => {
    return (
      <>
        <h3>{joke.body[0].setup}</h3>
        <h3>{joke.body[0].punchline}</h3>
      </>
    );
  };

  const loading = () => {
    return <h3>No joke to display</h3>;
  };

  return joke ? loaded() : loading();
}
