(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ced6"],{ced6:function(e,a,t){(function(e){e(t("56b3"))})(function(e){"use strict";e.defineMode("mathematica",function(e,a){var t="[a-zA-Z\\$][a-zA-Z0-9\\$]*",n="(?:\\d+)",c="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",m="(?:\\.\\w+|\\w+\\.\\w*|\\w+)",o="(?:`(?:`?"+c+")?)",r=new RegExp("(?:"+n+"(?:\\^\\^"+m+o+"?(?:\\*\\^[+-]?\\d+)?))"),i=new RegExp("(?:"+c+o+"?(?:\\*\\^[+-]?\\d+)?)"),z=new RegExp("(?:`?)(?:"+t+")(?:`(?:"+t+"))*(?:`?)");function A(e,a){var t;return t=e.next(),'"'===t?(a.tokenize=Z,a.tokenize(e,a)):"("===t&&e.eat("*")?(a.commentLevel++,a.tokenize=$,a.tokenize(e,a)):(e.backUp(1),e.match(r,!0,!1)?"number":e.match(i,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)?"variable-2":e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(z,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function Z(e,a){var t,n=!1,c=!1;while(null!=(t=e.next())){if('"'===t&&!c){n=!0;break}c=!c&&"\\"===t}return n&&!c&&(a.tokenize=A),"string"}function $(e,a){var t,n;while(a.commentLevel>0&&null!=(n=e.next()))"("===t&&"*"===n&&a.commentLevel++,"*"===t&&")"===n&&a.commentLevel--,t=n;return a.commentLevel<=0&&(a.tokenize=A),"comment"}return{startState:function(){return{tokenize:A,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},blockCommentStart:"(*",blockCommentEnd:"*)"}}),e.defineMIME("text/x-mathematica",{name:"mathematica"})})}}]);