// Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
    return string.split(/(?=[A-Z])/).join(" ");
}

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

const solution = string => string.replace(/[A-Z]/g, ' $&');
