import React, { useState } from 'react';

function Form() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          const width = image.width;
          const height = image.height;
          const maxWidth = 5472; // Maximum allowed width for the card image
          const maxHeight = 3648; // Maximum allowed height for the card image
  
          if (width <= maxWidth && height <= maxHeight) {
            setSelectedImage(reader.result);
          } else {
            setSelectedImage(null);
            alert(
              `Please upload an image with dimensions up to ${maxWidth}px x ${maxHeight}px.`
            );
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="p-8 bg-gray-200 rounded-lg">
      {selectedImage && (
          <div className="mt-4 mb-4">
            <h2 className="text-lg font-medium">Selected Image:</h2>
            <img src={selectedImage} alt="Selected" className="mt-2 w-48" />
          </div>
        )}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <input type="file" className="file-input" onChange={handleFileChange} />
            <select className="select">
              <option>News Id</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <input
              type="text"
              className="input"
              placeholder="Title..."
            />
          </div>
          <textarea
            className="rounded-lg textarea"
            placeholder="Description..."
            rows="10"
          ></textarea>
          <button className="btn bg-golden border-none hover:bg-tealblue">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
