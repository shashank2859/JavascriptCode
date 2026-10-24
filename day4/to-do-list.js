const todolist =[ 'hello', 'helloo'];
rendertodolist();
function inputdata(){

    const inputElement=document.querySelector('.js-input');
    const name=inputElement.value;
     todolist.push(name);
     console.log(todolist);
     inputElement.value=''; 
     rendertodolist();

};
function rendertodolist(){
    let todolistishtml='';

    for(let i=0;i<todolist.length;i++)
    {
        const todo=todolist[i];
        const html=`<p>${todo}</p>`;
        todolistishtml+=html;
    }

    console.log(todolistishtml);
    document.querySelector('.js-todolist').innerHTML=todolistishtml;

}