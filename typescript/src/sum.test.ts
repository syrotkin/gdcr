import { sum, Person } from "./sum";

describe('sum', () => {
  it('should add 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should print person\'s name', () => {
    const person: Person = {
      firstname: 'Bob',
      lastname: 'Jones'
    };
    console.log(person.firstname);
    expect(person.firstname).toBe('Bob');
  });
});