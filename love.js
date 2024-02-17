let boyInp = document.getElementById("boyInp");
let girlInp = document.getElementById("girlInp");
let result = document.getElementById("result");
let btn = document.getElementById("button");

const calculateLove = () => {
  if (boyInp.value == "" || girlInp.value == "") {
    result.innerText = `please insert input field`;
    boyInp.value = "";
    girlInp.value = "";
  } else {
    let boyStr = boyInp.value.toLowerCase();
    let girlStr = girlInp.value.toLowerCase();

    let boyLen = boyStr.length;
    let girlLen = girlStr.length;
    let counter = 0;

    for (let i = 0; i < boyLen; i++) {
      if (girlStr.includes(boyStr[i])) {
        counter++;
      }
    }

    let percentage = (counter / Math.max(boyLen, girlLen)) * 100;
    if(percentage < 75){
        percentage = Math.floor(Math.random()*26)+75
        result.innerText = `${boyInp.value} and ${girlInp.value} love is ${percentage}% pure`;
    }else{
        result.innerText = `${boyInp.value} and ${girlInp.value} love is ${percentage}% pure`;
    }
    boyInp.value = "";
    girlInp.value = "";
  }
};

btn.addEventListener("click", calculateLove);
