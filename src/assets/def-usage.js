
export const filePaths = [
    { name: "directive", children: [
        { name: "v-real-img", component: ()=>import("@/usage/directive/v-real-img") },
    ] }
]

export const routes = getRoutes(filePaths)
function getRoutes(filePaths, fileRootPath=".", rootPath=""){
    let routes = [];
    for(const fPath of filePaths){
        if(fPath.children?.length){
            const nextFilePath = `${fileRootPath}/${fPath.name}`;
            const nextRootPath = `${rootPath}/${fPath.name}`;
            const childRoutes = getRoutes(fPath.children, nextFilePath, nextRootPath);
            routes = routes.concat(childRoutes);
        }else{
            const name = `${fileRootPath}_${fPath.name}`;
            const path = `${rootPath}/${fPath.name}`;
            const component = fPath.component;
            fPath.path = path;
            routes.push({ name, path, component });
        }
    }
    return routes;
}