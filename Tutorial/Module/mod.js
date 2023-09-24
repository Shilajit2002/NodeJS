console.log("This is Mod.js");

function average(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum / (arr.length);
}

// Export Single Variable
// module.exports=average;

// Export the Multiple Variables
module.exports = {
    avg: average,
    name: "Shilajit",
    repo: "Git Hub"
}