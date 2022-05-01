const Engineer = require('../lib/Engineer');

test('gets initial data from employee', () => {
    const engineer = new Engineer('Matt', 12345, 'email');

    expect(engineer.name).toBe('Matt');
    expect(engineer.id).toEqual(12345);
    expect(engineer.email).toEqual('email');
});

test('gets engineer github account', () => {
    const engineer = new Engineer('Matt', 12345, 'email', 'taystarr');

    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('returns engineer role as engineer', () => {
    const engineer = new Engineer('Matt', 12345, 'email', 'taystarr');

    expect(engineer.role).toBe('Engineer');
});