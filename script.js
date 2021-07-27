

async function getUsers(username){
try{
    var url = await fetch(`https://api.github.com/users/${username}`);
    var fetchedUrl = await url.json();
    
    console.log(fetchedUrl);
    return(fetchedUrl);
} catch(err){
    console.log(err)
}
} 

async function callUsers(user){
    try{
        var url2 = await fetch(`https://api.github.com/search/users?q=${user}`);

        var fetchedUrl2 = await url2.json();
        
        console.log(fetchedUrl2);
        return(fetchedUrl2);
    } catch(err2){
        console.log(err2)
    }
    } 


var form2 = document.getElementById('searchUsersname');
if(form2){
    form2.addEventListener('submit', function(e){

        e.preventDefault();
        var searchUser = document.getElementById('usersearchname').value;
        callUsers(searchUser).then((data)=>{
            for(var i=0; i<data.items.length; i++){

                showCounts(data);
                    showFiles(data.items[i]);
                    if(data.items.length > 0){
                        $(document).ready(function(){
                            $('#exampleModal').modal('hide');
                        })
                    }
            }
        })
    
    })
} 



 var form = document.getElementById('searchUsers');
 if(form){
    form.addEventListener('submit', function(e){

        e.preventDefault();
        var searchBar = document.getElementById('usersearch').value;
        getUsers(searchBar+'/repos').then((data)=>{
            for(var i=0; i<data.length; i++){

                   
                    table(data[i]);
            }
        })
        $(document).ready(function(){
            $('#exampleModal').modal('hide');
        })
    })
} 
if(form){
    form.addEventListener('submit', function(e){

        e.preventDefault();
        var searchBar = document.getElementById('usersearch').value;
        getUsers(searchBar+'/repos').then((data)=>{
            for(var i=0; i<data.length; i++){

                   
                    repoCard(data[i]);
            }
        })
    
    })
} 
 if(form){
    form.addEventListener('submit', function(e){

        e.preventDefault();
        var searchBar = document.getElementById('usersearch').value;
        getUsers(searchBar+'/repos').then((data)=>{
            
                   
                    proCard(data[0]);
                  
        })
    
    })
}  

if(form){
    form.addEventListener('submit', function(e){

        e.preventDefault();
        var searchBar = document.getElementById('usersearch').value;
        getUsers(searchBar).then((data)=>{
            
                   
                
                    followList(data)
        })
    
    })
}  

function table(data){

    var space = document.getElementById('space');

    let card = createClass('div','list mt-2');
    let ul = createClass('ul');
    let li = createClass('a');
    ul.setAttribute('id','myList')
   
    li.setAttribute('href',`profile.html`)
    li.style.margin = '-5px 0px'
    li.innerHTML = `<i class='fa fa-plus-square-o' style='color:black;'></i> ${data.full_name}`
    li.setAttribute('data-placement','right');
    li.setAttribute('data-toggle','tooltip');
    li.setAttribute('title','Click here to go to profile page');
 //   ul.append(li);
    card.append(li);
    space.append(card);
}

var row = createClass('div','row')


function repoCard(data){
    
    var CardRepo = document.getElementById('limitedRepository')

    var cards = createClass('div','card col-md-4 m-3');
    var cardBody = createClass('div','card-body');
    var para = createClass('a');
    para.setAttribute('href',`${data.html_url}`)
    para.style.cursor = 'pointer';
    para.setAttribute('data-placement','right');
    para.setAttribute('data-toggle','tooltip');
    para.setAttribute('title','Click here to view files');
    let language = createClass('p','text-muted mt-3')
    language.innerHTML = `Language : ${data.language}`
    let language1 = createClass('p','text-muted text-end')
    language1.innerHTML = `Updated on : ${data.updated_at}`

/*     var img = createClass('img','img-fluid');
    img.src = `${data.owner.avatar_url}` */

  /*   var numRepo = document.getElementById('numberOfRepo');
    numRepo.innerHTML = `${data}` */

    para.innerHTML = `${data.name}`;

    cardBody.append(para,language,language1);
    cards.append(cardBody);
    row.append(cards)
    CardRepo.append(row)

/* 
    let pic = document.getElementById('profilepic');
    pic.append(img); */

  
}
var row1 = createClass('div','row')

function showFiles(data){
    var showId = document.getElementById('eepoTune');
   
    

    let card3 = createClass('div','list mt-2');
    let ul3 = createClass('ul');
    let li3 = createClass('a');
   
    li3.setAttribute('href',`${data.html_url}`)
    li3.style.margin = '-5px 0px'
    li3.innerHTML = `<i class='fa fa-user-plus' style='color:black;'></i> ${data.login} <br><hr>`
    li3.setAttribute('data-placement','right');
    li3.setAttribute('data-toggle','tooltip');
    li3.setAttribute('title','Click here to go to profile page');
 //   ul.append(li);
    card3.append(li3);
    showId.append(card3);

}

function showCounts(data){

    var repcount = document.getElementById('repoNumber');
    repcount.innerHTML = `${data.total_count}`;

    var usercount = document.getElementById('Numberuser');
    usercount.innerHTML = `${data.items.length}`

    var repoNum = document.getElementById('reponum');
    repoNum.innerHTML = `${data.items.length} User Results <hr>`;

}



function proCard(data){

      
        let pic = document.getElementById('profilepic');


        var img = createClass('img','img-fluid');
        img.src = `${data.owner.avatar_url}`;
        img.style.borderRadius = '50%';

    pic.append(img);

}

function followList(data){

    
    let followers = document.getElementById('followers');


    followers.innerHTML = `<i class="fa fa-users"></i> &nbsp;${data.followers}&nbsp;Followers &nbsp;${data.following}&nbsp;Following`

    let Loginame = document.getElementById('loginname');

    Loginame.innerText = `${data.login}`;

    let badge = document.getElementById('badge');
    badge.innerHTML = `${data.public_repos}`

}
function createClass(elem,elemClass=''){
    let element = document.createElement(elem);
    element.setAttribute('class',elemClass);
    return element;
}

