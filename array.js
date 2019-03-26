/*var shoppinglist = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"]
var shoppingcart = []
shoppinglist.push("fruit loops");

while (shoppinglist.length > 0) {
    shoppingcart.push(shoppinglist.pop());
}
shoppinglist.splice(4, 1, "fair trade coffee")
shoppinglist.splice(2, 2, "rice", "beans")

console.log(shoppingcart)
*/

var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs: {
        skills: ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};

var i = 0;
var osxList = [];
while (i < course.students.length) {
    if (course.students[i].computer.OS === 'OSX') {
        osxList.push(course.students[i].name);
    }
    i++;
}
console.log(osxList);