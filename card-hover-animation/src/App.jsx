import { AnimatedCardTwo } from "./AnimatedCardTwo";
import { AnimatedCard } from "./AnimatedCard";
import { AnimatedCardThree } from "./AnimatedCardThree";

function App() {
  return (
    <div className="grid h-screen w-full place-content-center px-4 py-12 text-slate-900 bg-neutral-900">
      <div className="flex flex-row gap-10 mx-auto w-fit">
        <AnimatedCard />
        {/* <AnimatedCardTwo /> */}
        <AnimatedCardThree />
      </div>
    </div>
  );
}

export default App;
