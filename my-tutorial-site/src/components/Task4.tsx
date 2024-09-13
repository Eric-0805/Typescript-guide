// src/components/TSIntro.tsx
import React from 'react';

const Task4: React.FC = () => {
  return (
    <div className="typescript-with-react">
      <h1>5. TypeScript with React: Building a Component</h1>
      
      <section>
        <h2>Learning Goal</h2>
        <p>Build a React component with TypeScript, focusing on typing props and state.</p>
      </section>

      <section>
        <h2>Typing Props in React</h2>
        <p>In React, props are the way components receive data. With TypeScript, we can define what type of props a component expects.</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
}`}
        </code></pre>
        <p>Here, the <code>Greeting</code> component expects a <code>name</code> prop, which must be a string.</p>
        <p>Why does this help? It prevents you from accidentally passing the wrong data to components. TypeScript will show an error if you try to pass a number instead of a string.</p>
      </section>

      <section>
        <h2>Practice</h2>
        <p>Create a <code>TodoItem</code> component that accepts a <code>todo</code> prop. The <code>todo</code> should have <code>id</code>, <code>title</code>, and <code>completed</code> properties. Type these props correctly!</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}`}
        </code></pre>
      </section>
    </div>
  );
};

export default Task4;
