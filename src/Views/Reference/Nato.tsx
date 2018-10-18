import * as React from 'react';
import NatoTable from '../../Reference/NatoTable';
import './CharacterEncodings.css';

class Nato extends React.Component {
    public render() {
      return (
        <div className="NatoTable">
          <div className="NatoTable-content">
            <NatoTable />
          </div>
        </div>
      );
    }
  }
  
export default Nato;
  