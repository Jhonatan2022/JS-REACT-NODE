//  function isObject(subject) {
//     return typeof subject == "object";
//   };

//  function isArray(subject) {
//     return Array.isArray(subject);
//   };

//  function deepCopy(subject) {
//     let copySubject;

//     const subjectIsObject = SuperObject.isObject(subject);
//     const subjectIsArray = SuperObject.isArray(subject);

//     if (subjectIsArray) {
//       copySubject = [];
//     } else if (subjectIsObject) {
//       copySubject = {};
//     } else {
//       return subject;
//     }

//     for (key in subject) {
//       const keyIsObject = SuperObject.isObject(subject[key]);

//       if (keyIsObject) {
//         copySubject[key] = SuperObject.deepCopy(subject[key]);
//       } else {
//         if (subjectIsArray) {
//           copySubject.push(subject[key]);
//         } else {
//           copySubject[key] = subject[key];
//         }
//       }
//     }

//     return copySubject;
//   };

function SuperObject() {}

SuperObject.isObject = function (subject) {
  return typeof subject == "object";
};

SuperObject.isArray = function (subject) {
  return Array.isArray(subject);
};

SuperObject.deepCopy = function (subject) {
  let copySubject;

  const subjectIsObject = SuperObject.isObject(subject);
  const subjectIsArray = SuperObject.isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = SuperObject.isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = SuperObject.deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
};

function requiredParams(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParams("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //     "_name": name,
  //     "_courses": courses,
  // };

  // const public = {
  //     get name() {
  //         return private["_name"];
  //     },

  //     set name(newName) {
  //         newName.length != 0 ? private["_name"] = newName : console.warn("Tu nombre debe tener al menos 1 caracter");
  //     },

  //     get courses() {
  //         return private["_courses"];
  //     },

  //     set courses(newCourses) {
  //         newCourses.length != 0 ? private["_courses"] = newCourses : console.warn("Tu nombre debe tener al menos 1 caracter");
  //     },
  // };
}

function Student({
  name = requiredParams("name"),
  email = requiredParams("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },

    set(newLP) {
      if (newLP instanceof LearningPath) {
        private["_learningPaths"].push(newLP);
      } else {
        console.warn(
          "Alguno de los LP no es una instancia del prototipo LearningPath"
        );
      }
    },
  });

  //   if (isArray(learningPaths)) {
  //     this._learningPaths = [];

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

const escualaa = new LearningPath({
  name: "nacheeeeb",
  courses: ["Cursxasaxaxasxasxsax"],
});

const esculaf = {
  name: "Escuela de JavaScript",
  courses: ["Curso Definitivo de JavaScript", "Curso Practico de JavaScript"],
};

const escuala = new LearningPath({
  name: "Escuela de desarrollo web",
  courses: ["Curso definitivo de HTML y CSS"],
});

const juan2 = new Student({
  name: "Juanito",
  email: "dc@gmail.com",
  age: 17,
  twitter: "fjuandc",
  learningPaths: [escuala, esculaf, escualaa],
});
