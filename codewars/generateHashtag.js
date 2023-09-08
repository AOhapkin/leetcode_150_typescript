function generateHashtag(str) {
  const words = str.split(' ').filter(word => word.length > 0);

  if (words.length === 0 || words.length > 140) {
    return false;
  }

  let result = '#' + words.map((word) => word[0].toUpperCase() + word.slice(1)).join('');

  return (result.length > 140) ? false : result;
}

console.log(generateHashtag('Do We have A Hashtag'))