import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [show, setShow] = useState(false);

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
  <div  className={`opacity-0 transition-opacity duration-1000 ${
        show ? "opacity-100" : ""
      }`}>
  <div  className="relative z-10 flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Welcome to Calorie Calculator</h1>
    <p className="text-lg text-gray-600 text-center">Let’s build your personalized nutrition plan with our easy-to-use calculator.</p>
    <p className="font-mono text-gray-600 text-center mt-2">Get started by entering your details below.</p>
    <div className='flex gap-3 items-center' >
      <div ></div>
       <div></div>
        <div></div>
    </div>
    
  </div>
    
  </div>
</div>
  )
}

export default App
