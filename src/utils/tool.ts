export function getJsList() {
    const modulesFiles = import.meta.glob('/public/document/javaScript/*.md');
    const arr = Object.keys(modulesFiles).map((value) => {
        return value.split('/')[4];
    });
    arr.sort((a, b) => {
        return parseInt(a) - parseInt(b);
    });
    let modules: any = [];
    let id = 0;
    for (const path of arr) {
        id++;
        const name: any = path.split('.')[1];
        const obj: any = {
            id,
            name
        };
        modules = [].concat(modules, obj);
    }
    return modules;
}
/**
 *
 * @returns
 */
export function getVueList() {
    debugger;
    const modulesFiles = import.meta.glob('/public/document/vue/*.md');
    const arr = Object.keys(modulesFiles).map((value) => {
        return value.split('/')[4];
    });
    arr.sort((a, b) => {
        return parseInt(a) - parseInt(b);
    });
    let modules: any = [];
    let id = 0;
    for (const path of arr) {
        id++;
        const name: any = path.split('.')[1];
        const obj: any = {
            id,
            name
        };
        modules = [].concat(modules, obj);
    }
    return modules;
}
