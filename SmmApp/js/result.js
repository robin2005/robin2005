
var dataExam =
[{ title: "What’s your gender?", a: "Male", b: "Female" },
{ title: "Your birthday is?", isDate: true },
{ title: "The Boomers intended to change the world. If there's a chance to back to the WW2 , which roles would you like to be?", a: "A poet with romantic fantasy", b: "A scholar with advanced ideas" },
{ title: "Name a place where it might be romantic to get stranded with your partner.", a: "Cabin/Lodge", b: "Park" }, { title: "Name a food you would cook first on the grill for Thanksgiving Dinner.", a: "Turkey", b: " Sweet potato pie" }];

var result = {
A_3: {
    sacle: "80%",
    name: "John F. Kennedy",
    img: "images/avtar_3.png",
    content: "John F. Kennedy - The first president reported sparing the turkey given to him.<br /><br />You are a passionate, motivated, and confident leader who builds community with your cheerful disposition and relentless determination.",
},
B_3: {
    sacle: "90%",
    name: "Joan Allen",
    img: "images/avtar_9.png",
    content: "Joan Allen - The heroine in the film \"The ice storm\" about Thanksgiving.<br /><br />You are a passionate, motivated, and confident leader who builds community with your cheerful disposition and relentless determination.",
},
A_4: {
    sacle: "90%",
    name: "Victor Hugo",
    img: "images/avtar_5.png",
    content: "Victor Hugo - \"Dirty dog always ungrateful, ungrateful originally part of the base.\"<br /><br />You occasional obstinate, however, you are dependable partners, soothing your friends and lovers through your trustworthiness and devotion.",
},
B_4: {
    sacle: "80%",
    name: "Gertrude Stein",
    img: "images/avtar_10.png",
    content: "Gertrude Stein  - \"Silent gratitude isn't very much use to anyone. \"<br /><br />You occasional obstinate, however, you are dependable partners, soothing your friends and lovers through your trustworthiness and devotion.",
},
A_5: {
    sacle: "80%",
    name: "Franklin Roosevelt",
    img: "images/avtar_2.png",
    content: "Franklin Roosevelt - Signed a parliamentary resolution that officially changed the date of Thanksgiving from the last Thursday in November to the fourth Thursday in November.<br /><br />Communication is paramount for you, and you require fluent streams of transmission. You love texting and tweeting almost as much as they love talking IRL.",
},
B_5: {
    sacle: "90%",
    name: "Doris Emrick Lee",
    img: "images/avtar_8.png",
    content: "Doris Emrick Lee - An American painter who bustling scenes of women preparing a Thanksgiving feast.<br /><br />Communication is paramount for you, and you require fluent streams of transmission. You love texting and tweeting almost as much as they love talking IRL.",
},
A_6: {
    sacle: "90%",
    name: "Abraham Lincoln",
    img: "images/avtar_1.png",
    content: "Abraham Lincoln - Who announced that the last Thursday of November as the Federal Thanksgiving Day.<br /><br />You tend to be domestically oriented. You love to create cozy, safe spaces that serve as your personal sanctuaries, then spend lots of time in them.",
},
B_6: {
    sacle: "80%",
    name: "Sarah Josepha Buell Hale",
    img: "images/avtar_6.png",
    content: "Sarah Josepha Buell Hale - Campaigned for the creation of the American holiday - Thanksgiving<br /><br />For you, it's important to maintain a healthy work-life balance and avoid treating your friends and partners like your assistants.",
},
A_7: {
    sacle: "80%",
    name: "John F. Kennedy",
    img: "images/avtar_3.png",
    content: "John F. Kennedy - The first president reported sparing the turkey given to him.<br /><br />You are a natural leader, and you enjoy cultivating friendships and romances that are artistically and creatively inspired.",
},
B_7: {
    sacle: "90%",
    name: "Sarah Josepha Buell Hale",
    img: "images/avtar_6.png",
    content: "Sarah Josepha Buell Hale - Campaigned for the creation of the American holiday - Thanksgiving<br /><br />You are a natural leader, and you enjoy cultivating friendships and romances that are artistically and creatively inspired.",
},
A_8: {
    sacle: "90%",
    name: "Victor Hugo",
    img: "images/avtar_5.png",
    content: "Victor Hugo - \"Dirty dog always ungrateful, ungrateful originally part of the base.\"<br /><br />You long to be meticulous in all pursuits, you  must remember that constantly chasing after the ideal can be destructive when applied to self or others.",
},
B_8: {
    sacle: "80%",
    name: "Sarah Josepha Buell Hale",
    img: "images/avtar_6.png",
    content: "Sarah Josepha Buell Hale - Campaigned for the creation of the American holiday - Thanksgiving<br /><br />You long to be meticulous in all pursuits, you  must remember that constantly chasing after the ideal can be destructive when applied to self or others.",
},
A_9: {
    sacle: "80%",
    name: "Franklin Roosevelt",
    img: "images/avtar_2.png",
    content: "Franklin Roosevelt - Signed a parliamentary resolution that officially changed the date of Thanksgiving from the last Thursday in November to the fourth Thursday in November.<br /><br />Relationships are paramount for you, who find balance in companionship. You love harmonious partnerships with fashionable mates, especially those who make attractive arm candy.",
},
B_9: {
    sacle: "90%",
    name: "Doris Emrick Lee",
    img: "images/avtar_8.png",
    content: "Doris Emrick Lee - An American painter who bustling scenes of women preparing a Thanksgiving feast.<br /><br />Relationships are paramount for you, who find balance in companionship. You love harmonious partnerships with fashionable mates, especially those who make attractive arm candy.",
},
A_10: {
    sacle: "90%",
    name: "Abraham Lincoln",
    img: "images/avtar_1.png",
    content: "Abraham Lincoln - Who announced that the last Thursday of November as the Federal Thanksgiving Day.<br /><br />You simply know what you want and aren't afraid to work hard and play the long game to get it. You never show your cards, and your enigmatic nature is what makes you so seductive and beguiling.",
},
B_10: {
    sacle: "80%",
    name: "Ella Wheeler Wilcox",
    img: "images/avtar_7.png",
    content: "Ella Wheeler Wilcox - \"Laugh, and the world laughs with you; Weep, and you weep alone. \"<br /><br />You never show your cards, and your enigmatic nature is what makes you so seductive and beguiling.",
},
A_11: {
    sacle: "80%",
    name: "John F. Kennedy",
    img: "images/avtar_3.png",
    content: "John F. Kennedy - The first president reported sparing the turkey given to him.<br /><br />You are a excellent storyteller and can light up any room with your exhilarating tales and infectious laughter.",
},
B_11: {
    sacle: "90%",
    name: "Joan Allen",
    img: "images/avtar_9.png",
    content: "Joan Allen - The heroine in the film \"The ice storm\" about Thanksgiving.<br /><br />You are excellent storytellers and can light up any room with your exhilarating tales and infectious laughter.",
},
A_12: {
    sacle: "80%",
    name: "Victor Hugo",
    img: "images/avtar_5.png",
    content: "Victor Hugo - \"Dirty dog always ungrateful, ungrateful originally part of the base.\"<br /><br />For you, it's important to maintain a healthy work-life balance and avoid treating your friends and partners like your assistants.",
},
B_12: {
    sacle: "90%",
    name: "Sarah Josepha Buell Hale",
    img: "images/avtar_6.png",
    content: "Sarah Josepha Buell Hale - Campaigned for the creation of the American holiday - Thanksgiving<br /><br />For you, it's important to maintain a healthy work-life balance and avoid treating your friends and partners like your assistants.",
},
A_1: {
    sacle: "80%",
    name: "Friedrich Wilhelm Nietzsche",
    img: "images/avtar_4.png",
    content: "Friedrich Wilhelm Nietzsche -  \"Gratitude is the health of the soul.\"<br /><br />You like things to be simple and easily-control, so you know precisely who or what to love or hate.",
},
A_0: {
    sacle: "80%",
    name: "Victor Hugo",
    img: "images/avtar_5.png",
    content: "Victor Hugo - \"Dirty dog always ungrateful, ungrateful originally part of the base.\"<br /><br />For you, it's important to maintain a healthy work-life balance and avoid treating your friends and partners like your assistants.",
},
B_0: {
    sacle: "90%",
    name: "Sarah Josepha Buell Hale",
    img: "images/avtar_6.png",
    content: "Sarah Josepha Buell Hale - Campaigned for the creation of the American holiday - Thanksgiving<br /><br />For you, it's important to maintain a healthy work-life balance and avoid treating your friends and partners like your assistants.",
},
B_1: {
    sacle: "90%",
    name: "Gertrude Stein",
    img: "images/avtar_10.png",
    content: "Gertrude Stein  - \"Silent gratitude isn't very much use to anyone. \"<br /><br />You like things to be simple and easily-control, so you know precisely who or what to love or hate.",
},
A_2: {
    sacle: "80%",
    name: "Friedrich Wilhelm Nietzsche",
    img: "images/avtar_4.png",
    content: "Friedrich Wilhelm Nietzsche -  \"Gratitude is the health of the soul.\"<br /><br />Kind and gentle, you're invigorated by shared experiences of music and romance.",
},
B_2: {
    sacle: "90%",
    name: "Ella Wheeler Wilcox",
    img: "images/avtar_7.png",
    content: " Ella Wheeler Wilcox - \"Laugh, and the world laughs with you; Weep, and you weep alone. \"<br /><br />Kind and gentle, you're invigorated by shared experiences of music and romance.",
}
};
