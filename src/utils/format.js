const phoneExpr =
  "(?<areaCode>[0-9]{3})(?<prefix>[0-9]{3})(?<lineNumber>[0-9]{4})";
const phoneRegEx = new RegExp(phoneExpr);

export function phoneNumber(str) {
  const matchObj = phoneRegEx.exec(str);
  const { areaCode, prefix, lineNumber } = matchObj.groups;
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
