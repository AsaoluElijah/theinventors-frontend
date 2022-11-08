import Hero from "../components/Hero";

const Home = () => {
  const todos: string = "Hello";
  return (
    <div>
      Home
      <Hero todos={todos} />
      {/* {todos.map((td) => (
        <p>{td.name}</p>
      ))} */}
    </div>
  );
};

export default Home;
