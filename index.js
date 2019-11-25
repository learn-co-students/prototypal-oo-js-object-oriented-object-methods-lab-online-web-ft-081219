// veto — returns No, I must disagree

// approve — returns You can do that!

// doCharity — returns I like to help people.

// releasePressStatement — returns You will see great things from Scuber.

// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
function BoardMember(name, homeState,training){
    this.name = name 
    this.homeState = homeState
    this.training = training

    this.sayHi = ()=>{ return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`}
}

BoardMember.prototype.veto = () => "No, I must disagree"
BoardMember.prototype.approve = () => "You can do that!"
BoardMember.prototype.doCharity = ()=> "I like to help people."
BoardMember.prototype.releasePressStatement = ()=> "You will see great things from Scuber."
