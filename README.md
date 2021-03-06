# :zap: Javascript Front End Certification

* Contains my code created to meet challenges in the JavaScript Full Stack Web Development Program at Free Code Camp. Help from Youtube videos and other info sources is acknowledged in the 'Inspiration' section below.

## :page_facing_up: Projects

* **FCC Pomodoro Timer:** Uses jQuery to show/hide elements (such as buttons) in the DOM. setInterval and clearInterval methods used to set and clear time in seconds. It works ok in normal PC screen size but is not fully-responsive - in phone-sized screen the timer is too small. Some of the colours (esp. timer background) do not give buttons sufficient contrast.

* **FCC Portfolio Page:** responsive personal website created using html & css. Includes Youtube video that plays using iframe.

* **FCC Simon Game:** uses html, css and jQuery to create this famous game that flashes 4 coloured buttons and plays 4 different audio files. Player sequence compared with random sequence to see if player can progress to a longer sequence. Includes strict mode that resets if a mistake is made.

* **FCC Survey Form:** uses html and css. No javascript - form Submit button does not do anything. Form reset button does clear form field contents. Does not resize properly but this was not required to pass the 17 tests.

* **Wikipedia Viewer:** uses tml, css and jQuery. An Ajax call is used to get wikipedia API info and perform a function (using the ajax success method to output API data).

* **Tic Tac Toe:** uses html, css & jQuery. This is no longer in the fcc curriculum. I didn't use the Minimax algorithm to make the ai side more unbeatable so the game is not that challenging but it passes the fcc tests. Uses a main function and separate functions for move(), ai() - a simple random move by the pc to any of 9 unused squares, finishgame() - shows messages to say who won, checkWon() - compares results with an array of horiz and vertical winning lines & reset().

* **Javascript Calculator** uses html, css & javascript. Simple hmtl/css keypad that is not very responsive but that was not a requirement to pass the tests. Javascript uses eval function to perform actual calculation. Function to prevent operands being registered more than 1x. Functions to clear last value entered and clear entire screen.

* **Personal Portfolio Page** uses html and css. Simple partly-responsive website to learn basic website layout. Very early work so layout has errors but it passed the tests. It does have working navigation.

* **Random Quote** updated 0ct/2019: uses html, css & jQuery. gets random quotes from a REST API to display in html. Resizes down to mobile phone xs size. Original API no longer working so end point changed to another free API called kanye.rest which just returns random quotes - no auther field.

* **FCC Landing Page** uses html and css. very similar to Personal Portfolio Pages - created for FCC Design Projects. Working navigation. Responsive.

* **Twitch TV** uses html, css, javascript & jQuery to get json data from the Twitch TV API. This was an FCC project challenge but it is not in the new syllabus. The Twitch TV end point has changed. Get requests receive unauthorised response 401. May need new access key. All get request addresses need to be updated. Code should be refactored to reduce duplication. [Link to Twitch API dev page](https://dev.twitch.tv/docs/api/reference#get-streams).

## :computer: Algorithms

### Array methods used

**call** calls a function with a given this value and arguments provided individually,

**concat** merges 2 or more arrays. Existing arrays not changed.

**every** tests whether all elements in the array pass the test implemented by the provided function, returns a Boolean,

**filter** creates a new array with all elements that pass the test in the function contained.

**find** returns the value of the first element in an array that pass a test.

**findIndex** returns the index of the first element in an array that pass a test

**flat**, creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

_Examples:
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]_

**forEach** executes a provided function once for each value in the Set object, in insertion order.

**from** alternative to map()

**includes** checks whether a specified value is included in the array, returning true or false.

**indexOf()** method returns the first index at which a given element can be found in the array, or -1 if it is not present.

**Mathfloor** rounds number downwards to nearest integer,

**Math.max** returns the largest of 0 or more numbers.

**Math.min** returns the lowest-value number.
_e.g. var array1 = [2, 3, 1]; console.log(Math.min(...array1)); // expected output: 1_

**reduce** executes a reducer function on each element of an array.

**reduceRight** applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value e.g. `const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);` returns an array [4, 5, 2, 3, 0, 1]

**reverse** reverses the order of the elements in an array.

**shift** method removes the first element from an array and returns that removed element. This method changes the length of the array.

**slice** returns the part of the array specified, does not change original array, e.g. `animals.slice(2, 4)` returns 3rd and 4th elements only.

**some** tests whether at least one element in the array passes a test function, returns a Boolean value.

**sort** sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 (16-bit Unicode Transformation Format) code units values.

**splice** - returns removed items in an array, changing the original array

### String methods used

**eval()** function evaluates JavaScript code represented as a string. Used in js calculator project.

**indexOf()** method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

**String.charCodeAt()** method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index,

**String.fromCharCode()** method returns a string created from the specified sequence of UTF-16 code units,

**map** method creates a new array with the results of calling a provided function on every element in the calling array,

**match()** method returns the result of matching a string against a regular expression.

### Object Methods

**JSON.stringify()** method used, converts a JavaScript object or value to a JSON string.

**JSON.parse()** method used, parses a JSON string, constructing the object described in the string.

**hasOwnProperty()** method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

**Object.keys()** returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop. Note: enumerable can be set to false - default is true.

_example
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

typeof() returns the type of an object, function or variable: i.e. number, string, boolean or undefined._

**\* Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

