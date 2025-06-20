import React, { useState } from 'react';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, father, mother, age, country };
    setFormDataArray((prev) => [...prev, newEntry]);
    setName('');
    setFather('');
    setMother('');
    setAge(0);
    setCountry('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-yellow-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black mb-8">User Information Form 📝</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-yellow-400 border-2 border-black p-6 rounded-3xl shadow-xl w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-xl border-2 border-black placeholder:text-gray-700 text-black"
          required
        />
        <input
          type="text"
          placeholder="Father's Name"
          value={father}
          onChange={(e) => setFather(e.target.value)}
          className="w-full p-3 rounded-xl border-2 border-black placeholder:text-gray-700 text-black"
          required
        />
        <input
          type="text"
          placeholder="Mother's Name"
          value={mother}
          onChange={(e) => setMother(e.target.value)}
          className="w-full p-3 rounded-xl border-2 border-black placeholder:text-gray-700 text-black"
          required
        />
        <input
          type="number"
          placeholder="Your Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="w-full p-3 rounded-xl border-2 border-black placeholder:text-gray-700 text-black"
          required
        />
        <input
          type="text"
          placeholder="Your Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-3 rounded-xl border-2 border-black placeholder:text-gray-700 text-black"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition"
        >
          Submit
        </button>

        <div className="mt-4 bg-white p-3 rounded-xl border-2 border-black overflow-x-auto max-h-60 text-sm">
          <h2 className="font-bold text-black mb-2">📦 JSON Output:</h2>
          <pre className="text-gray-800">{JSON.stringify(formDataArray, null, 2)}</pre>
        </div>
      </form>

      {formDataArray.length > 0 && (
        <div className="mt-10 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-black mb-4">Submitted Data</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {formDataArray.map((entry, index) => (
              <div
                key={index}
                className="bg-white text-black p-4 border-2 border-black rounded-2xl shadow hover:scale-105 transition"
              >
                <p><span className="font-semibold text-purple-800">Name:</span> {entry.name}</p>
                <p><span className="font-semibold text-purple-800">Father:</span> {entry.father}</p>
                <p><span className="font-semibold text-purple-800">Mother:</span> {entry.mother}</p>
                <p><span className="font-semibold text-purple-800">Age:</span> {entry.age}</p>
                <p><span className="font-semibold text-purple-800">Country:</span> {entry.country}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormValidation;
