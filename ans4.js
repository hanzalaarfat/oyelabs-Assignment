const person = {
  id: 2,
  gender: "mail",
};
const student = {
  name: "ravi",
  email: "ravi11@yopmail.com",
};
const newobj = Object.assign({}, person, student);
console.log("newobj", newobj);
