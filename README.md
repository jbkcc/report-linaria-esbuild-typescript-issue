## Steps to reproduce

```
$ cd /tmp
$ git checkout git@github.com:jbkcc/report-linaria-esbuild-typescript-issue.git
$ cd report-linaria-esbuild-typescript-issue
$ yarn install
yarn install v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 1.08s.

$ ./build.js
✘ [ERROR] [plugin linaria] /private/tmp/report-linaria-esbuild-typescript-issue/src/store.ts: Unexpected token (2:3)

  1 | export class Store {
> 2 |   x: any;
    |    ^
  3 |   method() { }
  4 | }
  5 |

  This error came from the "onLoad" callback registered here:

    node_modules/@linaria/esbuild/lib/index.js:70:12:
      70 │       build.onLoad({
         ╵             ~~~~~~

    at setup (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@linaria/esbuild/lib/index.js:70:13)
    at handlePlugins (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:855:23)
    at Object.buildOrServe (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1149:7)
    at /private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:2117:17
    at new Promise (<anonymous>)
    at Object.build (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:2116:14)
    at Object.build (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1963:51)
    at Object.<anonymous> (/private/tmp/report-linaria-esbuild-typescript-issue/build.js:5:9)
    at Module._compile (node:internal/modules/cjs/loader:1119:14)

1 error
/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1624
  let error = new Error(`${text}${summary}`);
              ^

Error: Build failed with 1 error:
error: /private/tmp/report-linaria-esbuild-typescript-issue/src/store.ts: Unexpected token (2:3)

  1 | export class Store {
> 2 |   x: any;
    |    ^
  3 |   method() { }
  4 | }
  5 |
    at failureErrorWithLog (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1624:15)
    at /private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1266:28
    at runOnEndCallbacks (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1046:63)
    at buildResponseToResult (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1264:7)
    at /private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1377:14
    at /private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:678:9
    at handleIncomingPacket (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:775:9)
    at Socket.readFromStdout (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:644:7)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12) {
  errors: [
    {
      detail: SyntaxError: /private/tmp/report-linaria-esbuild-typescript-issue/src/store.ts: Unexpected token (2:3)

        1 | export class Store {
      > 2 |   x: any;
          |    ^
        3 |   method() { }
        4 | }
        5 |
          at instantiate (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:72:32)
          at constructor (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:367:12)
          at Parser.raise (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:3678:19)
          at Parser.unexpected (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:3716:16)
          at Parser.parseClassMemberWithIsStatic (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:15871:12)
          at Parser.parseClassMember (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:15738:10)
          at /private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:15678:14
          at Parser.withSmartMixTopicForbiddingContext (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:14462:14)
          at Parser.parseClassBody (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:15653:10)
          at Parser.parseClass (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@babel/parser/lib/index.js:15627:22) {
        code: 'BABEL_PARSE_ERROR',
        reasonCode: 'UnexpectedToken',
        loc: Position { line: 2, column: 3, index: 24 },
        pos: [Getter/Setter]
      },
      id: '',
      location: null,
      notes: [
        {
          location: {
            column: 12,
            file: 'node_modules/@linaria/esbuild/lib/index.js',
            length: 6,
            line: 70,
            lineText: '      build.onLoad({\n' +
              '    at setup (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/@linaria/esbuild/lib/index.js:70:13)\n' +
              '    at handlePlugins (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:855:23)\n' +
              '    at Object.buildOrServe (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1149:7)\n' +
              '    at /private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:2117:17\n' +
              '    at new Promise (<anonymous>)\n' +
              '    at Object.build (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:2116:14)\n' +
              '    at Object.build (/private/tmp/report-linaria-esbuild-typescript-issue/node_modules/esbuild/lib/main.js:1963:51)\n' +
              '    at Object.<anonymous> (/private/tmp/report-linaria-esbuild-typescript-issue/build.js:5:9)\n' +
              '    at Module._compile (node:internal/modules/cjs/loader:1119:14)',
            namespace: 'file',
            suggestion: ''
          },
          text: 'This error came from the "onLoad" callback registered here:'
        }
      ],
      pluginName: 'linaria',
      text: '/private/tmp/report-linaria-esbuild-typescript-issue/src/store.ts: Unexpected token (2:3)\n' +
        '\n' +
        '\x1B[0m \x1B[90m 1 |\x1B[39m \x1B[36mexport\x1B[39m \x1B[36mclass\x1B[39m \x1B[33mStore\x1B[39m {\x1B[0m\n' +
        '\x1B[0m\x1B[31m\x1B[1m>\x1B[22m\x1B[39m\x1B[90m 2 |\x1B[39m   x\x1B[33m:\x1B[39m any\x1B[33m;\x1B[39m\x1B[0m\n' +
        '\x1B[0m \x1B[90m   |\x1B[39m    \x1B[31m\x1B[1m^\x1B[22m\x1B[39m\x1B[0m\n' +
        '\x1B[0m \x1B[90m 3 |\x1B[39m   method() { }\x1B[0m\n' +
        '\x1B[0m \x1B[90m 4 |\x1B[39m }\x1B[0m\n' +
        '\x1B[0m \x1B[90m 5 |\x1B[39m\x1B[0m'
    }
  ],
  warnings: []
}

Node.js v18.9.0
```

