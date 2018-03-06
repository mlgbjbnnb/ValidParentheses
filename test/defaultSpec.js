import validParentheses from '../ValidParentheses';

describe("The validParentheses function", () => {
  let case1, case2, case3, case4;

  beforeEach(() => {
    case1 = '()';
    case2 = ')(()))';
    case3 = '(';
    case4 = '(())((()())())';
  });
  afterEach(() => {
    case1 = '';
    case2 = '';
    case3 = '';
    case4 = '';
  });

  it("should output true for case1", () => {
    let result = validParentheses(case1);
    expect(result).toBe(true);
  });

  it("should output false for case2", () => {
    let result = validParentheses(case2);
    expect(result).toBe(false);
  });

  it("should output false for case3", () => {
    let result = validParentheses(case3);
    expect(result).toBe(false);
  });

  it("should output true for case4", () => {
    let result = validParentheses(case4);
    expect(result).toBe(true);
  });
});
