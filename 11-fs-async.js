// Async file reading using callback hell

// Anything in the stack with a callback gets pushed to the webapis/ c++ libraries and then eventually to the task queue. When the event loop sees that the stack is empty, it pushes the callback function from the task queue to the stack (https://youtu.be/8aGhZQkoFbQ?t=1014)

const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    // console.log(first)
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        
        // console.log(second)
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`
            ,(err,result)=>{
                if(err){
                    console.log(err)
                }
                // console.log(result) // result prints undefined but the file gets written
                console.log('done with the write file task')
            }

        )
    })
})

console.log('starting the next task')