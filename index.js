const cells = document.querySelectorAll(".Cell")

 
const startBTN =document.querySelector(".startBTN")

const P1Name = document.querySelector(".P1Name")

const P2Name = document.querySelector(".P2Name")

 


startBTN.addEventListener("click",()=>{
    if(P1Name.value==="" || P2Name.value===""){
       //if the user didnt enter a name dont start the game
    }
    
    else{
       document.querySelector(".PlayerNamesContainer").style.display="none"
       document.querySelector(".startBTNContainer").style.display="none"
       document.querySelector(".gameInfo").style.display=""
       document.querySelector(".boardContainer").style.display=""
       document.querySelector(".playerTurn").textContent=`${P1Name.value} (X) must select a cell!`
       document.querySelector(".P1Score").textContent=`${P1Name.value} score: 0`
       document.querySelector(".P2Score").textContent=`${P2Name.value} score: 0`
  
    }
})

class Player{
    #score=0
    Turn=0
    constructor(Name,Choices,playerScore){
        this.Name=Name;
        this.Choices=Choices;
        this.playerScore=playerScore
    }

      

    increaseScore(){
        this.#score+=1;
    }

    getScore(){
      return  this.#score;
    }

    IncreaseTurn(){
        this.Turn+=1
    }
}

// End of player class

class GameRule{
    constructor(WinningCondition,PlayerChoices){
        this.WinningCondition=WinningCondition;
        this.PlayerChoices=PlayerChoices;
    }
}

//End of GameRule class


class GameBoard{
    constructor(player1,player2,gameRule,playerTurn){
        this.player1=player1;
        this.player2=player2;
        this.gameRule=gameRule;
        this.playerTurn=playerTurn;
    }

    playTurn(cell){
         if(this.gameRule.PlayerChoices.includes(cell.getAttribute("value"))){
            //do nothing
            // here this code is just to prevent the player from placing a marker on an already taken location
         }

         else{
        
         
         if(player1.Turn===player2.Turn){
            player1.IncreaseTurn()
             this.playerTurn.textContent=`${player2.Name.value} (O) must select a cell!`
            this.XTurn(player1,cell)
            
         }

         else{
            player2.IncreaseTurn()
            this.playerTurn.textContent=`${player1.Name.value} (X) must select a cell!`
            this.OTurn(player2,cell)
             
         }
        }
        
                   
    }


    XTurn(player1,cell){
        let X=document.createElement("img")
            X.src="symbol-x.svg"
             

        player1.Choices.push(cell.getAttribute("value"))
        this.gameRule.PlayerChoices.push(cell.getAttribute("value")) 

        cell.append(X)
        this.CheckXWin()
        
    }


    OTurn(player2,cell){

        let O = document.createElement("img")
            O.src="symbol-o.svg"

        player2.Choices.push(cell.getAttribute("value"))
        this.gameRule.PlayerChoices.push(cell.getAttribute("value"))


        cell.append(O)
        this.CheckOWin()
        
    }


    CheckXWin(){
        player1.Choices.sort()
      
        
        for(let i=0; i<gameRule.WinningCondition.length;i++){

            if(`${player1.Choices[0]}${player1.Choices[1]}${player1.Choices[2]}`===gameRule.WinningCondition[i].join("")){
                player1.increaseScore()
                this.startNewGame();
                player1.playerScore.textContent=`${player1.Name.value} score: ${player1.getScore()}`
            }
                           
                if(`${player1.Choices[0]}${player1.Choices[1]}${player1.Choices[3]}`===gameRule.WinningCondition[i].join("")){
                    player1.increaseScore()
                    this.startNewGame();
                        player1.playerScore.textContent=`${player1.Name.value} score: ${player1.getScore()}`
                }

                if(`${player1.Choices[0]}${player1.Choices[2]}${player1.Choices[3]}`===gameRule.WinningCondition[i].join("")){
                    player1.increaseScore()
                    this.startNewGame();
                        player1.playerScore.textContent=`${player1.Name.value} score: ${player1.getScore()}`
                }

                if(`${player1.Choices[1]}${player1.Choices[2]}${player1.Choices[3]}`===gameRule.WinningCondition[i].join("")){
                    player1.increaseScore()
                    this.startNewGame();
                    player1.playerScore.textContent=`${player1.Name.value} score: ${player1.getScore()}` 
                }

                if(`${player1.Choices[1]}${player1.Choices[2]}${player1.Choices[4]}`===gameRule.WinningCondition[i].join("")){
                    player1.increaseScore()
                    this.startNewGame();
                    player1.playerScore.textContent=`${player1.Name.value} score: ${player1.getScore()}`
                }

                if(`${player1.Choices[2]}${player1.Choices[3]}${player1.Choices[4]}`===gameRule.WinningCondition[i].join("")){
                    player1.increaseScore()
                    this.startNewGame();
                    player1.playerScore.textContent=`${player1.Name.value} score: ${player1.getScore()}`
                }     
        }

        if(player1.Turn==5 && player2.Turn==4){
            this.startNewGame()
        }
         
}
    CheckOWin(){
        player2.Choices.sort()

        for(let i=0; i<gameRule.WinningCondition.length;i++){

            if(`${player2.Choices[0]}${player2.Choices[1]}${player2.Choices[2]}`===gameRule.WinningCondition[i].join("")){
                player2.increaseScore()
                this.startNewGame();
                player2.playerScore.textContent=`${player2.Name.value} score: ${player2.getScore()}`          
            }

            if(`${player2.Choices[0]}${player2.Choices[1]}${player2.Choices[3]}`===gameRule.WinningCondition[i].join("")){
                player2.increaseScore()
                this.startNewGame();
                player2.playerScore.textContent=`${player2.Name.value} score: ${player2.getScore()}`          
            }

            if(`${player2.Choices[1]}${player2.Choices[2]}${player2.Choices[3]}`===gameRule.WinningCondition[i].join("")){
                player2.increaseScore()
                this.startNewGame();
                player2.playerScore.textContent=`${player2.Name.value} score: ${player2.getScore()}`          
            }

            
            if(`${player2.Choices[0]}${player2.Choices[2]}${player2.Choices[3]}`===gameRule.WinningCondition[i].join("")){
                player2.increaseScore()
                this.startNewGame();
                player2.playerScore.textContent=`${player2.Name.value} score: ${player2.getScore()}`          
            }
 
        } 
        console.log(player2.Choices)
      
}

    startNewGame(){
        this.gameRule.PlayerChoices=[]
        this.player1.Choices=[]
        this.player2.Choices=[]
        player1.Turn=0
        player2.Turn=0
        this.playerTurn.textContent=`${player1.Name.value} (X) Must select a cell`
        cells.forEach(cell=>{
            if(cell.hasChildNodes()){
              cell.firstChild.remove()
            }
         })

    }

}

//end of gameboard class



//Inilizating the objects

const player1 = new Player(P1Name,[],document.querySelector(".P1Score"))
    


const player2 = new Player(P2Name,[],document.querySelector(".P2Score"))

const gameRule = new GameRule([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],[])


const gameBoard = new GameBoard(player1,player2,gameRule,document.querySelector(".playerTurn"))

cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
         gameBoard.playTurn(cell)
    })
})


//

 

 


 
 
 

 

 

 

 


 



 
   

  


 





 

 

 