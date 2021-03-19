import React, {Component} from 'react';
import './BurgerStyle.css'

export default class Burger extends Component{
    state = {
        lettuce: 0,
        tomato: 0,
        chease: 0,
        meat: 0,
    }

    addRemoveIngredient =(action, ingredient)=>{
        let {
            lettuce,
            tomato,
            chease,
            meat
        } = this.state;

        let stateValue;

        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce
                break;
            }
            case 'tomato':{
                stateValue = tomato
                break;
            }
            case 'chease':{
                stateValue = chease
                break;
            }
            case 'meat':{
                stateValue = meat
                break;
            }
            default:break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        })
    }

    burgerContent = () => {
        let {
            lettuce,
            tomato,
            chease,
            meat
        } = this.state;

        let burger = []

        //outputing the lettuce
        for(let i=0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuceSide"></div>)
        }

        for(let i=0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>)
        }

        for(let i=0; i < chease; i++){
            burger.push(<div key={burger.length} className="cheaseSide"></div>)
        }

        for(let i=0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>)
        }
        
        return burger;
    }

    render(){
        return(
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="IngredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingerBtns">
                        <button onClick={()=> this.addRemoveIngredient('add','lettuce')} className="ingrBtn">Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','lettuce')} className="ingrBtn">Remove</button>
                    </div>

                    <p>tomato</p>
                    <div className="ingerBtns">
                        <button onClick={()=> this.addRemoveIngredient('add','tomato')} className="ingrBtn">Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','tomato')} className="ingrBtn">Remove</button>
                    </div>

                    <p>chease</p>
                    <div className="ingerBtns">
                        <button onClick={()=> this.addRemoveIngredient('add','chease')} className="ingrBtn">Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','chease')} className="ingrBtn">Remove</button>
                    </div>

                    <p>meat</p>
                    <div className="ingerBtns">
                        <button onClick={()=> this.addRemoveIngredient('add','meat')} className="ingrBtn">Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','meat')} className="ingrBtn">Remove</button>
                    </div>
                </div>
                    
            </>
        );
    }
}