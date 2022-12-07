export default function Form({ getJoke }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getJoke();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Generate Joke" />
      </form>
    </>
  );
}
