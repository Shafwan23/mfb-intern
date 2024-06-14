import React from "react";
import MyComponent from "./MyComponent"; // Assuming your component file is named MyComponent.tsx

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">{/* Other content */}</header>
      <main>
        <MyComponent />
        {/* Other content */}
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default App;
