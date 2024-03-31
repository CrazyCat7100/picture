let input = document.getElementsByClassName('input')[0]
let button = document.getElementsByClassName('submit')[0]
let time = 0 
let count = document.getElementsByClassName('count')[0]
button.addEventListener('click', function (e) {
    console.log(input.value)
        
   
    if (time == 0) {

        e.preventDefault()  
        input.click()
        button.type = 'submit'
        time = 1

}
})
'sdlfdf!sadfsdf!sadfsd!'.split('!') // ['sdlfdf', 'sdlfdf', 'sdlfdf']

fetch('/files')
.then(async (data) => {
    let text = await data.text()
    
    console.log(text)
    let amount = text.split('<img').length
    count.textContent = 'See all uploaded files (' + amount + ')'
})



input.addEventListener('change', function () {
    if ( input.value) {

        button.click()
    }
    })