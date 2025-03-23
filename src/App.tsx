import Header from "./components/Header";
import Router from "./Router";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-full box-border flex-col justify-center p-2">
        <Router />
      </div>
    </>
  );
}

export default App;
