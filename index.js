

var arr=[]
var pre=[]
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min)>5?1:0; 
}  
function createRandommatrix(){
    // console.log('sts')
    for(i=0;i<8;i++){
        let temp=[]
        for(j=0;j<11;j++){
        temp.push(randomNumber(0, 10))
            
        }
        arr.push(temp)
    }
    


}


function displayArrGrid(){

    var node = document.getElementsByClassName("grid-container")[0]
    // console.log(arr)
    node.innerHTML=""
    for(i in arr){
        for(j in arr[i]){

            if(arr[i][j]===0){

                node.innerHTML+='<div class="grid dead"></div>'
            }
            else{
                node.innerHTML+='<div class="grid alive"></div>'
    
            }
            
        }

    }

}


function CountNeighbours(i,j){
    
    let count=0
    let directions=[
        [-1,1],
        [0,1],
        [1,1],
        [-1,0],
        [1,0],
        [-1,-1],
        [0,-1],
        [1,-1]
    ]
    for(k in directions){
        try{
            // console.log(arr[i+directions[k][0]][j+directions[k][1]])
            if(arr[i+directions[k][0]][j+directions[k][1]]===1){
                count+=1;
                // console.log(i+directions[k][0],j+directions[k][1])
            }

        }
        catch{
            // console.log('skipping',i+directions[k][0],j+directions[k][1])
        }
    }
    // console.log(i,j,count)
    
    return(count)
}

function GameOfLife(){
    var temparr=[...arr]
    for(i in temparr){
        for(j in temparr[i]){
            let noNei=CountNeighbours(parseInt(i),parseInt(j))
            // console.log(noNei,i,j)
            if(arr[i][j]===1){
                if(noNei<2)
                    temparr[i][j]=0
                else if(noNei===2 || noNei===3)
                    temparr[i][j]=1
                else if(noNei>3)
                    temparr[i][j]=0
            }
            else{
                if(noNei===3)
                temparr[i][j]=1
            }
            // break

        }
        // break
    }

    arr=[...temparr]
    
}


createRandommatrix()

function main(){
    
    
    displayArrGrid()
    GameOfLife()


    setInterval(main,1000);
}

main()