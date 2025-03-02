const beforeSubmit = () => {
    let outputDt = document.querySelector(".outputDt");
    let inputDt = document.querySelector(".inputDt");
    console.log("inputDt.value",inputDt.value);

    let formattedDt = new Date(inputDt.value).toLocaleDateString("en-IN");
    outputDt.value = formattedDt;
};