function matchPeople(k, a, b) {
  const matches = [];

  for (const person of k) {
    const [gender_i, name_i, age_i] = person;

    if (
      (a == "gender" && b == gender_i) ||
      (a == "name" && b == name_i) ||
      (a == "age" && b == age_i)
    ) {
      matches.push(person);
    }
  }

  return matches;
}

const people = [
  ["male", "jake", "19"],
  ["female", "mully", "21"],
  ["female", "male", 30],
];

const a = "gender";
const b = "male";

//test
const matchedPeople = matchPeople(people, a, b);

console.log("Matching people:", matchedPeople.length);