1. [General info](#general-info)
2. [Screenshots](#screenshots)
3. [Technologies](#technologies)
4. [Setup](#setup)
5. [Features](#features)
6. [Status & To-Do List](#status)
7. [Inspiration](#inspiration)
8. [Contact](#contact)

## :signal_strength: Technologies

[Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
[html](https://html.spec.whatwg.org/multipage/)
[CSS](https://www.w3.org/Style/CSS/)
[jQuery](https://learn.jquery.com/)

## :floppy_disk: Setup

* cd into individual folders to view html & js/index.js files. Open html file in chrome dev tools and use dev console to enter function variables.

## :clipboard: Status & To-Do List

* Status: All projects listed under 'List of Projects' have been checked and are working.
* To-Do: Complete documentation of all projects. Change folder titles to remove spaces.

## :clap: Inspiration

* [Stephen Mayeux, Full Stack Developer Youtube Series](https://github.com/stephenmayeux)
* [Dylan Israel, Youtube Series](http://www.codingtutorials360.com/)
* [Mark Snow, Youtube Series](https://www.youtube.com/user/SnowmanSpeaks)
* [MDN Web Docs RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Syntax)
* [FreeCodeCamp](https://www.freecodecamp.org/)
* [FreeCodeCamp Forum](https://www.freecodecamp.org/forum/)
* [Regex Expression Tester](https://regexr.com/)
* [Mozilla Web Docs - Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## :page_with_curl: List of Projects/Algorithms with Screenshot

* Project_Pomodoro

![project_screenshot](./img/pomodoro_timer.png)

* Project_Website

![project_screenshot](./img/website_home.png)
![project_screenshot](./img/website_about.png)
![project_screenshot](./img/website_projects.png)
![project_screenshot](./img/website_interests_contact.png)

* Simon_Game

![project_screenshot](./img/simon_game.png)

* Survey_Form

![project_screenshot](./img/fcc_survey_form.png)

* Wikipedia_Viewer

![project_screenshot](./img/wiki_viewer.png)

* Tic_Tac_Toe

![project_screenshot](./img/tictactoe_game.png)

* JS_Calculator

![project_screenshot](./img/js_calculator.png)

* Random_Quote_API

![project_screenshot](./img/random_quote.png)

* Personal_Portfolio_Page

![project_screenshot](./img/personal_port_page.png)

* FCC_Landing_Page

![project_screenshot](./img/fcc_landing.png)

* Adv_Algorithm_Exact_Change

![project_screenshot](./img/Algorithm_Exact_Change.png)

* Adv_Algorithm_Validate_Phone_Number

![project_screenshot](./img/Algorithm_Validate_Phone_Number.png)

* Adv_Algorithm_Caesars_Cipher

![project_screenshot](./img/Algorithm_Caesars_Cipher.png)

* Adv_Algorithm_Roman_Numeral_Converter

![project_screenshot](./img/Algorithm_Roman_Numeral_Converter.png)

* Adv_Algorithm_Palindrome_Checker

![project_screenshot](./img/Algorithm_Roman_Numeral_Converter.png)

* Intermediate_Algorithm_Sum_All_Numbers_in_a_Range

![project_screenshot](./img/Algo_Sum_All_Numbers.png)

* Intermediate_Algorithm_Diff_Two_Arrays

![project_screenshot](./img/Algo_Diff_Two_Arrays.png)

* Intermediate_Algorithm_Search_And_Replace

![project_screenshot](./img/Algo_Search_And_Replace.png)

* Intermediate_Algorithm_Sum_Odd_Fabonicci

![project_screenshot](./img/Algo_Sum_Odd_Fabonicci.png)

* Intermediate_Algorithm_Map_The_Debris

![project_screenshot](./img/Algo_Map_The_Debris.png)

* Intermediate_Algorithm_Binary_Agents

![project_screenshot](./img/Algo_Binary_Agents.png)

* Intermediate_Algorithm_Sum_All_Primes

![project_screenshot](./img/Algo_Sum_All_Primes.png)

* Intermediate_Algorithm_Steamroller

![project_screenshot](./img/Algo_Steamroller.png)

* Intermediate_Algorithm_Spinal_Tap

![project_screenshot](./img/Algo_Spinal_Tap.png)

* Adv_Algorithm_Pairwise

![project_screenshot](./img/Algo_Pairwise.png)

* Adv_Algorithm_Record_Collection

![project_screenshot](./img/Algo_Record_Collection.png)

* Adv_Algorithm_Inventory_Update

![project_screenshot](./img/Algo_Inventory_Update.png)

* Adv_Algorithm_Symmetric_Difference

![project_screenshot](./img/Algo_Symmetric_Difference.png)

* Adv_Algorithm_Make_A_Person

![project_screenshot](./img/Algo_Make_A_Person.png)

* Int_Algorithm_Args_Optional

![project_screenshot](./img/Algo_Args_Optional.png)

* Int_Algorithm_Boo_Who

![project_screenshot](./img/Algo_Boo_Who.png)

* Int_Algorithm_Convert_HTML

![project_screenshot](./img/Algo_Convert_HTML.png)

* Int_Algorithm_DNA_Pairing

![project_screenshot](./img/Algo_DNA_Pairing.png)

* Int_Algorithm_Everything_Be_True

![project_screenshot](./img/Algo_Everything_True.png)

* Int_Algorithm_Finders_Keepers

![project_screenshot](./img/Algo_Finders_Keepers.png)

* Int_Algorithm_Missing_Letters

![project_screenshot](./img/Algo_Missing_Letters.png)

* Int_Algorithm_Property_Value_Pairs

![project_screenshot](./img/Algo_Object_Value_Keys.png)

* Int_Algorithm_Pig_Latin

![project_screenshot](./img/Algo_Pig_Latin.png)

* Int_Algorithm_Least_Common_Multiple

![project_screenshot](./img/Algo_Least_Common.png)

* Int_Algorithm_Sorted_Union

![project_screenshot](./img/Algo_Sorted_Union.png)

* Int_Algorithm_Drop_It

![project_screenshot](./img/Algo_Drop_It.png)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
