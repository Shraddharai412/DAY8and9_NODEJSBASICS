const fs=require('fs');


// Task 1: Read to a file
// fs.readFile('filemodules.txt','utf8',(err,data)=>{
//     if(err){
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
// });

//task2 : Write to a file
// fs.writeFile('filemodules.txt','This is a new content for the file.',(err)=>{
//     if(err){
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File written successfully.');
// });

//task 3 delete a file
// fs.unlink('filemodules.txt',(err)=>{
//     if(err){
//         console.error('Error deleting file:', err);
//         return;
//     }
//     console.log('File deleted successfully.');
// });


// task 4 creating same file
// fs.writeFile('filemodules.txt','This is a new content for the file.',(err)=>{
//     if(err){
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File written successfully.');
// });

//task 5 : deleting a file after 5 seconds
fs.writeFile('log.txt','This is a log file.',(err)=>{
    if(err){
        throw err;
    }
    const timestamp = `Logged at: ${new Date().toISOString()}\n`;
    fs.appendFile('log.txt', timestamp, (err) => {
        if(err){
            throw err;
        }
        console.log('Timestamp appended successfully.');
    });
    console.log('File written successfully.');
    
    // Delete the file after 5 seconds
    setTimeout(() => {
        fs.unlink('log.txt', (err) => {
            if(err){
               throw err;
            }
            console.log('File deleted successfully after 5 seconds.');
        });
    }, 5000);
});