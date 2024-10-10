import { useState } from 'react';

const MainPage = () => {
  const [constraints, setConstraints] = useState({
    genre: '',
    character: '',
    setting: '',
    theme: '',
  });
  const [story, setStory] = useState('');

  const handleInputChange = (e) => {
    setConstraints({
      ...constraints,
      [e.target.name]: e.target.value,
    });
  };

  const generateStory = async () => {
    // Simulate story generation logic (this is where you would add the AI story generation logic)
    const generatedStory = `Once upon a time in a ${constraints.setting}, there was a ${constraints.character} who faced ${constraints.theme} challenges in a ${constraints.genre} world.`;
    setStory(generatedStory);
  };

  return (
    <div className="container">
      <h1>Welcome to MythAI</h1>
      <p>Generate stories based on your constraints!</p>
      
      <div className="input-group">
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={constraints.genre}
          onChange={handleInputChange}
          placeholder="e.g., Fantasy, Sci-Fi"
        />
      </div>

      <div className="input-group">
        <label>Main Character</label>
        <input
          type="text"
          name="character"
          value={constraints.character}
          onChange={handleInputChange}
          placeholder="e.g., Hero, Villain"
        />
      </div>

      <div className="input-group">
        <label>Setting</label>
        <input
          type="text"
          name="setting"
          value={constraints.setting}
          onChange={handleInputChange}
          placeholder="e.g., Space, Forest"
        />
      </div>

      <div className="input-group">
        <label>Theme</label>
        <input
          type="text"
          name="theme"
          value={constraints.theme}
          onChange={handleInputChange}
          placeholder="e.g., Love, Adventure"
        />
      </div>

      <button onClick={generateStory}>Generate Story</button>

      {story && (
        <div className="story-output">
          <h2>Your Generated Story</h2>
          <p>{story}</p>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        .input-group {
          margin: 15px 0;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          margin-bottom: 10px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #005bb5;
        }
        .story-output {
          margin-top: 20px;
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default MainPage;
