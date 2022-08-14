# express-api
简单的express api演示demo

创建环境

```
npm init -y
```

修改package.json的type为模块化，默认为commonjs

```json
{
  "type": "module",
  "name": "express-api-master",
  "version": "1.0.0",
  "description": "简单的express api演示demo"
}
```

安装express与mysql2

```sh
npm install express mysql2
```

创建mysql数据库test，导入结构数据

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `loc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('djflajf', '美杜莎', 5000, '斗破苍穹');
INSERT INTO `person` VALUES ('flajlf', '萧炎', 500, '斗破苍穹');

SET FOREIGN_KEY_CHECKS = 1;
```

启动服务

```sh
node app.js
```

