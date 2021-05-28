(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),a=(n(0),n(302)),i={id:"worklets",title:"Worklets",sidebar_label:"Worklets"},c={unversionedId:"worklets",id:"version-2.1.0/worklets",isDocsHomePage:!1,title:"Worklets",description:"The ultimate goal of worklets was for them to define small pieces of JavaScript code that we run when updating view properties or reacting to events on the UI thread. A natural construct in JavaScript for such a purpose was a simple method. With Reanimated 2 we spawn a secondary JS context on the UI thread that then is able to run JavaScript functions. The only thing that is needed is for that function to have \u201cworklet\u201d directive at the top:",source:"@site/versioned_docs/version-2.1.0/worklets.md",slug:"/worklets",permalink:"/react-native-reanimated/docs/2.1.0/worklets",version:"2.1.0",sidebar_label:"Worklets",sidebar:"version-2.1.0/docs",previous:{title:"Installation",permalink:"/react-native-reanimated/docs/2.1.0/installation"},next:{title:"Shared Values",permalink:"/react-native-reanimated/docs/2.1.0/shared-values"}},l=[{value:"Using hooks",id:"using-hooks",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ultimate goal of worklets was for them to define small pieces of JavaScript code that we run when updating view properties or reacting to events on the UI thread. A natural construct in JavaScript for such a purpose was a simple method. With Reanimated 2 we spawn a secondary JS context on the UI thread that then is able to run JavaScript functions. The only thing that is needed is for that function to have \u201cworklet\u201d directive at the top:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function someWorklet(greeting) {\n  'worklet';\n  console.log(\"Hey I'm running on the UI thread\");\n}\n")),Object(a.b)("p",null,"Functions are a great construct for our needs because you can communicate with the code they run by passing arguments. Each worklet function can be run either on the main React Native thread if you just call that function in your code, or you can execute it on the UI thread using ",Object(a.b)("inlineCode",{parentName:"p"},"runOnUI"),". Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI JS context."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function someWorklet(greeting) {\n  'worklet';\n  console.log(greeting, 'From the UI thread');\n}\n\nfunction onPress() {\n  runOnUI(someWorklet)('Howdy');\n}\n")),Object(a.b)("p",null,"In addition to arguments, functions also capture the context where they are defined. So when you have a variable that is defined outside of the worklet scope but is used inside a worklet, it will also be copied along with the arguments and you\u2019d be able to use it (we refer to it as capturing given params):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const width = 135.5;\n\nfunction otherWorklet() {\n  'worklet';\n  console.log('Captured width is', width);\n}\n")),Object(a.b)("p",null,"Worklets can capture (or take as arguments) from other worklets, in which case when called, they will execute synchronously on the UI thread:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function returningWorklet() {\n  'worklet';\n  return \"I'm back\";\n}\n\nfunction someWorklet() {\n  'worklet';\n  let what = returningWorklet();\n  console.log('On the UI thread, other worklet says', what);\n}\n")),Object(a.b)("p",null,"And hey \u2013 this works for regular methods too. In fact, console.log is not defined in the UI JS context, but is a reference to a method that the React Native JS context provides. So when we used ",Object(a.b)("inlineCode",{parentName:"p"},"console.log")," in the previous examples it was actually executed on the React Native thread."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function callback(text) {\n  console.log('Running on the RN thread', text);\n}\n\nfunction someWorklet() {\n  'worklet';\n  console.log(\"I'm on UI but can call methods from the RN thread\");\n  runOnJS(callback)('can pass arguments too');\n}\n")),Object(a.b)("h2",{id:"using-hooks"},"Using hooks"),Object(a.b)("p",null,"In practice, when writing animations and interactions with Reanimated, you will rarely need to create worklets using ",Object(a.b)("inlineCode",{parentName:"p"},"'worklet'")," directive (just take a look at ",Object(a.b)("inlineCode",{parentName:"p"},"Example/")," folder to see we don't have that many occurences of the directive).\nWhat you will be using most of the time instead, are worklets that can be constructed by one of the hooks from Reanimated API, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"useAnimatedStyle"),", ",Object(a.b)("inlineCode",{parentName:"p"},"useDerivedValue"),", ",Object(a.b)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler"),", etc.\nWhen using one of the hooks listed in the Reanimated API Reference, we automatically detect that the provided method is a worklet and do not require the directive to be specified.\nThe method provided to the hook will be turned into a worklet and executed on the UI thread automatically."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const style = useAnimatedStyle(() => {\n  console.log("Running on the UI thread");\n  return {\n    opacity: 0.5\n  };\n});\n')))}u.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);