export default function ImageGrid({ data }) {
    // Log the data for debugging purposes
    console.log(data);

    return (
        <div className="container mx-auto relative h-full flex items-center justify-center bg-black text-white py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-0 w-full gap-10 sm:gap-28">
                {data?.data?.sections && data.data.sections.length > 0 ? (
                    data.data.sections.map((section) => (
                        <div key={section.id} className="overflow-hidden">
                            {/* Fallback for missing image */}
                            <img 
                                src={section.details.image || '/default-image.jpg'} 
                                alt={section.details.title || 'Default title'} 
                                className="w-full h-60 object-cover" 
                            />
                            <div className="text-start">
                                {/* Fallback for missing title */}
                                <h3 className="text-lg text-white font-semibold pb-1 pt-1">{section.title || 'Untitled'}</h3>
                                {/* Fallback for missing subtitle */}
                                <p className="text-sm text-white" dangerouslySetInnerHTML={{ __html: section.details.text || 'No description available' }}></p>
                                {/* Optionally, display the CTA link */}
                                {section.details.cta_link && (
                                    <a href={section.details.cta_link} className="text-sm text-blue-500">
                                        {section.details.cta_text || 'Learn more'}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white">No sections available</p> // If no sections are found
                )}
            </div>
        </div>
    );
}
