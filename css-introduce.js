// 这里是每一页的html和css高亮展示的代码
var pageIntroduce = [{
    HtmlText: `
<div class="container">
    <div class="left">left</div>
    <div class="main">center</div>
    <div class="right">right</div>
</div>
    `,
CSSText: `
.container{
    display: flex;
}
.left{
    width:200px;
    background: red;
}
.main{
    flex: 1;
    background: blue;
}
.right{
    width:200px;
    background: red;
}
        `,
target: '#page2'
}
,
{
HtmlText: `
<div class="container">
    <div class="column">1</div>
    <div class="column">2</div>
    <div class="column">3</div>
    <div class="column">4</div>
</div>
`,
CSSText: `
.container {
         width: 100%;
         height: 100%;
     }
.column {
         text-align: center;
         font-size: 3em;
         height: 100%;
         float: left;
         width: 25%;
 }
.column:nth-child(1){background-color:tomato;}
.column:nth-child(2){background-color:gray;}
.column:nth-child(3){background-color:antiquewhite;}
.column:nth-child(4){background-color:aqua;}

`,
target: '#page3',
}
,
{
HtmlText: `
<div id="header"></div>
<div id="container">
    <div id="center" class="column"></div>
    <div id="left" class="column"></div>
    <div id="right" class="column"></div>
</div>
<div id="footer"></div>
    `,
CSSText: `
body {
  min-width: 550px;
}

#container {
  padding-left: 200px; 
  padding-right: 150px;
}

#container .column {
  float: left;
}

#center {
  width: 100%;
}

#left {
  width: 200px; 
  margin-left: -100%;
  position: relative;
  right: 200px;
}

#right {
  width: 150px; 
  margin-right: -150px; 
}

#footer {
  clear: both;
}
`,
target: '#page1'
}

,

{
    HtmlText:`
<div id="header"></div>
<div id="container" class="column">
    <div id="center"></div>
</div>
<div id="left" class="column"></div>
<div id="right" class="column"></div>
<div id="footer"></div>
`,
    CSSText:`
body {
  min-width: 500px;
}

#container {
  width: 100%;
}

.column {
  float: left;
}
        
#center {
  margin-left: 200px;
  margin-right: 150px;
}
        
#left {
  width: 200px; 
  margin-left: -100%;
}
        
#right {
  width: 150px; 
  margin-left: -150px;
}
        
#footer {
  clear: both;
}
`,
target:'#page4'
},
{
HtmlText:`
<div class="header">#header</div>
<div class="left">定宽</div>
<div class="right">自适应</div>
<div class="footer">#footer</div>
`,
CSSText:`
.header {
    background-color: #777;
}
.footer {
    background-color: #777;
}
.left{
  width: 200px;
  height: 600px;
  background: red;
  float: left;
  text-align: center;
  color: #fff;
}
.right{
  margin-left: 210px;
  height: 600px;
  background: yellow;
  text-align: center;
}
`,
target:'#page5'
}

]

function addCssIntroduce({ HtmlText, CSSText, target }) {
    let HtmlHighlight = Prism.highlight(HtmlText, Prism.languages.html)
    let CssHighlight = Prism.highlight(CSSText, Prism.languages.css)
    let pageCssArea = document.querySelector(`${target} > .css-area > .css`)
    let pageHtmlArea = document.querySelector(`${target} > .css-area > .html`)
    console.log(pageHtmlArea);

    pageHtmlArea.innerHTML = HtmlHighlight
    pageCssArea.innerHTML = CssHighlight
}
for (let i = 0; i < pageIntroduce.length; i++) {
    addCssIntroduce(pageIntroduce[i])
}
