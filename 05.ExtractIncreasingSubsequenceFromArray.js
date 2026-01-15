function nonDecreasingSubset(arr) {
  return arr.reduce((result, num) => {
    // ако резултатът е празен -> взимаме първото число
    if (result.length === 0) {
      result.push(num);
      return result;
    }

    const currentMax = result[result.length - 1];

    // добавяме само ако е >= текущия максимум
    if (num >= currentMax) {
      result.push(num);
    }

    return result;
  }, []);
}
console.log(nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
