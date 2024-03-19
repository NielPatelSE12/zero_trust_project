import { NextResponse } from "next/server";
import db from  "../../configure/db";

try{
    const results = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM credentials",(err:any,results:))
    })
}