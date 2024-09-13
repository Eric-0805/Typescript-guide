import React from 'react';

const Task5: React.FC = () => {
  return (
    <div className="handling-api-calls">
      <h1>6. Handling API Calls in TypeScript</h1>
      
      <section>
        <h2>Learning Goal</h2>
        <p>Learn how to fetch data from an API and type the response.</p>
      </section>

      <section>
        <h2>Typing API Responses</h2>
        <p>When you fetch data from an API, TypeScript can help ensure the data is what you expect.</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
interface WeatherData {
  temperature: number;
  description: string;
}

async function fetchWeather(): Promise<WeatherData> {
  const response = await fetch("https://api.weather.com");
  const data = await response.json();
  return {
    temperature: data.temp,
    description: data.weather[0].description,
  };
}`}
        </code></pre>
        <p>Here, <code>fetchWeather</code> fetches weather data and ensures the response follows the <code>WeatherData</code> structure.</p>
        <p>Why does this help? It ensures you always know what data you’re dealing with. If the API changes its structure, TypeScript will alert you immediately.</p>
      </section>

      <section>
        <h2>Practice</h2>
        <p>Write a function that fetches user data from a mock API, ensuring the response includes a name, email, and id.</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
interface UserData {
  id: number;
  name: string;
  email: string;
}

async function fetchUserData(): Promise<UserData> {
  const response = await fetch("https://api.mock.com/user");
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    email: data.email,
  };
}`}
        </code></pre>
      </section>
    </div>
  );
};

export default Task5;
