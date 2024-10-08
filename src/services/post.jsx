//////////////LLAMADO POST/////////////
async function PostUsers(usuario, email, contra) {
    try {
     
        const userData = { 
            usuario,
            email,
            contra 
        
        };

        const response = await fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function postTasks(tarea, prioridad) {
    try {
     
        const tasksData = { 
            tarea,
            prioridad 
        
        };

        const response = await fetch("http://localhost:3000/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tasksData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}
export{ PostUsers, postTasks}






