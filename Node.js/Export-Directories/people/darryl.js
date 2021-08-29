module.exports = {
    name: 'Darryl',
    age: 27,
    profession: 'Web Developer',
    sayHi: function () {
        const { name, age, profession } = this;
        return `Hello, my name is ${name}, I am a ${age} year old ${profession}.`
    }
}