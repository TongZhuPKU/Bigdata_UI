/* ͼ���л���
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


/* �л���Ʊ���� */
let myButton_code = document.querySelector('button#code');  //����idΪ"code"��button��
let myHeading_code = document.querySelector('h1');

function setDesiredCode() {
    let myCode = prompt("��������Ҫ��ѯ�Ĺ�Ʊ����");
    if (!myCode || myCode === null) {
        setDesiredCode();
    } else {
        localStorage.setItem('code', myCode);
        myHeading_code.textContent = '����ע�Ĺ�Ʊ���룺' + myCode;
    }
}

if (!localStorage.getItem('code')) {
    setDesiredCode();
} else {
    let storedCode = localStorage.getItem('code');
    myHeading_code.textContent = '����ע�Ĺ�Ʊ���룺' + storedCode;
}

myButton_code.onclick = function () {
    setDesiredCode();
}

/*
 �л���ҵ���
*/
let myButton_industry = document.querySelector('button#industry');
let myHeading_industry = document.querySelector('h2');

function setDesiredIndustry() {
    let myIndustry = prompt("��������Ҫ��ѯ����ҵ���");
    if (!myIndustry || myIndustry === null) {
        setDesiredIndustry();
    } else {
        localStorage.setItem('industry', myIndustry);
        myHeading_industry.textContent = '����ע����ҵ��飺' + myIndustry;
    }
}

if (!localStorage.getItem('industry')) {
    setDesiredIndustry();
} else {
    let storedIndustry = localStorage.getItem('industry');
    myHeading_industry.textContent = '����ע����ҵ��飺' + storedIndustry;
}

myButton_industry.onclick = function () {
    setDesiredIndustry();
}



