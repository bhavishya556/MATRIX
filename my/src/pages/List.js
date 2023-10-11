import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import "./list.css"
import { useNavigate } from 'react-router-dom';

const List = () => {
    const firebase = useFirebase();
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [isbnNumber, setIsbnNumber] = useState('');
    const [price, setPrice] = useState('');
    const [coverPic, setCoverPic] = useState(null);
    const [videoUrls, setVideoUrls] = useState(['']); // Initial input field for YouTube video URLs

    // Function to add a new input field for YouTube video URL
    const addVideoUrlInputField = () => {
        setVideoUrls([...videoUrls, '']); // Add a new empty input field for YouTube video URL
    };

    // Function to remove an input field for YouTube video URL
    const removeVideoUrlInputField = (index) => {
        const updatedUrls = [...videoUrls];
        updatedUrls.splice(index, 1); // Remove the input field at the specified index
        setVideoUrls(updatedUrls);
    };

    // Function to handle input field changes for YouTube video URLs
    const handleVideoUrlInputChange = (index, event) => {
        const { value } = event.target;
        const updatedUrls = [...videoUrls];
        updatedUrls[index] = value;
        setVideoUrls(updatedUrls);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(firebase.isAdmin){
            await firebase.handelCreateListing(name, isbnNumber, price, coverPic, videoUrls);

        }else{
            navigate("/home/unauthorised")
          
        }
   
        

        // Submit the form data, including the videoUrls, to your Firebase function
      
    };

    return (
        <div className='list-con'>
        
                <div className='list-sub-con'>
                    <h2 className='list-head'>ADD course</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Other form fields (name, isbnNumber, price, coverPic) here */}
                        <div className="inputBox">
                            <input
                                type="text"
                                placeholder="Enter Course Name"

                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                placeholder="Course Code"

                                onChange={(e) => setIsbnNumber(e.target.value)}
                                value={isbnNumber}
                            />
                        </div>

                        {/* <div className="inputBox">
                            <input
                                type="text"
                                placeholder="Price"

                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                            />
                        </div> */}

                        <div className="inputBox">
                            <input
                                type="file"
                                placeholder="Cover pic"

                                onChange={(e) => setCoverPic(e.target.files[0])}

                            />
                        </div>
                        
                        {videoUrls.map((url, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={url}
                                    placeholder={`Enter YouTube Video URL ${index + 1}`}
                                    onChange={(e) => handleVideoUrlInputChange(index, e)}
                                    className='list-link'
                                />
                                {index > 0 && (
                                    <button type="button" onClick={() => removeVideoUrlInputField(index)}>
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={addVideoUrlInputField}>
                            Add YouTube Video URL
                        </button>

                        <div className="inputBox">
                            <button type="submit">ADD Items</button>
                        </div>
                    </form>
                </div>
        
        </div>
    );
}

export default List;
