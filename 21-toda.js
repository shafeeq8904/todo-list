const todolist=[
    {name : 'make dinner',
     due_date: '2024-07-10'
    }, 
    {name:'do homework',
     due_date: '2024-07-11'
    }];

Rendertodo();

function Rendertodo(){

    let todolisthtml='';

    for(let i=0;i<todolist.length;i++){
        const todoobject = todolist[i]
        const name= todoobject.name;
        const due_date=todoobject.due_date;
        const html = `
            
              <div>${name} </div>   
              <div>${due_date}</div>
              <div>
                <button onclick="todolist.splice(${i},1)
                Rendertodo()" class="delete-btn">delete</button>
              </div>
            `
        todolisthtml +=html

    }
    

    document.querySelector('.js-para').innerHTML = todolisthtml

};

function add(){
    const input=document.querySelector('.js-name-input')
    const name=input.value;

    const date=document.querySelector('.js-date')
    const due_date=date.value

    todolist.push({
        name: name,
        due_date: due_date

    })
    

    input.value='';
    Rendertodo()

}