import { parser } from "./syntax.js"
import { LRLanguage, LanguageSupport } from "@codemirror/language"

export const tclLanguage = LRLanguage.define({
  parser: parser,
  languageData: {
    commentTokens: { line: "#" },
    indentOnInput: /^\s*[}\]]$/,
    closeBrackets: { brackets: ["(", "[", "{", '"'] }
  }
})

export function tcl() {
  return new LanguageSupport(tclLanguage)
}