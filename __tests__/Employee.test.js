const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Matt', 12345, 'email');

    expect(employee.name).toBe('Matt');
    expect(employee.id).toEqual(12345);
    expect(employee.email).toEqual('email');
});

test('gets employee name', () => {
    const employee = new Employee('Matt', 12345, 'email');

    expect(employee.name).toEqual(expect.any(String));
});

test('gets employee ID number', () => {
    const employee = new Employee('Matt', 12345, 'email');

    expect(employee.id).toEqual(expect.any(Number));
});

test('gets employee email address', () => {
    const employee = new Employee('Matt', 12345, 'email');

    expect(employee.email).toEqual(expect.any(String));
});

test('returns employee role as employee', () => {
    const employee = new Employee('Matt', 12345, 'email');

    expect(employee.role).toBe('Employee');
});