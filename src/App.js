import { useState } from 'react';
import { massageFolderData } from './helpers'
import { FOLDER_DUMP_DATA } from './constants'
import FileRenderer from './components/FileRenderer'
import './App.css';

function App() {
  const [folder] = useState([{ name: 'Root', id: 0, subfolders: massageFolderData(FOLDER_DUMP_DATA) }]);
  return (
    <div
      className="App">
      {!!(folder && folder.length > 0) &&
        folder.map(currFolder => (
          <FileRenderer
            key={currFolder.id}
            folder={currFolder} />
        ))}
    </div>
  );
}

export default App;
