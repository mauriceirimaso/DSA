class Node{

    constructor(value)
    {
      this.value=value;
      this.left=null;
      this.right=null
    }
}


class BST{

    constructor()
    {
        this.root=null
        this.right=null
        this.left=null
    }
    insert(value)
    {
        var newNode =new Node(value)

        if(!this.root)
        {
            this.root=newNode;

        }
        else
        {
            
        }
    }

}

var mauricetree=new BST()
mauricetree.insert(12);
console.log("maurice tree",mauricetree)