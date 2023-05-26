counter = document.querySelector('span')
list = document.querySelector('ul')
saveButton = document.querySelector('button')
saveButton.addEventListener('click', addNote)
function addNote(){
   
    newNote = document.querySelector('input').value
    li = document.createElement("li")
    li.innerHTML = newNote

    list.append(li)
    
    
    number = counter.innerHTML
    total =  parseFloat(number) + 1
    counter.innerHTML = total
    
    document.querySelector('input').value = null
}

