import db from "./db"

const main = async () => {
    await db.initialize()  
    console.log("DB initialisée")
}

main()

