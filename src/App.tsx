import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <Card width='200px' height='200px' onClick={(num) => console.log('click', num)} variant={CardVariant.primary}>
      <button>button</button>
      <div>some text</div>
    </Card>
  );
};

export default App;