const user = {
  name: 'Tony Pepperoni',
  age: 43,
  job: 'Pizza Maker!'
};

test('user matches', () => {
  // In case the snapshot changes, the update (-u) flag needs to be added when calling jest
  // Snapshots *need* to be committed along with the code.
  expect(user).toMatchSnapshot();
});