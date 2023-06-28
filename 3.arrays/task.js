function compareArrays(arr1, arr2) {
 if (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])) {
    return true;
 } else {
    return false;
 }
}
 
function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(filteredUser => filteredUser.age)
  .reduce((accumulator, age, index, userAgesArray) => accumulator + age / userAgesArray.length, 0);
return result;
}