import React, { Component} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { v1 as uuidv1 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyAmZkeAM-Xw37ZwAe8PXOVRtk4L5G498to",
    authDomain: "survey-3526c.firebaseapp.com",
    databaseURL: "https://survey-3526c-default-rtdb.firebaseio.com",
    projectId: "survey-3526c",
    storageBucket: "survey-3526c.appspot.com",
    messagingSenderId: "236779884955",
    appId: "1:236779884955:web:9810d57addb0487676113e",
    measurementId: "G-JPTQ2481Q7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);




class Survey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uid: uuidv1(),
            Name: "",
            lName: "",
            Age: "",
            answers: {
                ans1: "",
                ans2: "",
                ans3: "",
                ans4: "",
                ans5: "",
                ans6: "",
                ans7: "",
                ans8: "",
                ans9: "",
                ans10: "",
                ans11: "",
                ans12: "",
                ans13: ""
            },
            isSubmitted: false,
        };


        // Bind event handlers
        this.infoSubmit = this.infoSubmit.bind(this);
        this.surveySubmit = this.surveySubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
    }

    infoSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior
        const name = event.target.name.value;
        const lname = event.target.lname.value;
        const age = event.target.age.value;
        this.setState({ Name: name, lName: lname, Age: age }, () => {
            console.log(this.state);
        });
    }

    surveySubmit(event) {
        event.preventDefault();

        const userRef = ref(database, `patients/${this.state.uid}`);
        set(userRef, {
            Name: this.state.Name,
            lName: this.state.lName,
            Age: this.state.Age,
            Answers: this.state.answers
        })
            .then(() => {
                this.setState({ isSubmitted: true });
            })
            .catch(error => {
                console.error("Error writing document: ", error);
            });
        console.log(this.state);
    }

    answerSelected(event) {
        const { name, value } = event.target;
        this.setState(prevState => ({
            answers: {
                ...prevState.answers,
                [name]: value
            }
        }), () => {
            console.log(this.state);
            const clickedElement = event.target; 

            clickedElement.style.backgroundColor = '#4297f9';
            
            const siblings = Array.from(clickedElement.parentElement.children)
                .filter(element => element !== clickedElement);

            siblings.forEach(sibling => {
                sibling.style.backgroundColor = '#4297f9'; 
            });
        });
    }

    render() {
        let name = null;
        let questions = null;

        if (this.state.Name === "" && !this.state.isSubmitted) {
            name = (
                <div className="before">
                    <form className="form" onSubmit={this.infoSubmit}>
                        <div className="title">Welcome to our Survey</div>
                        <div className="subtitle">Please enter your:</div>
                        <div className="input-container ic1">
                            <input placeholder="" type="text" className="input" id="firstname" name="name" />
                            <div className="cut"></div>
                            <label className="iLabel" htmlFor="firstname">First name</label>
                        </div>
                        <div className="input-container ic2">
                            <input placeholder="" type="text" className="input" id="lastname" name="lname" />
                            <div className="cut"></div>
                            <label className="iLabel" htmlFor="lastname">Last name</label>
                        </div>
                        <div className="input-container ic2">
                            <input placeholder="" type="text" className="input" id="email" name="age" />
                            <div className="cut cut-short"></div>
                            <label className="iLabel" htmlFor="email">Age</label>
                        </div>
                        <button className="submit" type="submit">Continue</button>
                    </form>
                </div>
            );
        } else if (this.state.Name !== "" && !this.state.isSubmitted) {
            name = (
                <></>
            );
            questions = (
                <div>
                    <form onSubmit={this.surveySubmit} className="questions">
                        <div className="card">
                            <label>
                                Do you have any heart problems?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans1" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans1" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Are you hypertensive?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans2" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans2" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Do you have any bleeding disorder?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans3" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans3" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Are you Diabetic?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans4" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans4" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Are you Asthmatic?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans5" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans5" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Do you have any theroid problems?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans6" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans6" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Do you have any gastrointestinol problems?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans7" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans7" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Are you Epileptic?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans8" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans8" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Are you allergic to Penicillin or other drugs?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans9" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans9" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Do you have hepatitis (liver diseases), yellow jaundice or had a positive test for Hepatitis?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans10" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans10" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <label>
                                Did you have any operations?
                            </label><div className="options">
                                <div>
                                    <button type="button" className="opt-btn" name="ans11" value="Yes" onClick={this.answerSelected}>Yes</button>
                                </div>
                                <div>
                                    <button type="button" className="opt-btn" name="ans11" value="No" onClick={this.answerSelected}>No</button>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" name="check-toggle" id="checkbox" hidden="hidden" />
                        <label htmlFor="checkbox" className="toggle">
                            M
                            <div className="toggle__switch">
                                <div className="toggle__circle"></div>
                            </div>
                            F
                        </label>
                        <div className="ForFemale">
                            <div className="card">
                                <label>
                                    Are you taking birth control pills or hormones?
                                </label><div className="options">
                                    <div>
                                        <button type="button" className="opt-btn" name="ans12" value="Yes" onClick={this.answerSelected}>Yes</button>
                                    </div>
                                    <div>
                                        <button type="button" className="opt-btn" name="ans12" value="No" onClick={this.answerSelected}>No</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <label>
                                    Could you be pregnant?
                                </label><div className="options">
                                    <div>
                                        <button type="button" className="opt-btn" name="ans13" value="Yes" onClick={this.answerSelected}>Yes</button>
                                    </div>
                                    <div>
                                        <button type="button" className="opt-btn" name="ans13" value="No" onClick={this.answerSelected}>No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Send</span>
                        </button>
                    </form>
                </div>
            );
        } else if (this.state.Name !== "" && this.state.isSubmitted === true) {
            name = (
                <div className="Finish">
                    <h1>Thank you for Submitting the form! Your response has been sent successfully.</h1>
                </div>
            );
        }
        return (
            
            <div>
                {name}
                {questions}
            </div>
        );
    }
}

export default Survey;
