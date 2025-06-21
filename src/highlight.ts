import { styleTags, tags as t } from "@lezer/highlight"

export const tclHighlight = styleTags({
  // Procedure definitions and calls
  ProcName: t.definition(t.function(t.name)),
  ProcInvocationName: t.function(t.name),
  
  // Set expressions
  SetKeyword: t.definitionKeyword,
  VarName: t.definition(t.variableName),
  
  // Package commands
  PackageName: t.special(t.string),
  PackageVersion: t.number,
  
  // Keywords
  procKeyword: t.definitionKeyword,
  ProcKeyword: t.definitionKeyword,
  setKeyword: t.definitionKeyword,
  packageKeyword: t.definitionKeyword,
  requireKeyword: t.keyword,
  provideKeyword: t.keyword,
  TclKeyword: t.keyword,
  
  // Core command keywords
  exprKeyword: t.operatorKeyword,
  putsKeyword: t.keyword,
  
  // Control flow keywords
  ifKeyword: t.controlKeyword,
  IfKeyword: t.controlKeyword,
  elseKeyword: t.controlKeyword,
  ElseKeyword: t.controlKeyword,
  elseifKeyword: t.controlKeyword,
  ElseifKeyword: t.controlKeyword,
  whileKeyword: t.controlKeyword,
  WhileKeyword: t.controlKeyword,
  forKeyword: t.controlKeyword,
  ForKeyword: t.controlKeyword,
  foreachKeyword: t.controlKeyword,
  ForeachKeyword: t.controlKeyword,
  switchKeyword: t.controlKeyword,
  SwitchKeyword: t.controlKeyword,
  returnKeyword: t.controlKeyword,
  breakKeyword: t.controlKeyword,
  continueKeyword: t.controlKeyword,
  
  // Variable and scope keywords
  globalKeyword: t.modifier,
  variableKeyword: t.modifier,
  uplevelKeyword: t.keyword,
  upvarKeyword: t.keyword,
  
  // List manipulation keywords
  listKeyword: t.keyword,
  llengthKeyword: t.keyword,
  lindexKeyword: t.keyword,
  lappendKeyword: t.keyword,
  linsertKeyword: t.keyword,
  lreplaceKeyword: t.keyword,
  lsearchKeyword: t.keyword,
  lsortKeyword: t.keyword,
  joinKeyword: t.keyword,
  splitKeyword: t.keyword,
  
  // String manipulation keywords
  stringKeyword: t.keyword,
  regexpKeyword: t.keyword,
  regsubKeyword: t.keyword,
  formatKeyword: t.keyword,
  scanKeyword: t.keyword,
  
  // Array and dict keywords
  arrayKeyword: t.keyword,
  dictKeyword: t.keyword,
  
  // Variable manipulation keywords
  incrKeyword: t.keyword,
  appendKeyword: t.keyword,
  unsetKeyword: t.keyword,
  
  // Introspection keywords
  infoKeyword: t.keyword,
  
  // Evaluation keywords
  evalKeyword: t.keyword,
  sourceKeyword: t.keyword,
  
  // Program control keywords
  exitKeyword: t.controlKeyword,
  errorKeyword: t.keyword,
  catchKeyword: t.controlKeyword,
  tryKeyword: t.controlKeyword,
  TryKeyword: t.controlKeyword,
  finallyKeyword: t.controlKeyword,
  FinallyKeyword: t.controlKeyword,
  throwKeyword: t.controlKeyword,
  
  // Namespace keywords
  namespaceKeyword: t.keyword,
  
  // System keywords
  clockKeyword: t.keyword,
  fileKeyword: t.keyword,
  globKeyword: t.keyword,
  cdKeyword: t.keyword,
  pwdKeyword: t.keyword,
  
  // I/O keywords
  openKeyword: t.keyword,
  closeKeyword: t.keyword,
  readKeyword: t.keyword,
  writeKeyword: t.keyword,
  getsKeyword: t.keyword,
  flushKeyword: t.keyword,
  seekKeyword: t.keyword,
  tellKeyword: t.keyword,
  eofKeyword: t.keyword,
  fconfigureKeyword: t.keyword,
  encodingKeyword: t.keyword,
  binaryKeyword: t.keyword,
  
  // Event keywords
  afterKeyword: t.keyword,
  updateKeyword: t.keyword,
  vwaitKeyword: t.keyword,
  traceKeyword: t.keyword,
  
  // Comparison operators
  eqKeyword: t.operator,
  neKeyword: t.operator,
  ltKeyword: t.operator,
  gtKeyword: t.operator,
  leKeyword: t.operator,
  geKeyword: t.operator,
  
  // Literals and strings
  Variable: t.variableName,
  VariableName: t.variableName,
  QuotedString: t.string,
  Number: t.number,
  SimpleWord: t.name,
  Block: t.string,
  CommandSub: t.special(t.string),
  
  // Expression types
  SetExpression: t.keyword,
  SetValue: t.string,
  
  // Comments
  LineComment: t.lineComment,
  
  // Delimiters
  "{ }": t.brace,
  "[ ]": t.squareBracket,
  "$": t.special(t.variableName)
})