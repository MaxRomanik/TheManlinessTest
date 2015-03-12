//returns html formatted title and text
function helloWorld(title,text) {
    var heading=getHeading(title);
    var body=getBodyText(text);
    return heading+body;
}

//returns properly formatted H1 title
function getHeading(title) {
    return '<h1>'+title+'</h1>';
    
}

//returns properly formatted body text
function getBodyText(text) {
    return '<div>'+text+'</div>';
    
}

module.exports={
    HelloWorld:helloWorld
};