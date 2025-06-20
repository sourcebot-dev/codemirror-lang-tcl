# CodeMirror Tcl Language Support

A CodeMirror 6 extension that provides Tcl syntax highlighting and language support with comprehensive procedure parsing.

## Usage

```typescript
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { tcl } from 'codemirror-lang-tcl';
import { basicSetup } from 'codemirror';

new EditorView({
  state: EditorState.create({
    doc: `# Tcl procedure example
proc greet {name} {
    puts "Hello, $name!"
    return "Greeting sent to $name"
}

# Call the procedure
set result [greet "World"]
puts $result`,
    extensions: [basicSetup, tcl()],
  }),
  parent: document.querySelector('#editor'),
});
```

## Development and Testing

After making changes to the grammer, run `yarn build-grammar && yarn build` to generate the parser.

Use the `dump-ast.js` script to dump the AST of a file to the console. Example:

```bash
node dump-ast.js test/file-processing-test.tcl
```






