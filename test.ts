const collection_1: number [] = [1,2,3,5];
const collection_2: number [] = [4,5,6];
function merge (a: number[], b: number[]): number[] {
    var  output: number [] = [] ;
    output=[...a,...b];
    return output.sort();
}
merge(collection_1,collection_2)