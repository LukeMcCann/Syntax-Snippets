module.exports = {
    name: 'Luke',
    age: 26,
    profession: 'Software Engineer',
    sayHi: function () {
        const { name, age, profession } = this;
        return `Hello, my name is ${name}, I am a ${age} year old ${profession}.`
    }
}