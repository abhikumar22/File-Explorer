
/* Recursively Massaging the Folder dump and getting folder and subfolders*/
export const massageFolderData = (data, parentId) => {
    const finalMassagedFolders = [];
    // massaging data as per subfolders and folders so that rendering is easy
    for (const item of data) {
        if ((parentId === undefined && !item.parent) || item.parent === parentId) {
            // checking if it is a directory, and according pushing data
            if (item.isDir) {
                const subfolders = massageFolderData(data, item.id);
                finalMassagedFolders.push({
                    id: item.id,
                    name: item.name || '',
                    subfolders: subfolders || []
                });
            } else {
                finalMassagedFolders.push({
                    id: item.id,
                    name: item.name || '',
                });
            }
        }
    }

    return finalMassagedFolders;
};
