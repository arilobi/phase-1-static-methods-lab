class Formatter {
  // Capitalize
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  //  Sanitize
static sanitize(string) {
  return string.replace(/[^a-zA-Z0-9-' ]/g, '');
}
}