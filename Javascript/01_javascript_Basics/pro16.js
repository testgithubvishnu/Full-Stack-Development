let obj={
    greeting :"good morning",
    names:["harry","rahul","rohan"],
    speak(){
        this.names.forEach((student)=> {
          console.log(this.greeting+"hello"+student)  
        });
    }
}
obj.speak();