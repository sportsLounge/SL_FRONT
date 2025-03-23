import Header from "@/components/customs/Header";
import Router from "./Router";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-full box-border flex-col justify-center items-center p-2">
        <Router />
      </div>
    </>
  );
}

export default App;
