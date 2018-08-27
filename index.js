function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector('#nested div div div.target');
}

function increaseRankBy(n) {

const list =  document.querySelectorAll('.ranked-list li') ;

for (let i = 0; i< list.length; i++){
  list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
}




 }

function deepestChild() {
  let list1 = document.querySelector('#grand-node');
  let list2 = list1.children[0];
  while (list2) {
    list1 = list2;
    list2 = list1.children[0];
  }
  return list1;
  

}
