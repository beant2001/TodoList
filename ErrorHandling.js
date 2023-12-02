document.addEventListener('DOMContentLoaded', function() {
    try {
        // Introducing errors

        // Error 1: Accessing an undefined variable
        console.log(undefinedVariable);

        // Error 2: Calling an undefined function
        undefinedFunction();

        // Error 3: Using a non-existent property
        const obj = {};
        console.log(obj.nonExistentProperty);

        // Error 4: Trying to remove an element that doesn't exist
        const nonExistentElement = document.getElementById('nonExistentElement');
        removeTask(nonExistentElement); // Assuming removeTask is defined later in the code

    } catch (error) {
        console.error('An error occurred:', error.message);
    }
});

// Simulating a function that may throw an error
function removeTask(taskItem) {
    if (!taskItem) {
        throw new Error('Task item is undefined or null.');
    }

    taskItem.parentNode.removeChild(taskItem);
}
