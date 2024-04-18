'use client';

import React from 'react';

export default function Forms() {


    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (url, data) => {
        setLoading(true);
        setMessage('');
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const result = await response.json();
                setMessage('Success: ' + JSON.stringify(result));
                window.location.reload();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            setMessage('Error: ' + error.toString());
        }
        setLoading(false);
    };

    const handleAddSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            locationName: formData.get('locationName'), // Ensure the form input has name="locationName"
            locationCords: formData.get('locationCoordinates'), // Ensure the form input has name="locationCoordinates"
            locationAlg: formData.get('algorithm'), // Ensure the form input has name="algorithm"
        };
        console.log(data);
        handleSubmit('/api/Location/addLocation', data); // Check and correct the endpoint if needed
    };
    

    const handleDeleteSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            locationId: formData.get('locationId'),  // Ensure this matches the 'name' attribute of your input field
        };
        handleSubmit('/api/Location/deleteLocation', data);
    };
    

    const handleModifySubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            locationId: formData.get('locationId'),  // This key should exactly match the server's expected key
            newlocationName: formData.get('newLocationName'),  // Adjust to match case sensitivity with the backend
        };
        handleSubmit('/api/Location/updateLocation', data);
    };
    

    return (
        <div className='location-page'>
            <div className='options-container'>
                
                <div className='option'>
                    <form onSubmit={handleAddSubmit}>
                        <label>Location Name:</label>
                        <input type="text" name="locationName" />
                        <label>Location Coordinates:</label>
                        <input type="text" name="locationCoordinates" />
                        <label>Algorithm:</label>
                        <input type="text" name="algorithm" />
                        <button type="submit" disabled={loading}>Add Location</button>
                    </form>
                </div>
                
                <div className='option'>
                    <form onSubmit={handleModifySubmit}>
                        <label>Location ID:</label>
                        <input type="text" name="locationId" />
                        <label>New Location Name:</label>
                        <input type="text" name="newLocationName" />
                        <button type="submit" disabled={loading}>Modify Location</button>
                    </form>
                </div>

                <div className='option'>
                    <form onSubmit={handleDeleteSubmit}>
                        <label>Location ID:</label>
                        <input type="text" name="locationId" />
                        <button type="submit" disabled={loading}>Delete Location</button>
                    </form>
                </div>

            </div>
        </div>
    );
}
