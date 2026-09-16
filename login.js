function checkLogin(username, password) {
  if (username === 'admin' && password === '1234') {
    return true;
  }
  return false;
}

// Export để dùng trong Node.js (Jest)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = checkLogin;
}
