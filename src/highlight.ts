import { styleTags, tags as t } from "@lezer/highlight"

export const tclHighlight = styleTags({
  ProcName: t.definition(t.variableName),
  ProcInvocationName: t.function(t.variableName),
  procKeyword: t.keyword,
  "if else elseif while for foreach switch set": t.controlKeyword,
  VariableName: t.variableName,
  Number: t.number,
  QuotedString: t.string,
  BracedString: t.string,
  LineComment: t.lineComment,
  "{ }": t.brace,
  "[ ]": t.squareBracket,
  '"': t.string,
  "$": t.special(t.character)
})