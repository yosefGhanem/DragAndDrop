const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

//the evenets names arr all lowercase
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

//we know these functions are running from the console

//this is a for of loop
//keeps firing off 
for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

function dragStart() {
    //Append class of hold
    this.className += 'hold'
    //0 means the class of hold happens first
    setTimeout(() => this.className = "invisible",0)
    
    // console.log('drag start')
}
function dragEnd() {
    //re add the className of fill
    this.className = 'fill'
    //console.log('drag end')
}
function dragOver(e) {
    //passing an event objects
    //to stop event default behaviour
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave() {
    //clear that and reset it
    this.className = 'empty'
}
function dragDrop() {
    //make sure to have class of empty when i drop in
    this.className = "empty"
    this.append(fill)
}