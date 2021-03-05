


let fn = (name: string): void => {

    console.log(name)
}
class Tool {
    add(n1: number, n2: number): number {
        return n1 + n2
    }
    test(n1: number, n2: number): number {
        return 556
    }
    fn = fn
}

console.log('进来了')
let tool = new Tool()
export default tool
