 import { LightningElement } from 'lwc';

export default class Quiz extends LightningElement {
    selected = {}
    correctAnswers = 0
    allAnswered = false
    myQuestions = [{
        questionId : 1,
        question : "Leads are converted into ?",
        answers : {
            a : 'Accounts', 
            b : 'Opportunities',
            c : 'Accounts Contacts and Opportunities'
        },
        correctAns : 'c'
    },
    {
        questionId : 2,
        question : "Example of Test based search",
        answers : {
            a : 'SOQL', 
            b : 'SOSL',
            c : 'Both'
        },
        correctAns : 'b'
    },
    {
        questionId : 3,
        question : "Apex is based on ",
        answers : {
            a : 'C', 
            b : 'C++',
            c : 'Java'
        },
        correctAns : 'c'
    }]

    //Code for Radio Buttons which will be executed whenever a Radio button is clicked 
    changeHandler(event)
    {
        console.log("name",event.target.name)
        console.log("answer",event.target.value)
        const{name,value} = event.target
        this.selected = {...this.selected,[name]:value}
    }

    //used for disabling Submit Button
    get isAllSelected()
    {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
        
    }
    
    //Code for Submit Button
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.questionId] === item.correctAns)
        this.correctAnswers = correct.length
        this.allAnswered = true
        console.log("The correct Answers are"+this.correctAnswers)

    }

    //Code for Reset Button
    resetHandler(){
        this.selected = {}
        this.correctAnswers=0
        this.allAnswered = false
    }

    //Code for Dynamic Class
    get isAllCorrect()
    {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
    }

}