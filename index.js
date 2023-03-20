const btnEl = doucument.queryselector(".btn");

btnEl.addEventlistener("mouseover", (event) =>{
    const x = (event.pageX - btnEl.offsetTop);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setproperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});