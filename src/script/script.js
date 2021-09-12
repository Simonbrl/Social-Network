const friend = [
    {
        id : 1, 
        firstname : 'Bernard',
        name : 'Moniez',
        picture : 'bernard_moniez.jpg',
    },
    {
        id : 2, 
        firstname : 'Robert',
        name : 'Pichon',
        picture : 'robert_pichon.jpg',
    },
    {
        id : 3, 
        firstname : 'Élise',
        name : 'Bertrand',
        picture : 'elise_bertrand.jpg',
    },
    {
        id : 4, 
        firstname : 'Henry',
        name : 'Bernier',
        picture : 'henry_bernier.jpg',
    },
    {
        id : 5, 
        firstname : 'Gabriel',
        name : 'Monrency',
        picture : 'gabriel_monrency.jpg',
    },
    {
        id : 6, 
        firstname : 'Jeanne',
        name : 'Clément',
        picture : 'jeanne_clement.jpg',
    },
    {
        id : 7, 
        firstname : 'Jacqueline',
        name : 'Lachapelle',
        picture : 'jacqueline_lachapelle.jpg',
    },
    {
        id : 8, 
        firstname : 'Émilie',
        name : 'Labossière',
        picture : 'emilie_labossiere.jpg',
    },
    {
        id : 9, 
        firstname : 'Alexandre',
        name : 'Martineau',
        picture : 'alexandre_martineau.jpg',
    },
    {
        id : 10, 
        firstname : 'Amélie',
        name : 'Boncoeur',
        picture : 'amelie_boncoeur.jpg',
    },
    {
        id : 11,
        firstname : 'Laure',
        name : 'Plaisance',
        picture : 'laure_plaisance.jpg',
    },
    {
        id : 12, 
        firstname : 'Adrien',
        name : 'Lapierre',
        picture : 'adrien_lapierre.jpg',
    },
    {
        id : 13, 
        firstname : 'Valentine',
        name : 'Guertin',
        picture : 'valentine_guertin.jpg',
    },
    {
        id : 14, 
        firstname : 'Delphine',
        name : 'Delattre',
        picture : 'delphine_delattre.jpg',
    },
    {
        id : 15, 
        firstname : 'Lucien',
        name : 'Laporte',
        picture : 'lucien_laporte.jpg',
    },
    {
        id : 16, 
        firstname : 'Zoé',
        name : 'Paquin',
        picture : 'zoe_paquin.jpg',
    },
    {
        id : 17,
        firstname : 'Steven',
        name : 'Defossez',
        picture : 'steven_defossez.jpg',
    },
    {
        id : 18, 
        firstname : 'Paul',
        name : 'Vidole',
        picture : 'paul_vidole.jpg',
    },
    {
        id : 19, 
        firstname : 'Chloé',
        name : 'Demaison',
        picture : 'chloe_demaison.jpg',
    },
]

const friendWrapper = document.querySelector('.friend')
const friendUl = friendWrapper.querySelector('ul')
function loadFriend(){
    let active = ''
    friend.forEach(element => {
        let randomNumber = Math.floor(Math.random() * 10);
        if(randomNumber > 5) active = ' active'
        else active = ''
        friendUl.insertAdjacentHTML(
            'beforeend', 
            `<li li-index="${element.id}">
                <div class="friend-item">
                    <div class="friend-picture">
                        <img src="./src/img/user/50x50/${element.picture}">
                        <span class="${active}"></span>
                    </div>    
                    <div class="friend-name">${element.firstname} ${element.name}</div>
                </div>
            </li>`
        )
    });
}

