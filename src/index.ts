import { parser } from "./syntax.js"
import { LRLanguage, LanguageSupport } from "@codemirror/language"
import { tclHighlight } from "./highlight.js"

export const tclLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [tclHighlight]
  }),
  languageData: {
    commentTokens: { line: "#" },
    indentOnInput: /^\s*[}\]]$/,
    closeBrackets: { brackets: ["(", "[", "{", '"'] }
  }
})

export function tcl() {
  return new LanguageSupport(tclLanguage)
}

// Export highlighting for customization
export { tclHighlight } from "./highlight.js"