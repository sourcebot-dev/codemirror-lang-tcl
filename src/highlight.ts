import { styleTags, tags as t } from "@lezer/highlight"

export const tclHighlight = styleTags({
  CommandName: t.function(t.variableName),
  "if else elseif while for foreach switch proc set": t.controlKeyword,
  VariableName: t.variableName,
  VariableReference: t.special(t.variableName),
  Number: t.number,
  QuotedString: t.string,
  BracedString: t.string,
  StringContent: t.string,
  LineComment: t.lineComment,
  "{ }": t.brace,
  "[ ]": t.squareBracket,
  "( )": t.paren,
  '"': t.string,
  "$": t.special(t.character)
})