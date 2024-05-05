db.createCollection("student", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "jod"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name is string only",
          maxLength: 30,
        },
        age: {
          bsonType: "int",
          description: "Age is integer",
          minimum: 12,
          maximum: 50,
        },
        jod: {
          bsonType: "date",
          description: "jod is Date",
        },
        course: {
          bsonType: "array",
          item: {
            bsonType: "string",
          },
          description: "course is string",
        },
      },
    },
  },
});

db.student.insertOne({
  name: "Avani",
  age: 45,
  jod: new Date("2021-6-12"),
  course: ["java", "c++", "Python"],
});
