# ProgressBar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<p align="center">
  <h2 align="center"> Angular Progress Bar</h2>
</p>
<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
   <a href="https://www.npmjs.com/package/@pikepresje/ngx-progress-bar"><img src="https://badge.fury.io/js/angular-progress-bar.svg?style=flat-square" alt="NPM version"></a>
   </p> 
 
 ## Table Of Content
- [Table Of Content](#table-of-content)
- [Introduction](#introduction) 
- [Installation](#installation)
- [Input parameters](#input-parameters)
- [Appearance](#appearance)
  - [Basic](#basic)
  - [With parameters](#with-parameters) 
- [How to use](#how-to-use)
  - [Basic](#basic-use)
  - [With parameters](#with-parameters-use) 


## Introduction ##

Angular progress bar is a component available from Angular 4 and greater.

This component offers simple ways to display the progress using parameters.
    
  
## Installation ##

Type the following command to install the package:
    
```shell
npm install @PikePresje/ngx-progress-bar@latest --save
```
    
Then you need to import it into your app module

```typescript
import {NgxProgressBarModule} from "@PikePresje/ngx-progress-bar"

@NgModule({
    imports: [
        NgxProgressBarModule
    ]
})
```

## Input parameters ##

You can pass the following input parameters to customize the view:

| Inputs                   | Description                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| value                    | Sets the value of the progress bar.                                                      |
| fillColor                | The color of bar while is filling. Default value is: `#3f51b5`.                          |
| defaultColor             | The color of empty bar. Default value is: `#bcd1e2`.                                     |
| textFont                 | The font configuratin (like using css). Default value is: `10px Arial, sans-serif`.      |
| textColor                | The color of the text inside bar. Default value is: `white`.                             |
| textPosition             | The position of the text inside bar. Default value is: `centercenter`.                   |
| showText                 | Whether the text must be shown. Default value is: `true`.                                |
| borderRadiusX            | Sets the border radius in pixel for X axis. Default value is: `0`.                       |
| borderRadiusY            | Sets the border radius in pixel for Y axis. Default value is: `0`.                       |
| showPercentageSymbol     | Whether to show the percentage symbol after the value. Default value is: `true`          |
| percentagePipeDigitInfo  | Decimal representation options, specified by a string. Refer to: Angular percent pipe https://angular.io/api/common/PercentPipe |
| showPercentageSymbol     | A locale code for the locale format rules to use. When not supplied, uses the value of LOCALE_ID, which is en-US by default. Refer to: Angular percent pipe https://angular.io/api/common/PercentPipe |


---------------------------------------------------------------------------------------------------------------------------------------

Text position allowed values:

| Values          | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| startstart     | Text starts from left top.                                                               |
| startcenter    | Text starts from left center.                                                            |
| startend       | Text starts from left bottom.                                                            |
| centerstart    | Text starts from center top.                                                             |
| centercenter   | Text starts from center center.                                                          |
| centerend      | Text starts from center bottom.                                                          |
| endstart       | Text starts from righ top.                                                               |
| endcenter      | Text starts from right center.                                                           |
| endend         | Text starts from right bottom.                                                           |



## Appearance ##

### Basic ###
  <img src="./assets/basic progress bar.jpg?raw=true" alt="Appearence">
  
### With parameters ###
  <img src="./assets/with parameters progress bar.jpg?raw=true" alt="Appearence">
  
  
## How to use ##

### Basic use ###

The basic display uses only value input.
  
```html
<ngx-progress-bar  [value]="50"> </ngx-progress-bar>
```

### With parameters use ###

 Using parameters you can modify the appearance of the progress bar component.

```html
<ngx-progress-bar  [value]="50" [showText]="true" [fillColor]="'OrangeRed'"  > </ngx-progress-bar>

<ngx-progress-bar [value]="value" [borderRadiusX]="50" [borderRadiusY]="50"></ngx-progress-bar>

<ngx-progress-bar style="width:300px; height:30px;" [value]="value" [borderRadiusX]="50" [borderRadiusY]="50">
</ngx-progress-bar>

<ngx-progress-bar style="width:300px; height:30px;" [fillColor]="fillColor" [value]="value" [borderRadiusX]="50"
   [borderRadiusY]="50"></ngx-progress-bar>

<ngx-progress-bar style="width:300px; height:30px;" [fillColor]="fillColor" [value]="value" [showText]="true"
   [borderRadiusX]="50" [borderRadiusY]="50"></ngx-progress-bar>

<ngx-progress-bar style="width:300px; height:30px;" [fillColor]="fillColor" [value]="value" [showText]="true"
   [textFont]="'12px Arial, sans-serif'">
</ngx-progress-bar>

<ngx-progress-bar style="width:300px; height:30px;" [fillColor]="fillColor"
   [textPosition]="TextPosition.endcenter" [value]="value" [showText]="true"
   [textFont]="'14px Arial, sans-serif'">
</ngx-progress-bar>

  ```

