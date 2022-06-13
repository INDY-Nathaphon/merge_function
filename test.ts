const collection_1: number [] = [1,2,3];
const collection_2: number [] = [4,1,5,66];
function merge (a: number[], b: number[]): number[] {
    var  output: number [] = [] ;
    output=[...a,...b];
    var states = true ;
    for (let i = 0; i < output.length; i++) {
        if(states === true){
            states = false ;
            for (let j = 0; j < output.length-i; j++) {
                if(output[j]>output[j+1]){
                    [output[j],output[j+1]] = [output[j+1],output[j]]
                    states = true;
                }
            }
        }
        else{
            return output;
        }
    }
    return output;
}
console.log(merge(collection_1,collection_2))