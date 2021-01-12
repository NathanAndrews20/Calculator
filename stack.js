export default class Stack{
    constructor(){
        this.head = null;
    }

    isEmpty(){
        return this.head === null;
    }

    push(item){
        if(this.isEmpty()){
            this.head = new Node(item);
            return;
        }
        let newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop(){
        this.head = this.head.next;
    }

    peek(){
        return this.head.data;
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}