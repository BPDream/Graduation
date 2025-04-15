const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootbeua19u3/",
            name: "springbootbeua19u3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootbeua19u3/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线问诊系统的设计与实现"
        } 
    }
}
export default base
