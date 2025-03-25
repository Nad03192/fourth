export default function Banner() {
    return (
      <div className="container mx-auto relative flex items-center justify-center bg-gray-800 text-white py-12">
        {/* Fixed Size Container */}
        <div className="relative w-full items-center sm:w-[1000px] h-[500px] bg-transparent">
          
          {/* Circle Behind */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full"
            style={{
              background:
                'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)',
            }}
          ></div>
  
          {/* Circle in Front */}
          <div className="absolute top-[10%] left-[55%] transform -translate-x-1/2 translate-y-[-10px] w-100 h-100 rounded-full bg-white opacity-50"></div>
  
       
        </div>
           {/* Text in Front */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
           <p className="mt-4 text-6xl w-[700px]  tracking-wide"    style={{ fontFamily: 'Poppins', fontWeight: '10' ,lineHeight: '1'}} 
            >
  here's a teeny-weeny glimpse of our work. What's coming later is
</p>
<p className="text-7xl font-bold">
   <span className="text-red-500">even</span> greater
</p>

          </div>
      </div>
    );
  }
  