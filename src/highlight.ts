import { styleTags, tags as t } from "@lezer/highlight"

export const tclHighlight = styleTags({
  // Procedure definitions and calls
  ProcName: t.definition(t.function(t.name)),
  ProcInvocationName: t.function(t.name),
  
  // Set expressions
  VarName: t.definition(t.variableName),
  
  // Keywords
  procKeyword: t.definitionKeyword,
  setKeyword: t.definitionKeyword,
  TclKeyword: t.keyword,
  
  // Core command keywords
  exprKeyword: t.operatorKeyword,
  putsKeyword: t.keyword,
  
  // Control flow keywords
  ifKeyword: t.controlKeyword,
  elseKeyword: t.controlKeyword,
  elseifKeyword: t.controlKeyword,
  whileKeyword: t.controlKeyword,
  forKeyword: t.controlKeyword,
  foreachKeyword: t.controlKeyword,
  switchKeyword: t.controlKeyword,
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
  finallyKeyword: t.controlKeyword,
  throwKeyword: t.controlKeyword,
  
  // Namespace keywords
  namespaceKeyword: t.keyword,
  packageKeyword: t.keyword,
  
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
  
  // Literals and strings
  Variable: t.variableName,
  Number: t.number,
  QuotedString: t.string,
  BracedString: t.string,
  
  // Comments
  LineComment: t.lineComment,
  
  // Delimiters
  "{ }": t.brace,
  "[ ]": t.squareBracket,
  '"': t.string,
  "$": t.special(t.variableName)
})