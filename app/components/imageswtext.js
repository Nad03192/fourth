export default function ImageGrid({ data }) {
    console.log("data",data);
    // Check if data is available before trying to access sections
    if (!data || !data.data || !data.data.sections) {
      return <p className="text-white">No sections available</p>;  // Fallback message if data is missing
    }
  

    return (
      <div className="container mx-auto relative h-full flex items-center justify-center bg-black text-white py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-0 w-full gap-10 sm:gap-28">
          {data.data.sections.map((section) => (
            <div key={section.id} className="overflow-hidden">
              <img 
                src={section.details.image || '/default-image.jpg'} 
                alt={section.details.title || 'Default title'} 
                className="w-full h-60 object-cover" 
              />
              <div className="text-start">
                <h3 className="text-lg text-white font-semibold pb-1 pt-1">
                  {section.title || 'Untitled'}
                </h3>
                <p className="text-sm text-white" dangerouslySetInnerHTML={{ __html: section.details.text || 'No description available' }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  