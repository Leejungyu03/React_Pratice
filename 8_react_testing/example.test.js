describe("expect test", () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3)
  });
  it('{age: 39} to equal {age: 39}', () => {
    expect({age: 39}).toEqual({age: 39}) // toBe 쓰면 안됨
  });
  it('.toHaveLength', () => {
    expect("Hello").toHaveLength(5)
  });
  it('.toHaveProperty', () => {
    expect({name: "Mark"}).toHaveProperty("name")
    expect({name: "Mark"}).toHaveProperty("name", "Mark")
  });
  it('.toBeDefined', () => {
    expect({name: "Mark"}.name).toBeDefined()
  });
  it('.toBeFalsy', () => {
    expect(false).toBeFalsy()
    expect(0).toBeFalsy()
    expect("").toBeFalsy()
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
    expect(NaN).toBeFalsy()
  });
  it('.toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(9)
  })
  it('.toBeGreaterThanOrEqual', () => {
    expect(10).toBeGreaterThanOrEqual(10)
  })
  it('.toBeInstanceOf', () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo)
  })
})