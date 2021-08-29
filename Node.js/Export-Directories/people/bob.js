module.exports = {
    name: 'Bob',
    age: 74,
    profession: 'retiree',
    sayHi: function () {
        const { name, age, profession } = this;
        return `Hello, my name is ${name}, I am a ${age} year old ${profession}.`
    }
}