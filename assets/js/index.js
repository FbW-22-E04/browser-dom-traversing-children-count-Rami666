
// Get the children of the element with id wrapper and print them to the console as a list.
const wrapper = document.getElementById('wrapper');
console.log(wrapper.children.childElementCount);

// Iterate over them and print their children to the console, as well as how many they are.
for (let i = 0; i < document.getElementById('wrapper').children.length; i++) {
    console.log(wrapper.children[i].children);
    console.log(wrapper.children[i].children.length);
    }


function getMostClasses() {
    let mostClasses = 0;
    let mostClassesElement = null;
    for (let i = 0; i < document.getElementById('wrapper').children.length; i++) {
        if (wrapper.children[i].classList.length > mostClasses) {
            mostClasses = wrapper.children[i].classList.length;
            mostClassesElement = wrapper.children[i];
        }
    }
    return {element: mostClassesElement, classes: mostClasses};
}

console.log(getMostClasses());



