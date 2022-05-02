export function getJsList() {
    const modulesFiles = import.meta.glob('/public/document/javaScript/*.md');
    let modules: any = [];
    let id = 0;
    for (const path in modulesFiles) {
        id++;
        let name: any = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
        let obj: any = {
            id,
            name
        };
        modules = [].concat(modules, obj);
    }
    return modules;
}

export function getVueList() {
    const modulesFiles = import.meta.glob('/public/document/vue/*.md');
    let modules: any = [];
    let id = 0;
    for (const path in modulesFiles) {
        id++;
        let name: any = path.split('/')[path.split('/').length - 1];
        let obj: any = {
            id,
            name
        };
        modules = [].concat(modules, obj);
    }
    return modules;
}
