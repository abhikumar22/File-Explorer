import { useState } from 'react';
import './style.css';
const FileRenderer = ({ folder }) => {
    const [isActive, setActive] = useState(false);
    const isFolderHaveSubfolders = !!(folder && folder.subfolders && folder.subfolders.length > 0);
    return (
        <div
            className="Folder_Wrapper">
            <div
                onClick={() => setActive(!isActive)}
                className={`Folder_Name ${isFolderHaveSubfolders ? `Clickable` : ``}`}>
                {folder.name}{isFolderHaveSubfolders ? isActive ? ' -' : ' +' : ''}
            </div>
            {isFolderHaveSubfolders &&
                folder.subfolders.map(subfolder => (
                    isActive &&
                    <div className="Sub_Folders"
                        key={subfolder.id}>
                        <FileRenderer
                            folder={subfolder} />
                    </div>
                ))}
        </div>
    );
}

export default FileRenderer;