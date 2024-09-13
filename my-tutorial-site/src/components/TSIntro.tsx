// src/components/TSIntro.tsx
import React from 'react';

const TSIntro: React.FC = () => {
  return (
    <div className="typescript-introduction">
    <h1>Introduction: What is TypeScript and Why Use It?</h1>
    
    <section>
      <h2>Learning Goal</h2>
      <p>Understand what TypeScript is and how it improves your coding experience.</p>
    </section>

    <section>
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a programming language that builds on JavaScript by adding static types. JavaScript is flexible but doesn't check your code for errors before you run it. TypeScript adds type checking so you can catch mistakes early—before your code even runs!</p>
    </section>

    <section>
      <h2>Why Use It?</h2>
      <ul>
        <li><strong>Catch Errors Early:</strong> TypeScript helps you avoid common mistakes by checking your code as you write it.</li>
        <li><strong>Better Tools:</strong> With TypeScript, your code editor can provide better autocompletion and help you understand your code better.</li>
        <li><strong>Stronger Collaboration:</strong> It makes working in a team easier, as it becomes clearer what each part of the code is supposed to do.</li>
      </ul>
    </section>

    <section>
      <h2>Getting Started</h2>
      <p>To start using TypeScript, follow these steps:</p>
      
      <h3>Install TypeScript</h3>
      <p>Run the following command in your terminal to install TypeScript globally:</p>
      <pre><code>npm install -g typescript</code></pre>
      
      <h3>Create a Basic TypeScript File</h3>
      <p>Create a new file called <code>app.ts</code> and write a basic function in TypeScript:</p>
      <pre><code>
        {`// TypeScript
function greet(name: string) {
return "Hello, " + name;
}
console.log(greet("World"));`}
      </code></pre>
      <p>Here, <code>name: string</code> tells TypeScript that <code>name</code> must be a string.</p>
    </section>

    <section>
      <h2>Practice</h2>
      <p>Change <code>name</code> to a number in the example above. What happens? TypeScript will show an error because <code>name</code> is supposed to be a string!</p>
    </section>
  </div>
);
};

export default TSIntro;
