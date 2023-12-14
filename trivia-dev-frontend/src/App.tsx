import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Trivia DEV';
  }, []);

  return (
    <div>
      {/* Conteúdo da sua aplicação */}
    </div>
  );
};

export default App;
