function dragUser(user, event) {
    event.dataTransfer.setData('User', user.id);
    event.dataTransfer.setData('Category', user.className);
}
function dropUser(target, event) {
    let user = event.dataTransfer.getData('User');
    let category = event.dataTransfer.getData('Category');
    if (category.indexOf(target.id) > -1) {
        alert('Correct');
      
      // add to category
        target.appendChild(document.getElementById(user)); 
    } else {
        alert('Incorrect');
      return false;
    }

}