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
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};
console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.preReqs.equipment);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions.join(' or '));
ListofOSX = []
for (i = 0; i < course.students.length; i++) {
  if (course.students[i].computer.OS === 'OSX'){
    ListofOSX.push(course.students[i])
  }
}
console.log(ListofOSX);
