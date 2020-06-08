/* 图像切换器
let myImage = document.querySelector('img');
myImage.onclick = function( ) {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "images/panal1.png") {
        myImage.setAttribute('src', "images/panal2.png");
    } else {
        myImage.setAttribute('src',"images/panal1.png")
    }
 }
 */


/* 切换股票代码 */
let myButton_code = document.querySelector('button#code');  //查找id为"code"的button类
let myHeading_code = document.querySelector('h1');

function setDesiredCode() {
    let myCode = prompt("请输入所要查询的股票代码");
    if (!myCode || myCode === null) {
        setDesiredCode();
    } else {
        localStorage.setItem('code', myCode);
        myHeading_code.textContent = '所关注的股票代码：' + myCode;
    }
}

if (!localStorage.getItem('code')) {
    setDesiredCode();
} else {
    let storedCode = localStorage.getItem('code');
    myHeading_code.textContent = '所关注的股票代码：' + storedCode;
}

myButton_code.onclick = function () {
    setDesiredCode();
}

/*
 切换行业板块
*/
let myButton_industry = document.querySelector('button#industry');
let myHeading_industry = document.querySelector('h2');

function setDesiredIndustry() {
    let myIndustry = prompt("请输入所要查询的行业板块");
    if (!myIndustry || myIndustry === null) {
        setDesiredIndustry();
    } else {
        localStorage.setItem('industry', myIndustry);
        myHeading_industry.textContent = '所关注的行业板块：' + myIndustry;
    }
}

if (!localStorage.getItem('industry')) {
    setDesiredIndustry();
} else {
    let storedIndustry = localStorage.getItem('industry');
    myHeading_industry.textContent = '所关注的行业板块：' + storedIndustry;
}

myButton_industry.onclick = function () {
    setDesiredIndustry();
}



