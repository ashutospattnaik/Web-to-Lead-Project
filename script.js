const beforeSubmit = () => {
    let outputDt = document.querySelector(".outputDt");
    let inputDt = document.querySelector(".inputDt");
    console.log("inputDt.value",inputDt.value);

    let formattedDt = new Date(inputDt.value).toLocaleDateString("en-IN");
    outputDt.value = formattedDt;
};

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 