const notificationWrapper = document.querySelector('.notification')
const notificationUl = notificationWrapper.querySelector('ul')
const notificationLi = notificationUl.querySelector('li')
const navNotification = document.querySelector('#nav-notification')
const navNotifItem = navNotification.querySelector('.navigation-item span')
function loadNotification(){
    let notification = []

    let newDate = new Date()
    let year = newDate.getFullYear()
    let month = newDate.getMonth()
    let day = newDate.getDate()
    let datetime

    for(let i = 0; i<10; i++){
        let id = Math.floor(Math.random() * friend.length)
        let minute = Math.floor(Math.random() * 60)
        let hour = Math.floor(Math.random() * 24)
        day = newDate.getDate()
        
        if(i<3){
            if(new Date().getHours() < 1){
                day = day-1
                hour = Math.floor(Math.random() * 24)
                minute = Math.floor(Math.random() * 60)
            }
            else{
                while(hour > newDate.getHours()){
                    hour = Math.floor(Math.random() * 24)
                }
                while(minute > newDate.getMinutes()){
                    minute = Math.floor(Math.random() * 60)
                }
                datetime = new Date(year, month, day, hour, minute)
            }
        }
        else if(i > 2 && i < 5) datetime = new Date(year, month, day-1, hour, minute)
        else if(i > 4 && i < 8) datetime = new Date(year, month, day-2, hour, minute)
        else if(i > 7 && i < 10) datetime = new Date(year, month, day-3, hour, minute)

        const textNotif = [
            'liked your comment', 
            'liked your post',
            'commented your post',
            'shared your post',
            'mentionned you in a comment',
            'sent you a friend request'
        ]

        notification.push(
            {
                id : id,
                hour : hour,
                minute : minute,
                datetime : datetime,
                text : textNotif[Math.floor(Math.random()*textNotif.length)]
            }
        )
    }
    notification.sort((a,b) => b.datetime - a.datetime)
    let date
    let badge
    let newNotif
    
    let rdmNb = Math.floor(Math.random() * 3)
    let i = 0
    navNotifItem.innerHTML = rdmNb+1
 
    notification.forEach(notif => {
        let ampm = notif.hour < 12 ? 'AM' : 'PM'
        let hour = notif.hour % 12
        hour = hour ? hour : 12
        let minute = notif.minute < 10 ? '0'+notif.minute : notif.minute

        if(notif.datetime.getDate() == day) date = 'Today'
        else if(notif.datetime.getDate() == day - 1) date = 'Yesterday'
        else date = new Date().getDate() -  notif.datetime.getDate() + ' days ago'

        if(i<=rdmNb) {
            badge = ' badge'
            newNotif = ' new'
        }
        else {
            badge = ''
            newNotif = ''
        }

        notificationUl.insertAdjacentHTML(
            'beforeend',
            `<li>
                <div class="notification-item">
                    <div class="friend-picture-notification">
                        <img src="./src/img/user/100x100/${friend[notif.id].picture}">
                    </div>
                    <div class="notif-info">
                        <div class="notif-content${newNotif}"><strong class="friend-name-notif">${friend[notif.id].firstname} ${friend[notif.id].name}</strong> ${notif.text}</div>
                        <span class="date-time-notif${badge}">${date}, ${hour}:${minute} ${ampm}</span>
                    </div>
                </div>
            </li>`
        )
        i++
    });
}

const storyWrapper = document.querySelector('.story')
const cards = storyWrapper.querySelector('.cards')
const card = cards.querySelectorAll('.card')
function loadStory(){
    let storyIdCheck = []
    let storyImgCheck = []
    let nbStory = (window.innerWidth > 850) ? 4 : 3
    for(let i = 0; i < 4; i++){
        let id = Math.floor(Math.random() * friend.length)
        let idImg = Math.floor(Math.random() * 7)+1

        while (storyIdCheck.find(e => e == id)){
            id = Math.floor(Math.random() * friend.length)
        }
        storyIdCheck.push(id)

        while (storyImgCheck.find(e => e == idImg)){
            idImg = Math.floor(Math.random() * 7)+1
        }
        storyImgCheck.push(idImg)

        cards.insertAdjacentHTML(
            'beforeend',
            `<div class="card">
                <div class="friend-picture-story">
                    <img src="./src/img/story/story_${idImg}.jpg">
                    <span></span>
                </div>
                <img class="friend-profile-picture" src="./src/img/user/50x50/${friend[id].picture}">
                <span class="friend-name-story">${friend[id].firstname} ${friend[id].name}</span>
            </div>`
        )
    }
}

