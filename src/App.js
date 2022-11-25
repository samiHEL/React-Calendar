import * as React from 'react';
import { Calendar } from './composants/Calendar';
import styled from 'styled-components';

import './styles.css';
import Event from './composants/Event';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
    return (




        <div className="App">
            <center><h1>Simple Calendar</h1></center>
            <center><Calendar /></center>
            <Event />

        </div>

    );
}

// const rootElement = document.getElementById('root');
// render(<App />, rootElement);
export default App;