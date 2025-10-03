import styles from './Button.module.css'
function Button(){
    const handleClick = () => console.log("Ouch!")
    const handleClick1 = (name) => console.log(`${name}, stop playin wit me`)
        let count = 0;
    const handleClick2 = (name) =>{

        if(count < 3)
        {
            count++;
            console.log(`${name} have already clicked me ${count} times`)
        }
        else
            console.log(`${name}, stop clicking me!`)
    }
    const handleClick3 = (e) => e.target.textContent = "Hit"
    //return(<button className={styles.button} onClick={() => handleClick2("Kyrylo")}>Click me! </button>)
    return(<button className={styles.button} onClick={(e) => handleClick3(e)}>Click me! </button>)
}

//const image url = './src/assets/img.jpg'
// const handleclick4 = (e) => e.target.style.display = "none"
// <img src = {url} onClick = {(e) => handleClick4(e)}></img>

export default Button