const feedWrapper = document.querySelector('.feed')
const post = feedWrapper.querySelector('.feed-post')
function loadFeed(){
    let postIdCheck = []
    let postImgCheck = []
    const textFeed = [
        'Nemo vel quo nostrum earum autem ad explicabo quasi a soluta qui tempora optio, quibusdam eveniet ipsam. Quibusdam, incidunt. Ut, architecto autem.',
        'Nostrum facere nihil facilis! Officiis odit veniam accusantium incidunt, necessitatibus at eveniet nesciunt?',
        'Officia nihil ipsum alias vero corporis eveniet, dolor labore suscipit sed at error minima ab porro aperiam maiores dignissimos quo nisi eum.',
        'Fugiat eveniet facilis sequi iste iusto voluptatum deserunt tenetur, voluptatibus corrupti!'
    ]

    for(let i = 0; i < 5; i++){
        let id = Math.floor(Math.random() * friend.length)
        let idImg = Math.floor(Math.random() * 7)+1

        while (postIdCheck.find(e => e == id)){
            id = Math.floor(Math.random() * friend.length)
        }
        postIdCheck.push(id)

        while (postImgCheck.find(e => e == idImg)){
            idImg = Math.floor(Math.random() * 7)+1
        }
        postImgCheck.push(idImg)

        let like = Math.floor(Math.random() * 70)
        let comment = Math.floor(Math.random() * 20)
        let share = Math.floor(Math.random() * 10)

        let text = textFeed[Math.floor(Math.random()*textFeed.length)]

        post.insertAdjacentHTML(
            'beforeend',
            `<div class="friend-post">
                <div class="friend-post-info">
                    <img src="./src/img/user/50x50/${friend[id].picture}">
                    <div class="friend-name-date-time-post">
                        <strong class="friend-name-post">${friend[id].firstname} ${friend[id].name}</strong>
                        <span class="date-time-friend-post">Today, 3:53 PM</span>
                    </div>
                    <span class="post-settings"><i class="fas fa-ellipsis-h"></i></span>
                </div>
                <hr>
                <div class="friend-post-content">
                    <div class="friend-post-message">${text}</div>
                    <div class="friend-post-picture">
                    <img src="./src/img/post/post_${idImg}.jpg">
                    </div>
                </div>
                <hr>
                <div class="post-control">
                    <div class="btn-post-control btn-like-post">
                        <i class="far fa-heart"></i>
                        <span>${like} Like</span>
                    </div>
                    <div class="btn-post-control btn-comment-post">
                        <i class="far fa-comment-alt"></i>
                        <span>${comment} Comment</span>
                    </div>
                    <div class="btn-post-control btn-share-post">
                        <i class="fas fa-share"></i>
                        <span>${share} Share</span>
                    </div>
                </div>
                <div class="comment-post">
                    <img src="./src/img/user/50x50/didier_petou.jpg">
                    <div class="input-comment">
                        <input type="text" placeholder="Write a comment...">
                        <div class="comment-control">
                            <i class="fas fa-plus-circle"></i>
                            <i class="fas fa-paperclip"></i>
                            <i class="far fa-smile"></i>
                            <i class="far fa-image"></i>
                        </div>
                    </div>
                </div>
            </div>`
        )
    }
}

const messageWrapper = document.querySelector('.message')
const messageUl = messageWrapper.querySelector('ul')
const navMessage = document.querySelector('#nav-message')
const navMessItem = navMessage.querySelector('.navigation-item span')
function loadMessage(){
    let postIdCheck = []
    let postImgCheck = []
    let message = []

    let newDate = new Date()
    let year = newDate.getFullYear()
    let month = newDate.getMonth()
    let day = newDate.getDate()
    let datetime
    for(let i = 0; i<7; i++){
        let id = Math.floor(Math.random() * friend.length)
        let idImg = Math.floor(Math.random() * 7)+1

        while (postIdCheck.find(e => e == id)){
            id = Math.floor(Math.random() * friend.length)
        }
        postIdCheck.push(id)

        while (postImgCheck.find(e => e == idImg)){
            idImg = Math.floor(Math.random() * 7)+1
        }
        postImgCheck.push(idImg)
        let minute = Math.floor(Math.random() * 60)
        let hour = Math.floor(Math.random() * 24)
        day = newDate.getDate()
        
        if(i<2){
            if(new Date().getHours() < 1){
                day = day-1
                hour = Math.floor(Math.random() * 24)
                minute = Math.floor(Math.random() * 60)
            }
            else{
                while(hour > newDate.getHours()){
                    hour = Math.floor(Math.random() * 24)
                }
                while(minute > newDate.getMinutes()){
                    minute = Math.floor(Math.random() * 60)
                }
                datetime = new Date(year, month, day, hour, minute)
            }
        }
        else if(i > 1 && i < 4) datetime = new Date(year, month, day-1, hour, minute)
        else if(i > 3 && i < 5) datetime = new Date(year, month, day-2, hour, minute)
        else if(i > 4 && i < 7) datetime = new Date(year, month, day-3, hour, minute)

        const textMessage = [
            'sent you a photo', 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Libero esse, quas nobis hic ad corporis expedita harum quia molestiae corrupti optio at nemo minus unde.',
            'Fugit voluptatum fuga asperiores labore soluta laborum placeat inventore quas.',
            'Didier, pariatur!',
            'In vero repellat mollitia maiores sunt vel impedit hic',
            'Explicabo soluta repudiandae asperiores cum',
            'Consequuntur minima aspernatur',
            'Quas quos fugit nisi aperiam possimus in praesentium',
            'Atque, repudiandae nemo!',
            'Ratione inventore Didier nihil',
            'Voluptates harum voluptatum ex a alias atque.',
            'Ea modi eos unde nesciunt corrupti iusto necessitatibus.'
        ]

        message.push(
            {
                id : id,
                hour : hour,
                minute : minute,
                datetime : datetime,
                text : textMessage[Math.floor(Math.random()*textMessage.length)]
            }
        )

        
    }
    message.sort((a,b) => b.datetime - a.datetime)
    let date
    let rdmNb = Math.floor(Math.random() * 3)
    let i = 0
    let badge
    let newMess
    navMessItem.innerHTML = rdmNb+1

    message.forEach(mess => {
        let ampm = mess.hour < 12 ? 'AM' : 'PM'
        let hour = mess.hour % 12
        hour = hour ? hour : 12
        let minute = mess.minute < 10 ? '0'+mess.minute : mess.minute

        if(mess.datetime.getDate() == day) date = 'Today'
        else if(mess.datetime.getDate() == day - 1) date = 'Yesterday'
        else date = new Date().getDate() -  mess.datetime.getDate() + ' days ago'

        if(i<=rdmNb) {
            badge = ' badge'
            newMess = ' new'
        }
        else {
            badge = ''
            newMess = ''
        }
        messageUl.insertAdjacentHTML(
            'beforeend',
            `<li li-index="${friend[mess.id].id}">
                <div class="message-item${badge}">
                    <div class="friend-picture-message">
                        <img src="./src/img/user/50x50/${friend[mess.id].picture}">
                    </div>
                    <div class="message-info">
                        <strong class="friend-name-message${newMess}">${friend[mess.id].firstname} ${friend[mess.id].name}</strong> 
                        <span class="message-content${newMess}">${mess.text}</span>
                        <span class="date-time-message">${date}, ${hour}:${minute} ${ampm}</span>
                    </div>
                </div>
            </li>`
        )
        i++
    })
}

