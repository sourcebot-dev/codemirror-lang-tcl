#!/usr/bin/env node

// Simple script to parse a Tcl file and dump its AST
// Usage: node dump-ast.js <tcl-file>

import fs from 'fs';
import path from 'path';

async function dumpAst(filePath) {
  try {
    // Import the Tcl extension
    const { tclLanguage } = await import('./dist/index.js');
    
    // Read the Tcl file
    const code = fs.readFileSync(filePath, 'utf-8');
    console.log(`Parsing file: ${filePath}`);
    console.log(`File size: ${code.length} characters`);
    console.log('=' .repeat(50));
    
    // Parse the code
    const tree = tclLanguage.parser.parse(code);
    
    // Dump the AST
    console.log('AST Structure:');
    console.log('-'.repeat(30));
    
    function printTree(cursor, indent = 0) {
      const spaces = '  '.repeat(indent);
      const nodeText = code.slice(cursor.from, cursor.to);
      const displayText = nodeText.length > 50 ? 
        nodeText.slice(0, 47) + '...' : nodeText;
      const escapedText = displayText.replace(/\n/g, '\\n').replace(/\t/g, '\\t');
      
      console.log(`${spaces}${cursor.name} [${cursor.from}-${cursor.to}]: "${escapedText}"`);
      
      if (cursor.firstChild()) {
        do {
          printTree(cursor, indent + 1);
        } while (cursor.nextSibling());
        cursor.parent();
      }
    }
    
    const cursor = tree.cursor();
    printTree(cursor);
    
    // Summary statistics
    console.log('\n' + '='.repeat(50));
    console.log('Summary:');
    console.log(`Total tree length: ${tree.length}`);
    console.log(`Coverage: ${(tree.length / code.length * 100).toFixed(1)}%`);
    
    // Count node types
    const nodeTypes = {};
    function countNodes(cursor) {
      nodeTypes[cursor.name] = (nodeTypes[cursor.name] || 0) + 1;
      if (cursor.firstChild()) {
        do {
          countNodes(cursor);
        } while (cursor.nextSibling());
        cursor.parent();
      }
    }
    
    const statsCursor = tree.cursor();
    countNodes(statsCursor);
    
    console.log('\nNode type distribution:');
    Object.entries(nodeTypes)
      .sort(([,a], [,b]) => b - a)
      .forEach(([type, count]) => {
        console.log(`  ${type}: ${count}`);
      });
      
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Main execution
const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node dump-ast.js <tcl-file>');
  console.error('');
  console.error('Example test files available:');
  console.error('  node dump-ast.js test/fixtures/basic.tcl');
  console.error('  node dump-ast.js test/fixtures/procedures.tcl');
  console.error('  node dump-ast.js test/fixtures/real-world.tcl');
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

dumpAst(filePath);