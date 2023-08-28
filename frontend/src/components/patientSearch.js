import React, { useState } from 'react';
import axios from 'axios';

const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchPatients = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/search_patients?search=${searchQuery}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error searching patients:", error);
    }
  };
  
  return (
    <div>
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={searchPatients}>Search</button>
      <div>
        {results.map((patient, index) => (
          <div key={index}>
            {patient.name} - {patient.medicalHistory}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientSearch;
