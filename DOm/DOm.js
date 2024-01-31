
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
//NOTE unComment In HTML
    //!  1 . setAttrIBUte 
    const set = document.querySelector('h1');
    // set.className = "heroo"
    // set.id = "imppp"
    // set.title = "djj"
    // console.log(set)
 //NOTE unComment In HTML   
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
//NOTE unComment In HTML
// console.log(document.querySelector('li'))                     // *first li
// console.log(document.querySelectorAll('li'))                  //*All li NOTE-1 NodeList*
// console.log(document.getElementById('li2'));
// console.log(document.getElementsByClassName('li3'));         // NOTE-2 HTMLCollection*
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)'))

//! 5.1 sub
//NOTE unComment In HTML
// const repl = document.querySelector('li:nth-child(2)');
// repl.style.color = 'red';
// repl.style.padding = '10px';
// repl.style.backgroundColor = '#ff454545';
// repl.style.borderRadius = '5px';

//--------------------------------------------------------------
//NOTE unComment In HTML
        // console.log(document.getElementById('li'));              //NOTE-3
        // console.log(document.getElementsByClassName('li'));      //NOTE-4

//-----------------------------------------------------------
//NOTE unComment In HTML
        // const listul = document.querySelector('ul');
                // listul.style.color = "green"
                // listul.style.fontSize = "20px"
                // listul.style.fontWeight = "bold"
                // listul.style.fontFamily = "sans-serif"
                //  console.log(listul);

        // const lii = listul.querySelector('li');
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
  //! Elements = Nodes IN DOM

//* Get child Element 

        const parent = document.querySelector('.parent');
        // console.log(parent);



        let output;
        // output = parent.innerHTML;
        // output = parent.children[0].className;
        // output = parent.children[0].nodeName;



        // output = parent.children[0].innerText = 'Not-Rajesh';
        //  parent.children[0].style.color = 'red';
        //  parent.children[0].style.fontFamily = 'sans-serif';



        // output = parent.firstElementChild;
        // parent.firstElementChild.innerText = "NOt..!";
        // output = parent.lastElementChild;
        // parent.lastElementChild.style.color = "#ff4545";

        //  console.log(output);

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
        // output3 = sibl.nextElementSibling;
        // sibl.nextElementSibling.style.color = 'red';
        // sibl.previousElementSibling.style.color = 'green';

        // console.log(output3);

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

// TOPIC LESSION-4: DOM Node Relationship 
        //! Elements = Nodes IN DOM

       
//* 1. One 
      //OUTPUT: CODE
        let fruits = document.querySelector('.Fruits');
        // console.log(fruits.childNodes);

        // console.log(fruits.childNodes[0].nodeName);                                             // #text in console
        // console.log(fruits.childNodes[0].textContent);                                          // whiteSpace in console

        // console.log(fruits.childNodes[3].nodeName);                                             //DIV in console
        // console.log(fruits.childNodes[3].textContent);                                          //Apple in console

        // console.log(fruits.childNodes[3].innerHTML);                                             // observe in console
        // console.log(fruits.childNodes[3].outerHTML);                                            // observe in console
        // console.log(fruits.childNodes[5].style.color = 'red');

        // let result4;
        //  result4 = fruits.firstChild;
        //  result4 = fruits.lastChild;                                 // whitespace
        //result4 = fruits.lastChild.innerText = 'hhdj';
        // console.log(result4);
        
     //OUTPUT: Output Console.log
       // console.log(fruits.childNodes);
        //! NodeList(11) [text, comment, text, div.child, text, div.child, text, div.child, text, div.child, text]
        //! 0 : text             // Next line
        //! 1 : comment          //    <!--Fruits List -->
        //! 2 : text            // Next line
        //! 3 : div.child        //Apple
        //! 4 : text            // Next line
        //! 5 : div.child        //manago 
        //! 6 : text            // Next line
        //! 7 : div.child               //orange
        //! 8 : text            // Next line
        //! 9 : div.child        //Grapes
        //! 10 : text           // Next line
        //! length: 11


