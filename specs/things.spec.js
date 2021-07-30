test('expectation', () => {
  expect('Some String').toBe('Some String');
  // toBe tests primitive types, like strings and numbers.
  expect(13).toBe(13);

  // toEqual tests objects.
  expect([13]).toEqual([13]);
  
  // any tests the object structure, ignoring the values.
  const result = {
    value: Date.now(),
  };

  expect(result).toEqual({
    value: expect.any(Number),
  });
});