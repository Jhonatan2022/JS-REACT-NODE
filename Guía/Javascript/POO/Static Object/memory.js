// function isObject(subject) {
//     return typeof subject == "object";
// }

// function isArray(subject) {
//     return Array.isArray(subject);
// }

// function deepCopy(subject) {
//     let copySubject;

//     const subjectIsObject = isObject(subject);
//     const subjectIsArray = isArray(subject);

//     if (subjectIsArray) {
//         copySubject = [];
//     } else if (subjectIsObject) {
//         copySubject = {};    
//     } else {
//         return subject;
//     }

//     for (key in subject) {
//         const keyIsObject = isObject(subject[key]);

//         if (keyIsObject) {
//             copySubject[key] = deepCopy(subject[key]);
//         } else {
//             if (subjectIsArray) {
//                 copySubject.push(subject[key]);
//             } else {
//                 copySubject[key] = subject[key];
//             }
//         }
//     }

//     return copySubject;
// }

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined,
//     },
// };

// const juan = deepCopy(studentBase);
// Object.defineProperty(juan, "name", {
//     value: "Juanito",
//     configurable: false,
// });

function requiredParams(param) {
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requiredParams("name"),
    email = requiredParams("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
}) {
    return {
        name,
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
    };
}

const juan2 = createStudent({
    name: "Juanito",
    age: 17,
    twitter: "fjuandc",
});
