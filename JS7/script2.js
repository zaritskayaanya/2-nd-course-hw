function filter(arr, str) {
    const loverStr = str.toLoverCase();
    return arr.filter(item => item.toLoverCase().starWith(loverStr));
}
console.log(filter(['JavaScript', 'Python', 'Java'], 'ja'));


