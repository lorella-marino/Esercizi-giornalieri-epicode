let users = []

let btn = document.querySelector('button')
btn.onclick = addUser

function addUser() {
    let nodeListInput = document.querySelectorAll('header input')
   
    let obj = {
        task: nodeListInput[0].value
    }
    users.push(obj)
    resetForm(nodeListInput)
    userListCreated()
}

function resetForm(node) {
    node[0].value = ''
}

function userListCreated() {
    let listNode = document.querySelector('main section')
    listNode.innerHTML = '';
    let lo = document.createElement('ol');
    users.forEach((ele, i) => {
        let li = document.createElement('li');
        li.innerHTML = `${ele.task} <span><button onclick="removeUser(${i})">x</button></span>`
        li.addEventListener('click', () => {
            console.log(li.style.textDecoration = "line-through")
        })
        lo.appendChild(li)
    })

    listNode.appendChild(lo);
    
}

function removeUser(index) {
    users.splice(index, 1)
    userListCreated()
}
