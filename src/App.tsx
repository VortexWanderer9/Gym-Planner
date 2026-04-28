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

      const calculate = () => {
        if(!age || !weight || !height){
          alert("Please fill all the fields");
          return;
        }

        let bmr = 0;
        if (age && weight && height) {
          bmr = 10 * weight + 6.25 * height - 5 * age + 5; 
          console.log(bmr);
        }

      let calories = 0;
      if (goal === "Gain") {
        calories = bmr + 500; 
      } else if (goal === "Lose") {
        calories = bmr - 500; 
      } else {
        calories = bmr; 
      }

      let protein = weight * 1.6;
      let carbs = (calories - protein * 4) * 0.5 / 4; 
      let fats = (calories - protein * 4) * 0.5 / 9;

      setResult(`To ${goal.toLowerCase()} weight, you need approximately ${calories.toFixed(0)} calories per day.`);
      setResult(prev => `${prev}\nProtein: ${protein.toFixed(0)}g\nCarbs: ${carbs.toFixed(0)}g\nFats: ${fats.toFixed(0)}g`);

      }
  
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
      <div  className="relative z-10 p-4 flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl sm:text-3xl font-bold text-gray-800 text-center mt-4">Welcome to Calorie Calculator</h1>
        <p className="text-lg text-gray-600 text-center">Let’s build your personalized nutrition plan with our easy-to-use calculator.</p>
        <p className="font-mono text-gray-600 text-center mt-2">Get started by entering your details below.</p>
        <div className='flex gap-3 items-center animate-pulse' >
          <h2 className='entries'>Age</h2>
          <h2 className='entries'>Height(cm)</h2>
          <h2 className='entries'>Goal</h2>
          <h2 className='entries'>Weight(kg)</h2>
      </div>
      <div className='mt-2 animate-bounce'>
        <img src="arrow.svg" height={20} width={40} alt="arrow" />
      </div>
      </div>
       {/* skeleton loaders:*/}
        {/* Inputs */}
          <div className='w-full p-6 relative  z-20'>
            <h2>Nutrition Calculator</h2>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col'>
              <label htmlFor="weight">Weight(kg)</label>
              <input type="text"
               id="weight"
                value={weight}
                 onChange={(e) => setWeight(Number(e.target.value))} 
                 className='border outline-none px-2 py-1'
                 />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="age">Age</label>
              <input type="text"
               id="age"
                value={age}
                 onChange={(e) => setAge(Number(e.target.value))} 
                 className='border outline-none px-2 py-1'
                 />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="height">Height(cm)</label>
              <input type="text"
               id="height"
                value={height}
                 onChange={(e) => setHeight(Number(e.target.value))} 
                 className='border outline-none px-2 py-1'
                 />
            </div>
            
            <div className='flex flex-col'>
               <label htmlFor="goal">Goal</label>
                  <select
          value={goal}
          onChange={(e) => setGoal(e.target.value as Goal)}
          className="w-full  border outline-none rounded px-2 py-1"
        >
          <option value="Gain">Gain Weight</option>
          <option value="Maintain">Maintain Weight</option>
          <option value="Lose">Lose Weight</option>
        </select>
            </div>

            <div className='flex flex-col'>
              <button onClick={calculate} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
                Calculate
              </button>
            </div>
            </div>
            <div className='h-100'>
              <pre className='whitespace-pre-wrap mt-4 text-gray-700'>{result}</pre>
            </div>

          </div>
    </div>
    </div>
      )
    }

    export default App