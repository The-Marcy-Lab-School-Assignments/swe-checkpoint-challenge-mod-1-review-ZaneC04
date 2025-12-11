// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const chars = title.split('');
  let slug = '';
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '!' || chars[i] === '#' || chars[i] === '?') {
      return null;
    }
    if (chars[i] === ' ') {
      slug += '-';
      continue;
    }
    slug += chars[i].toLowerCase();
  }
  return slug;
};

console.log(createSlug('Hello World')); // "hello-world"
console.log(createSlug('My First Blog Post')); // "my-first-blog-post"
console.log(createSlug('JavaScript Is AWESOME')); // "javascript-is-awesome"
console.log(createSlug('JavaScript Is #AWESOME!?')); // null

module.exports = {
  createSlug,
};
