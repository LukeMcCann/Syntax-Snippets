class ProjectInput {
    private templateElement: HTMLTemplateElement;
    private hostElement: HTMLDivElement;
    private element: HTMLFormElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importNode = document.importNode(this.templateElement.content, true);

        this.element = importNode.firstElementChild as HTMLFormElement;

        this.attach();
    }

    private attach () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
        this.attach()
    }
}

const mainInput = new ProjectInput();
