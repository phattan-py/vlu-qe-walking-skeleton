const checkLogin = require('./login');

test('đăng nhập thành công với admin/123', () => {
  expect(checkLogin('admin', '123')).toBe(true);
});

test('đăng nhập thất bại với sai mật khẩu', () => {
  expect(checkLogin('admin', 'wrongpass')).toBe(false);
});

test('đăng nhập thất bại với sai username', () => {
  expect(checkLogin('user', '123')).toBe(false);
});
