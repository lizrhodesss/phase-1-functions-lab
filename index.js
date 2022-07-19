function distanceFromHqInBlocks(pickUp) {
  let result = (pickUp - 42)
   if (result < 0){
    result = result * -1
   }
   return result
}

function distanceFromHqInFeet(pickUp) {
  let result = distanceFromHqInBlocks(pickUp) * 264
 return result
}

function distanceTravelledInFeet(pickUp, dropOff) {
let result = ((dropOff - pickUp) * 264)
    if (result < 0){
        result = result * -1
    }
return result
}

function calculatesFarePrice(pickUp, dropOff) {
    let result = distanceTravelledInFeet(dropOff, pickUp)
    if (result <= 400) {
        return result = 0
    } else if (result > 400 && result <= 2000) {
        return (result - 400) * .02
    } else if (result > 2000 && result < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }


}