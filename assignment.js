
 function kilometerToMeter (kilomrter) {
    var meter = kilomrter / 1000;
    return meter ;

}
var result = kilometerToMeter(50000);
console.log(result);



function budgetCalculator( watch, mobile, laptop){
    var watchprice = 50;
    var mobileprice = 100;
    var laptopprice = 500;
    total = watchprice * watch + mobileprice * mobile + laptopprice * laptop ;
    return total ;
}
console.log(budgetCalculator(2 ,3,4));





function megaFriend(friends) {
  if (friends.length == 0) {
    return "Please enter at least one name";
  } else {
    var bigest = friends[0];
    for (var i = 0; i < friends.length; i++) {
      if (friends[i].length == 0) {
        return "Please enter each name correctly";
      } else if (bigest.length < friends[i].length) {
        bigest = friends[i];
      }
    }
    return bigest;
  }
}

friendsList = ["apple", "himel", "sadat", "opel", "imran"];
var bigestName = tinyFriend(friendsList);
console.log(bigestName);