//* Parent Node 

        let fru = document.querySelector('.pandulu');
        // console.log(fru)
        let a; 
        a = fru.parentNode;             //!Both parentNode and parentElement sare similar outut
        a= fru.parentElement;
        // console.log(a)

//* Siblings 

        let secondItem = document.querySelector('.pandulu:nth-child(2)');
        // console.log(secondItem);

        let frk;
        frk = secondItem.previousSibling;
        frk = secondItem.nextSibling;
        // console.log(frk);





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

// +++++++++++++++++++++++++++Lession - 5++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TOPIC LESSION-4 or 5: Create & Append Elements 
  //* createElement :

         const newEle = document.createElement('h1');
        //! 1. console.log (newEle);

        newEle.className = 'my-div';
        newEle.id = 'my-id';
        newEle.setAttribute('title', 'bye');

        // newEle.innerText = 'Hello Rajesh';
                // or;
        const Text = document.createTextNode('Jai Hanuman');
        newEle.appendChild(Text)  //best to use
        // newEle.style.color = 'Orange'


        //!  observe the console Imp 
        // console.log(newEle);

//*  appendChild  :

        // document.body.appendChild(newEle);
        // document.querySelector('.Fruits').appendChild(newEle); 
        // document.querySelector('.child').appendChild(newEle);

// +++++++++++++++++++Lesson 6+++++++++++++++++++++++++++++++++++++++++++++++
// TOPIC LESSION-6: innerHTML Vs createElement() 

//* Quick and Dirty way Doing Button (innerHTML)
        // const shani = document.createElement('button');
        function dirtyway(item){
                const shani = document.createElement('button');
                shani.className = 'trishul';
                shani.innerHTML = ` 
                <h2 class="god">${item}</h2>`;
                document.querySelector('.Gods').appendChild(shani);
                // console.log(shani);
        };
        dirtyway('Shani');

        //?Line Break
        let Gods = document.querySelector('.Gods');
        var lineBreak = document.createElement("br");
        Gods.appendChild(lineBreak);

//* CLean & performant Way (createElement())
        //NOTE 1 way
const Krishna = document.createElement('button');
Krishna.className = 'trishul'

const lordText = document.createElement('h2');
lordText.className = 'god'
Krishna.appendChild(lordText);

const lordName = document.createTextNode('Lord krishna');
lordText.appendChild(lordName);

document.querySelector('.Gods').appendChild(Krishna);

//! console.log(Krishna);

        //?Line Break
        var lineBreak = document.createElement("br");
        Gods.appendChild(lineBreak);


        //NOTE 2 way

 function Lords(item){
        const Krishna = document.createElement('button');
        Krishna.className = 'trishul'

        const lordText = document.createElement('h2');
        lordText.className = 'god'
        Krishna.appendChild(lordText); 
        lordText.appendChild(document.createTextNode(item));  // 333 and 334 code

        document.querySelector('.Gods').appendChild(Krishna);
};
Lords('JAI HANUMAN');

// ++++++++++++++++++++++++++++++++++++++++lesson 7++++++++++++++++++++++++++++++++++
// TOPIC LESSION-7: Insert - element , text and html 

//* insertAdjacentElement :
        function abc(){
                const ele = document.querySelector('.header');

                const newKey =  document.createElement('h1');
                newKey.innerText = 'Heroo';
                newKey.style.color = 'yellow';

                // ele.insertAdjacentElement('beforebegin' , newKey)

        //! beforebegin , afterend , afterbegin , beforeend  observe in Elements inspect 
        }
        abc();

//* insertAdjacentText :
        function cde(){
                const item = document.querySelector('.header:nth-child(3)');
                // item.insertAdjacentText('beforebegin', '<h1>Rajesh<//h1>')
        };
        cde()

//* insertAdjacentHTML :
        function fgh(){
                const item = document.querySelector('.header:nth-child(4)');
                // item.insertAdjacentHTML('afterend', '<h2>Rajesh</h2>')
        }
        fgh()
//* insertBefore :

function xyz(){
        const item = document.querySelector('.details');

        const p = document.createElement('p');
        p.innerText = 'chochi';
        const items = document.querySelector('.header:nth-child(5)');
        // item.insertBefore(p , items)
};
xyz()

