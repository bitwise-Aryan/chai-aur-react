//jo hmne vite mein render kiya tha usi ka kosis kr rhay yha bhi


/*Your code effectively mimics how React renders a simple React element into the DOM.
 It creates an anchor (<a>) element dynamically, sets its attributes like href and target, 
 and appends it to the specified container (mainContainer). This is similar to the manual process 
 of DOM manipulation, which React automates behind the scenes:
 */


function customRender(reactElement,mainContainer){
    //here we will use our js knowledge of how we created a domElement and injected it wherever we needed
    //eg:const domElement=document.createElement('a')//create anchor element

    /*
    //dom element bnaya//ek ek krke attribute set kri
    const domElement=document.createElement(reactElement.type)
    //inner html dikhega kya?<a>click<a/>
    domElement.innerHTML=reactElement.children
    //set attributes
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;//agr prop key children ke equal h to
        domElement.setAttribute(prop,reactElement.props[prop])

    }

    



    //domElement inject krdo
    mainContainer.appendChild(domElement)
}


const reactElement={//react kaise dekhta h html ko?
    type:'a',//ye tag ke properties ke bare mein bat kr rha,ki jaise <div> hota ya p tag ya a tag,yha a tag
    props:{//obj h
        href:"https://google.com",
        target:'_blank'
    },
    children:'Click me to visit google'

}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)//customRender kisi bhi mthd ka nam h //ye 2 chize leta h//kya inject krun?aur kha pe inject krun?