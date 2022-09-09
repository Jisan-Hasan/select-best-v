
const selectedPlayerArr = [];

// get input value by id
function getInputValueById(inputId){
    const value = document.getElementById(inputId).value;
    // Validate input value
    if(isNaN(value) || value <= 0){
        alert("Unacceptable input value found! Check Carefully!");
        return;
    }
    return parseFloat(value);
}

// set element inner text by id
function setElementTextById(elementId, text){
    // validate text before set
    if(isNaN(text)){
        document.getElementById(elementId).innerText = 0;
        return;
    }
    document.getElementById(elementId).innerText = text;
}


function selectPlayer(element){
    // set an alert if selected player list more than five
    if(selectedPlayerArr.length === 5){
        alert("You can choose maximum five player");
        return;
    }
    // Get selected player name & push in the array
    const playerName = element.parentNode.parentNode.children[0].innerText;
    selectedPlayerArr.push(playerName);

    // append player list item in ordered list
    const selectedPlayerList = document.getElementById('selected-player-list');
    selectedPlayerList.innerHTML = ``;
    for(let i = 0; i < selectedPlayerArr.length; i++){
        const li = document.createElement('li');
        li.innerText = selectedPlayerArr[i];
        selectedPlayerList.appendChild(li);
    }
    // disable button & set background color
    element.disabled = true;
    element.style.backgroundColor = "#A2A9AF";

    // update player count
    setElementTextById('selected-player-count', selectedPlayerArr.length);
}




// add event listener on calculate button
document.getElementById('btn-calculate').addEventListener('click', (e) => {
    const perPlayerCost = getInputValueById('per-player-cost');
    
    const totalPlayerCost = perPlayerCost * selectedPlayerArr.length;
    setElementTextById('total-player-cost',totalPlayerCost);

});


// add event listener on total calculate button
document.getElementById('btn-calculate-total').addEventListener('click', (e) => {
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');
    const totalPlayerCost = parseFloat(document.getElementById('total-player-cost').innerText);

    setElementTextById('total-cost', managerCost + coachCost + totalPlayerCost);
})