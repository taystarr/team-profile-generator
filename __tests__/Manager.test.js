const Manager = require('../lib/Manager');

test('gets initial data from employee', () => {
    const manager = new Manager('Matt', 12345, 'email');

    expect(manager.name).toBe('Matt');
    expect(manager.id).toEqual(12345);
    expect(manager.email).toEqual('email');
});

test('gets manager office number', () => {
    const manager = new Manager('Matt', 12345, 'email', 1738);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('returns manager role as manager', () => {
    const manager = new Manager('Matt', 12345, 'email', 1738);

    expect(manager.role).toBe('Manager');
});