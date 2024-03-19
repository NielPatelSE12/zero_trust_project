import db from '../..//configure/db'

export async function getServerSideProps(){
    try{
        const [rows] = await db.query('SELECT * FROM credentials');
        return{props:{data: rows}};
    }catch (err) {
        console.error('Error fetching data',err);
        return{props:{data:[]}};
    }
}