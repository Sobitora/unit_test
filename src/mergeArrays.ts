export function merge(collection1: number[], collection2: number[]): number[] {
    let mergeCollection: number[] = []
    let index1 = 0
    let index2 = 0

    while(index1 < collection1.length && index2 < collection2.length){
        if(collection1[index1] < collection2[index2]){
            mergeCollection.push(collection1[index1])
            index1++
        }else{
            mergeCollection.push(collection2[index2])
            index2++
        }
    }

    while(index1 < collection1.length){
        mergeCollection.push(collection1[index1])
        index1++
    }

    while(index2 < collection2.length){
        mergeCollection.push(collection2[index2])
        index2++
    }
    
    return mergeCollection
}
