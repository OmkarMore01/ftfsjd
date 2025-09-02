import sb,{add} from './lib.js'
    // function f1(){
    // let info=window.prompt("enter the text you want to change")
    // console.log(info)
    // let h=document.getElementsByClassName('head')
    // h[0].innerText=info
    // h[1].innerText="Heading chaged dynamically.."
    // h[0].style.backgroundColor='tomato'
    // h[2].classList.add('bg-warning-subtle','text-center')
    // console.log(h)
add(50,20)
sb(80,20)
    // }
   function f1(){
    let info=window.prompt("enter the text you want to change")
    console.log(info)
    let h=document.getElementsByTagName('h1')
    h[0].innerText=info
    h[1].innerText="Heading chaged dynamically.."
    h[0].style.backgroundColor='tomato'
    
    console.log(h)


    }

