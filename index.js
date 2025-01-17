function mapToNegativize(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
    newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

function reduceToTotal(src, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ){
        if (sourceArray[i] == false)
        return false
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ){
        if (sourceArray[i] == true)
        return true
    }
    return false
}