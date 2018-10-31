
function id_random(){
    function Random(){
        return Math.floor((1+Math.random())* 0x10000).toString(16).substring(1);
    };
    return Random() + Random() + Random() +Random() + Random();
}
const list = [
    {
        id:id_random(),
        name:'font end',
        status:true
    },
    {
        id:id_random(),
        name:'font end 2',
        status:true
    },
    {
        id:id_random(),
        name:'font end',
        status:false
    }
]
export default list;