const conversationWrapper = document.querySelector('.conversation')
const conversationContent = conversationWrapper.querySelector('.conversation-content')
const conversationMessage = conversationContent.querySelector('.conversation-message')
function openConversation(id){
    let rdmNb = Math.floor(Math.random() * 8)
    let fromTo
    const friendName = conversationWrapper.querySelector('.friend-name-conversation')
    friendName.querySelector('span').innerHTML = ''
    friendName.querySelector('span').innerHTML = friend[id-1].firstname + ' ' + friend[id-1].name
    const textMessage = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Libero esse, quas nobis hic ad corporis expedita harum quia molestiae corrupti optio at nemo minus unde.',
        'Fugit voluptatum fuga asperiores labore soluta laborum placeat inventore quas.',
        'Didier, pariatur!',
        'In vero repellat mollitia maiores sunt vel impedit hic',
        'Explicabo soluta repudiandae asperiores cum',
        'Consequuntur minima aspernatur',
        'Quas quos fugit nisi aperiam possimus in praesentium',
        'Atque, repudiandae nemo!',
        'Ratione inventore Didier nihil',
        'Voluptates harum voluptatum ex a alias atque.',
        'Ea modi eos unde nesciunt corrupti iusto necessitatibus.'
    ]
    conversationMessage.textContent = ''
    for(let i = 0; i<rdmNb; i++){
        let rdmFromTo = Math.floor(Math.random() * 2)
        if(rdmFromTo < 1) fromTo = 'to'
        else fromTo = 'from'
        conversationMessage.insertAdjacentHTML(
            'beforeend',
            `<div class="conversation-message-item">
                <div class="message-${fromTo}-friend">${textMessage[Math.floor(Math.random()*textMessage.length)]}</div>
            </div>`
        )
    }
}

loadFriend()
loadNotification()
loadStory()
loadFeed()
loadMessage()

navMessage.addEventListener('click', function(){
    messageWrapper.style.display = "block"
    conversationWrapper.style.display = "none"
})

const friendLi = friendUl.querySelectorAll('li')
friendLi.forEach(element => {
    element.addEventListener('click', function(){
        messageWrapper.style.display = "none"
        conversationWrapper.style.display = "flex"
        openConversation(element.getAttribute('li-index'))
    })
});

const messageLi = messageUl.querySelectorAll('li')
messageLi.forEach(element => {
    element.addEventListener('click', function(){
        messageWrapper.style.display = "none"
        conversationWrapper.style.display = "flex"
        openConversation(element.getAttribute('li-index'))
    })
});

const btnCloseConv = document.querySelector('.friend-name-conversation i')
btnCloseConv.addEventListener('click', function(){
    conversationWrapper.style.display = "none"
    messageWrapper.style.display = "block"
})

navNotification.addEventListener('click', function(){
    notificationWrapper.style.display = 'block'
})

const btnCloseNotif = notificationWrapper.querySelector('.title i')
btnCloseNotif.addEventListener('click', function(){
    notificationWrapper.style.display = "none"
})

const btnCloseMess = messageWrapper.querySelector('.title i')
btnCloseMess.addEventListener('click', function(){
    messageWrapper.style.display = "none"
})
