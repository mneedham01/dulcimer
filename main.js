import { move } from "./halfStepConverter"
// // TypeScript has a singleton scanner
// const scanner = ts.createScanner(ts.ScriptTarget.Latest, /*skipTrivia*/ true);

// // That is initialized using a function `initializeState` similar to
// function initializeState(text: string) {
//     scanner.setText(text);
//     scanner.setOnError((message: ts.DiagnosticMessage, length: number) => {
//         console.error(message);
//     });
//     scanner.setScriptTarget(ts.ScriptTarget.ES5);
//     scanner.setLanguageVariant(ts.LanguageVariant.Standard);
// }

// // Sample usage
// initializeState(`
// var foo = 123;
// `.trim());

// // Start the scanning
// var token = scanner.scan();
// while (token != ts.SyntaxKind.EndOfFileToken) {
//     console.log(ts.formatSyntaxKind(token));
//     token = scanner.scan();
// }
console.log('move("C",4"): ')
console.log(move("C",4))