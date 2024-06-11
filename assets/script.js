const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log('Here are the topics we learned through Prework:')
listTopics();

console.log('Which topic should we study first?');
selectTopic();
/* if (0) {
    console.log("I'm 0!")
 } else if (null) {
    console.log("I'm null!")
 } else if (true) {
    console.log("I'm true!")
 } */
 /* const topics = ['HTML', 'CSS', 'Git', 'JavaScript']; */
 function listTopics()  {
   for(let i = 0; i <topics.length; i++)  {
      console.log(topics[i])
   }
 } 

function selectTopic()  {
   if (randomTopic ==="HTML")   {
      console.log ("Let's study HTML!");
   } else if (randomTopic === 'CSS')    {
      console.log("Let's study CSS!");
   } else if (randomTopic === "Git")   {
      console.log("Let's study Git!");
   } else if (randomTopic === "JavaScript") {
      console.log("Let's study JavaScript!");
   } else {
      console.log('Please try again!');
   }
}
/*const shapes = ["triangle", "square", "pentagon", "circle"];
//  console.log(shapes[0]);
//  console.log(shapes[1]);
//  console.log(shapes[2]);
//  console.log(shapes[3]);
for(let x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
 } */