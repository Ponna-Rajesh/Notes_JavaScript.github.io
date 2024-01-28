
//Learning DOM

// console.log(window.document)
// console.dir(window.document)

// const main = document.querySelector('.main');
// main.innerHTML = "<h1>rajesh</h1>"
// main.innerHTML = "rajesh"
// main.innerText = "<h1>Hello world</h1>"
// main.innerText = "Hello world"
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //TOPIC LESSION-1 : SetAttribute
    //!  1 . setAttrIBUte 
    const set = document.querySelector('h1');
    // set.className = "heroo"
    // set.id = "imppp"
    // set.title = "djj"
    // console.log(set)
    
    //! 2 . setAttrIBUte
    const set2 = document.querySelector('h2');
    // set2.setAttribute('class','h2Name');
    // set2.setAttribute('id','keyyaka');
    // set2.setAttribute('title','Learing');
    // console.log(set2);

        //! 3.Changing Content
        // console.log(set2.textContent = 'WelCome!')
        // console.log(set2.innerHTML = '<strong>WelCome!</strong>')
        // console.log(set2.innerText = '<h4>WelCome!</h4>')
    

        //! 4.Change Styles 
        // set2.style.color = "red";
        // set2.style.backgroundColor = "#000";
        // set2.style.padding = "20px";

        //!5. Selector - Query , GetElement

// console.log(document.querySelector('li'))                     // *first li
// console.log(document.querySelectorAll('li'))                  //*All li NOTE-1 NodeList*
// console.log(document.getElementById('li2'));
// console.log(document.getElementsByClassName('li3'));         // NOTE-2 HTMLCollection*
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)'))

//! 5.1 sub

const repl = document.querySelector('li:nth-child(2)');
// repl.style.color = 'red';
// repl.style.padding = '10px';
// repl.style.backgroundColor = '#ff454545';
// repl.style.borderRadius = '5px';

//--------------------------------------------------------------

        // console.log(document.getElementById('li'));              //NOTE-3
        // console.log(document.getElementsByClassName('li'));      //NOTE-4

//-----------------------------------------------------------
        const listul = document.querySelector('ul');
                // listul.style.color = "green"
                // listul.style.fontSize = "20px"
                // listul.style.fontWeight = "bold"
                // listul.style.fontFamily = "sans-serif"
                //  console.log(listul);

        const lii = listul.querySelector('li');
                // lii.style.color = 'blue'
                // console.log(lii)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TOPIC LESSION-2 : Multiple Elements  (DOm.txt page)
        //! 1 
        // const itt1 = document.querySelector('.item');
        // console.log(itt1)

        //! 2.imp
         const itt1 = document.querySelectorAll('.item');
        // console.log(itt1)
        //  console.log (itt1[0])
        //  console.log (itt1[0].innerHTML = 'Biology')
        // itt1[0].style.color = 'red';

        //! 3. NodeList and HTMLCollection (imp) (DOm.txt page) (imp)

 //*Example 1: querySelectorAll 
        const itt = document.querySelectorAll('.item');
        //  itt.forEach((a, index) => {
        //         a.style.color = "red"
        //         a.style.fontFamily = "sans-serif";
        //         a.style.fontWeight = "bold";

        //         if(index === 1){
        //          a.style.color = "black"       
        //         };

        //         if(index === 2){
        //                 a.remove()   //?remove method is used to remove DOM elements
        //                };          
                                  
        //         if(index === 3){
        //         a.innerHTML = "DNA-replication"    //Topology replaced "DNA-replication"    
        //         };
        //  });

 //*Example 2: getElementsByClassName 
         const itt2 = document.getElementsByClassName('item');
         // console.log(itt2) // HTMLCollection
         const arrayFromHTMLCollection = [...itt2]; 
        //  arrayFromHTMLCollection.forEach((a,index)=>{

        //         a.style.color = "#720455"
        //         a.style.fontFamily = "sans-serif";
        //         a.style.fontWeight = "bold";

        // !        console.log(a.innerText);

        //  });
                // ?forEach cannot apply to itt2 we should covert into array using Array.from() method or [...itt2] operator

 //*Example 3: getElementsByTagName (Not Much imp)
        const itt3 = document.getElementsByTagName('li');
        //! console.log(itt3[0].innerText)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC LESSION-3: DOM Element Relationship (Element Node )

//* Get child Element 

        const parent = document.querySelector('.parent');
        // console.log(parent);

//---------------------------------------------------------

        let output;
        // output = parent.[0].innerText;
        // output = parent.children[0].className;
        // output = parent.chilchildrendren[0].nodeName;

//----- --------------------------------------------------------

        // output = parent.children[0].innerText = 'Not-Rajesh';
        //  parent.children[0].style.color = 'red';
        //  parent.children[0].style.fontFamily = 'sans-serif';

 // --------------------------------------------------------

        // output = parent.firstElementChild;
        // parent.firstElementChild.innerText = "NOt..!";
        // output = parent.lastElementChild;
        // parent.lastElementChild.style.color = "#ff4545";

       //!  console.log(output);

 //*Get Parent Element from a child       
        
        const child = document.querySelector('.child');
        // console.log(child);

        let output2;
        // output2 = child.parentElement;
        // child.parentElement.style.border = "1.5px solid green"
        // child.parentElement.style.padding = "8px"

        //! console.log(output2);

 //*Sibling Elements 
        
        const sibl = document.querySelector('.child:nth-child(2)');
        // console.log(sibl);

        let output3;
        output3 = sibl.nextElementSibling;
        sibl.nextElementSibling.style.color = 'red';
        sibl.previousElementSibling.style.color = 'green';

        //! console.log(output3);

//NOTEs: overall concept Properties must Remeber        

//      1   //! Get child Element 
//           .children
//           .firstElementChild
//           .lastElementChild

//      2   //!Get Parent Element from a child       
//           .parentElement

//      3   //!Sibling Elements 
//           .nextElementSibling
//           .previousElementSibling

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC LESSION-3: DOM Node Relationship 

//NOTEs: overall concept Properties must Remeber        

//      1   //! Get child Node
//           .childNodes
//           .firstChild
//           .lastChild

//      2   //!Get Parent Node from a child       
//           .parentNode

//      3   //!Sibling Nodes
//           .nextSibling
//           .previousSibling

