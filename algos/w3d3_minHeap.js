// minimum heap data structure
// order of values of an array are slightly sorted
// null at index 0
// index 1 is a number
// parent has to be smaller than each of the children
// index 2 and 3 are children of 1
// 4 and 5 children of 2, 6 and 7 parent of 3... binary tree
// parent is index of half the child rounded down => math.floor(index/2)
// to add a value, push into heap and then compare with the parent to see if they need to swap => while loop

class MinHeap {
    constructor () {
        this.heap = [null];
    }

    addValue(newValue){
        // push the new value to the heap
        this.heap.push(newValue);
        // set the index to check equal to the length of the heap - 1 (we just pushed it so it's at the end)
        let currentIndex = this.heap.length - 1;
        // while loop to swap values if necessary (if the new value is less than the parent (half the index rounded down)
        while ((this.heap[currentIndex] < this.heap[Math.floor(currentIndex/2)]) && (this.heap[Math.floor(currentIndex/2)]>0)){
            // swap the two values at the indices we are comparing
            [this.heap[currentIndex], this.heap[Math.floor(currentIndex/2)]] = [this.heap[Math.floor(currentIndex/2)], this.heap[currentIndex]];
            // change the current index of our new value to the one we swapped it with
            currentIndex = Math.floor(currentIndex/2);
        }
        return this;
    }
}

let testHeap1 = new MinHeap();
testHeap1.addValue(4).addValue(10).addValue(8).addValue(13).addValue(17).addValue(9).addValue(5).addValue(6).addValue(8);
console.log(testHeap1);