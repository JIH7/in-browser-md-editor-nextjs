class DataSet {
    createdAt: string = '';
    name: string;
    content: string = '';

    constructor(name: string) {
        this.name = name + '.md';
    }
}

export default DataSet;