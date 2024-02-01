import React, { useRef } from 'react';
import Header from './components/Header';
import Detail from './components/Detail';
import Buttons from './components/Buttons';
import { useReactToPrint } from 'react-to-print';

function App() {
  const componentRef = useRef();

  const print = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Invoice'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100vh' }}>
      <div ref={componentRef}>
        <Header />
        <Detail />
      </div>
      <Buttons print={print} />
    </div>
  );
}

export default App;
