const Intern = require('../lib/Intern');

test('gets initial data from employee', () => {
    const intern = new Intern('Matt', 12345, 'email');

    expect(intern.name).toBe('Matt');
    expect(intern.id).toEqual(12345);
    expect(intern.email).toEqual('email');
});

test('gets intern schoool', () => {
    const intern = new Intern('Matt', 12345, 'email', 'GWU');

    expect(intern.school).toEqual(expect.any(String));
});

test('returns intern role as intern', () => {
    const intern = new Intern('Matt', 12345, 'email');

    expect(intern.role).toBe('Intern');
});