# Angular - Codemirror component

Use the [CodeMirror (5.x)](http://codemirror.net/) code editor in your Angular application.

| versione          | Typescript Support      | Angular Support |
| :-------------:   |:-----------------------:| :--------------:|
|      ^1.x.x       |        ~2.3.3           |     ^4.2.4      |
|      ^2.x.x       |        ^2.4.2           |     ^5.0.0      |
|      ^3.x.x       |        ~2.9.2           |     ^6.0.0      |
|      ^4.x.x       |        ~3.2.2           |     ^7.0.0      |
|      ^5.x.x       |        ~3.5.3           |     ^8.0.0      |
|      ^6.x.x       |        ~3.8.3           |     ^9.0.0      |

**NB:**

- Breaking Changes:
  - from version 5.x.x angular 7 is not supported.
  - from version 4.x.x angular 6 is not supported.
  - from version 3.x.x angular 2,4 and 5 not are more supported.

### <a name="install"></a>Installation

- Include Codemirror javascript files in your application (with files for modes)
- Install lt-codemirror
  - NPM : `npm install lt-codemirror`

### <a name="dependencies"></a>Dependencies
CodeMirror library is required for this component, if NPM doesn't install it for you, type this :

```bash
  
  npm install codemirror

```

CodeMirror need to be accessible by `import 'codemirror'`

Then you need to include base CSS and base JS of codemirror in angular.json

```json
  {
    "build": {
          "options": {
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "./node_modules/codemirror/lib/codemirror.css",
              "./node_modules/codemirror/theme/dracula.css"
            ],
            "scripts": [
              "./node_modules/codemirror/lib/codemirror.js",
              "./node_modules/codemirror/mode/htmlmixed/htmlmixed.js"
            ]
          },
  }
```

### <a name="sample"></a>Sample

Include `CodemirrorModule` in your main module :

```javascript
import { CodemirrorModule } from 'lt-codemirror';

@NgModule({
  // ...
  imports:      [
    CodemirrorModule
  ],
  // ...
})
export class AppModule { }
```

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
    <codemirror [(ngModel)]="code"
      [config]="{...}"
      [size]="{w:'100%',h:477}"
      (focus)="onFocus()"
      (blur)="onBlur()">
    </codemirror>
  `
})
export class Sample{
  constructor(){
    this.code = `// Some code...`;
  }
}
```

if you want to change the themes or add mode, you must add this simple line

### Example

```json
  {
    "apps": [{
      "styles": [
        "../node_modules/codemirror/lib/codemirror.css",
        "../node_modules/codemirror/theme/dracula.css",
      ],
      "scripts": [
        "../node_modules/codemirror/lib/codemirror.js",
        "../node_modules/codemirror/mode/htmlmixed/htmlmixed.js"
      ]
    }]
  }
```

```javascript
import { Component } from '@angular/core';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'sample',
  template: `
    <codemirror [(ngModel)]="code"
      [config]="config"
      [size]="{w:'100%',h:477}"
      (focus)="onFocus()"
      (blur)="onBlur()">
    </codemirror>
  `
})
export class Sample{
  constructor(){
    this.code = `// Some code...`;
    this.config = {
      lineNumbers: true,
      mode : 'htmlmixed',
      styleActiveLine: true,
      matchBrackets: true,
      theme: 'dracula'
    }
  }
}
```

# New Implementation

- Added the Size for TextArea


### <a name="config"></a>Configuration

* `config` : The configuration object for CodeMirror see http://codemirror.net/doc/manual.html#config

Credits to **[Simon Babay](https://github.com/chymz)** forked from the [original package](https://github.com/chymz/ng2-codemirror).

### <a name="licence"></a>Licence
See `LICENSE` file