// ++++++++++++++++++++++++++++++++++++++++lesson 8++++++++++++++++++++++++++++++++++
// TOPIC LESSION-8: Replace Element 

//* 1 replaceWith
        function replaceFirstItem(){
                const firstItem = document.querySelector('li:nth-child(1)');
                const li2 = document.createElement('li')
                li2.innerText = "Banana Shake";
                li2.className = 'ice-item'
                firstItem.replaceWith(li2)
        };
      //  replaceFirstItem()

//* 2 replacewith_outerHTML

        function replaceThridItem(){
                const ThridItem = document.querySelector('li:nth-child(3)');
                // ThridItem.outerHTML = "<li>Oreo-Shake</li>";
             
        };
        // replaceThridItem()

//* 3 replaceAll
//! dont run at a time 3 chapter 3.1 , 3.2 ,.....

        function replaceAllItems(){
                const lis = document.querySelectorAll('li');
                lis.forEach((items) => {
               // items.outerHTML = '<li>Jai Sriram</li>'
                })
        };
        // replaceAllItems()

//* 3.1 replaceAll 
//! dont run at a time 3 chapter 3.1 , 3.2 ,.....

        function replaceAllItems(){
                const lis = document.querySelectorAll('li');
                lis.forEach((items,index) => {
                if(index % 2 === 0){
                        items.outerHTML = "<li>Jai Sriram</li>"
                }else{
                        items.outerHTML = "<li>Jai Hanuman</li>"
                }
                })
        };
        // replaceAllItems()

//* 3.2 replaceAll 

      function replaceAllItems(){
        const lis = document.querySelectorAll('li');
        lis.forEach((items,index)  => {
                (items.outerHTML = index % 2 === 0 ? '<li>Hanuman</li>' :
                '<li>kanna</li>')
             });
      };
        // replaceAllItems()

//* 4 replaceChild()  method: 
        function replacingHeader(){
                const header = document.querySelector('header');
                const h2 = document.querySelector('header h2');
                const h1 = document.createElement('h1');
                h1.innerText = "Enjoy The Food ";
                //header.replaceChild(h1, h2)   //NOTE replaceChild() method
        };
       // replacingHeader()

// ++++++++++++++++++++++++++++++++++++++++lesson 8 and   9++++++++++++++++++++++++++++++++++
// TOPIC LESSION-9: Remove Element  : 
//! 1 Example: 
        function removeHeader(){
                const header = document.querySelector('.king');
                header.remove()
        };
        // removeHeader()

//! 2 Example: 
        function removeFirstItem(){
                const ul = document.querySelector('.ice-items');
                const li = document.querySelector('.ice-item');
                ul.removeChild(li)                                                        //NOTE removeChild()
        };
       // removeFirstItem()

//! 3 Example: 
        function removeFirstItem(itemNumber){
                const ul = document.querySelector('.ice-items');
                const li = document.querySelector(`li:nth-child(${itemNumber})`);
                ul.removeChild(li)     
        };
        // removeFirstItem(2)                                                            //NOTE milk removed
//! 4 Example: 
        function removeEle(){
                const ul = document.querySelector('.ice-items');
                const li = document.querySelectorAll('.ice-item')[0];  //!index[0]
                ul.removeChild(li)
        };
        // removeEle()

//! 5 Example: 
        function removeEle1(itemRemove){
                const ul = document.querySelector('.ice-items');
                const li = document.querySelectorAll('.ice-item')[itemRemove];         //!index[0]
                ul.removeChild(li)
        };
        // removeEle1(2) //!index

//! 6 Example: 
        function removeEle2(itemRemove){
                const ul = document.querySelector('.ice-items');
                const li = document.querySelectorAll('.ice-item')[itemRemove - 1];         //!index[0] 
                ul.removeChild(li)
        };
        //  removeEle2(2) //! compare example-5

//! 7 Example: Short Way
        const shortHand = (itemNumber) => 
        document.querySelectorAll('li')[itemNumber-1].remove()
        // shortHand(2)

// ++++++++++++++++++++++++++++++++++++++++lesson 10++++++++++++++++++++++++++++++++++
// TOPIC LESSION-9: Remove Element  : 
