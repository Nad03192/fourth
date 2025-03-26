
  export default function ImageGrid({ items }) {
    return (
        <div className="container mx-auto relative h-full  flex items-center justify-center bg-black text-white py-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2  p-4 sm:p-0 w-full gap-10 sm:gap-28 ">
        {items.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <img src={item.image} alt={item.text} className="w-full h-60 object-cover" />
            <div className="text-start">
              <h3 className="text-lg  text-white font-semibold pb-1 pt-1">{item.text}</h3>
              <p className="text-sm text-white">{item.subtext}</p>
            </div>
            </div>

        ))}
      </div>
      </div>
    );
  }
  