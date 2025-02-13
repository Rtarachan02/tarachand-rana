import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/aboutme/')
            .then(response => setAboutMe(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {aboutMe ? (
                <>
                    <h1>{aboutMe.name}</h1>
                    <p>{aboutMe.bio}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AboutMe;
