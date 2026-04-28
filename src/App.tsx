    import './App.css'
    import { useState, useEffect } from 'react';

    type Goal = "Gain" | "Lose" | "Maintain";


    function App() {
      const [show, setShow] = useState(false);
      const [age, setAge] = useState<number | "">("");
      const [weight, setWeight] = useState<number | "">("");
      const [height, setHeight] = useState<number | "">("");
      const [goal, setGoal] = useState<Goal>("Maintain");
      const [result, setResult] = useState<String>("");
  
      useEffect(() => {
        setShow(true);
      }, []);


      return (
        <div className="min-h-screen w-full bg-[#f8fafc] relative">

      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      {/* Main Content */}
      {/* Fade In */}
      <div  className={`opacity-0 transition-opacity duration-1000 ${
            show ? "opacity-100" : ""
          }`}>
             {/* Heading content */}
      <div  className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Welcome to Calorie Calculator</h1>
        <p className="text-lg text-gray-600 text-center">Let’s build your personalized nutrition plan with our easy-to-use calculator.</p>
        <p className="font-mono text-gray-600 text-center mt-2">Get started by entering your details below.</p>
        <div className='flex gap-3 items-center animate-pulse' >
          <h2 className='entries'>Age</h2>
          <h2 className='entries'>Height</h2>
          <h2 className='entries'>Workout days</h2>
          <h2 className='entries'>Weight</h2>
      </div>
      </div>
       {/* skeleton loaders:*/}
        <div className='flex items-center justify-center mt-10'>
           <div className="w-full max-w-sm rounded-md">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
    </div>
      )
    }

    export default App