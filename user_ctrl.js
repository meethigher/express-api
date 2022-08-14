import db from "./index.js";
export async function getAllUser(req, res) {
    try {
        let [row1,row2] = await db.query("select id,name,age,loc from person");
        res.send({
            code:0,
            desc: "获取用户列表数据成功",
            data: row1
        })
    }catch (e) {
        res.send({
            code:1,
            desc: "获取用户列表数据失败",
            data: e.message
        })

    }
}
