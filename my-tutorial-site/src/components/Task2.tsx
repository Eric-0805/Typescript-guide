// src/components/TSIntro.tsx
import React from 'react';

const Task2: React.FC = () => {
  return (
    <div className="interfaces-object-types">
    <h1>3. Understanding Interfaces and Object Types</h1>
    
    <section>
      <h2>Learning Goal</h2>
      <p>Learn how to use interfaces to describe the shape of objects.</p>
    </section>

    <section>
      <h2>What are Interfaces?</h2>
      <p>An interface is like a blueprint for an object. It defines what properties and types an object should have.</p>
      
      <h3>Example</h3>
      <pre><code>
        {`// TypeScript
interface User {
name: string;
age: number;
isAdmin: boolean;
}

const user: User = {
name: "Alice",
age: 25,
isAdmin: false
};`}
      </code></pre>
      <p>Here, <code>User</code> is an interface that defines the properties every user object must have: a <code>name</code> (string), an <code>age</code> (number), and a boolean <code>isAdmin</code>.</p>
      <p>Why does this help? If you ever forget a property or use the wrong type, TypeScript will alert you. For example, if you try to create a user without an <code>age</code>, TypeScript will show an error.</p>
    </section>

    <section>
      <h2>Practice</h2>
      <p>Create an interface for a <code>Car</code> with properties <code>make</code>, <code>model</code>, and <code>year</code>. Then create a variable <code>myCar</code> that follows the <code>Car</code> interface.</p>
      
      <h3>Example</h3>
      <pre><code>
        {`// TypeScript
interface Car {
make: string;
model: string;
year: number;
}

const myCar: Car = {
make: "Toyota",
model: "Corolla",
year: 2020
};`}
      </code></pre>
    </section>
  </div>
);
};

export default Task2;
