function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
return document.querySelector('#nested .target')
}
function  increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]
  let children1 = firstList.children

  for (let i = 0, l = children1.length; i < l; i++) {
    children1[i].innerHTML=(parseInt(children1[i].innerHTML) + n)
  }
  let children2 = secondList.children


  for (let i = 0, l = children2.length; i < l; i++) {
children2[i].innerHTML=(parseInt(children2[i].innerHTML)+ n)
  }
}
function deepestChild(){
  return document.querySelector( '#grand-node div div div div')



}
