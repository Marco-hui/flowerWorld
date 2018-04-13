/*
Navicat MySQL Data Transfer

Source Server         : Ken
Source Server Version : 50714
Source Host           : 10.3.136.155:3306
Source Database       : flowershop

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-13 17:35:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for administrator
-- ----------------------------
DROP TABLE IF EXISTS `administrator`;
CREATE TABLE `administrator` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `admin` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of administrator
-- ----------------------------
INSERT INTO `administrator` VALUES ('30', '12132131', '123132');
INSERT INTO `administrator` VALUES ('29', '123123', '4325324141');
INSERT INTO `administrator` VALUES ('19', '123', '123');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '购物车',
  `goodid` int(11) NOT NULL COMMENT '添加商品id',
  `userid` int(11) NOT NULL COMMENT '用户id',
  `qty` int(11) NOT NULL DEFAULT '1' COMMENT '数量',
  `checked` int(11) NOT NULL DEFAULT '1' COMMENT '该条商品是否选中',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('52', '34', '1', '23', '1');
INSERT INTO `car` VALUES ('55', '54', '3', '2', '0');
INSERT INTO `car` VALUES ('51', '31', '1', '1', '1');
INSERT INTO `car` VALUES ('50', '27', '1', '3', '0');
INSERT INTO `car` VALUES ('49', '10', '1', '3', '0');
INSERT INTO `car` VALUES ('78', '54', '9', '4', '0');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '收藏',
  `productid` int(11) NOT NULL COMMENT '商品id',
  `userid` int(11) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES ('33', '28', '1');
INSERT INTO `collect` VALUES ('2', '2', '1');
INSERT INTO `collect` VALUES ('5', '4', '7');
INSERT INTO `collect` VALUES ('6', '5', '7');
INSERT INTO `collect` VALUES ('7', '4', '8');
INSERT INTO `collect` VALUES ('43', '34', '9');
INSERT INTO `collect` VALUES ('39', '33', '9');
INSERT INTO `collect` VALUES ('40', '4', '9');
INSERT INTO `collect` VALUES ('44', '24', '9');
INSERT INTO `collect` VALUES ('47', '1', '10');
INSERT INTO `collect` VALUES ('46', '27', '10');
INSERT INTO `collect` VALUES ('48', '20', '9');

-- ----------------------------
-- Table structure for consigmsg
-- ----------------------------
DROP TABLE IF EXISTS `consigmsg`;
CREATE TABLE `consigmsg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '收货地址',
  `consigName` varchar(255) NOT NULL COMMENT '收货人姓名',
  `consigTel` varchar(255) NOT NULL COMMENT '收货人手机',
  `consigAddress` varchar(255) NOT NULL COMMENT '收货地址',
  `userid` int(11) NOT NULL COMMENT '用户id',
  `defaults` int(11) DEFAULT NULL COMMENT '设为默认地址',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of consigmsg
-- ----------------------------
INSERT INTO `consigmsg` VALUES ('1', '大花花', '13412345678', '山西 阳泉市 平定县 花都区 燕燕镇 百里村', '1', null);
INSERT INTO `consigmsg` VALUES ('2', '小兰兰', '13123213213', '内蒙古 巴彦淖尔市 乌拉特中旗 虾米镇 大洋村', '1', null);
INSERT INTO `consigmsg` VALUES ('4', '明明', '123456', '质监局', '2', '1');
INSERT INTO `consigmsg` VALUES ('27', '本溪', '13413234567', '山西 晋城市 陵川县 西西村 虎眼 047号', '1', null);
INSERT INTO `consigmsg` VALUES ('31', '星星', '13412345678', '山西 阳泉市 郊区 星河村', '9', '1');
INSERT INTO `consigmsg` VALUES ('13', '金正恩', '13444444444', '内蒙古 呼和浩特 大草原', '7', '1');
INSERT INTO `consigmsg` VALUES ('24', 'uu', '13354544554', '上海浦东开发区', '7', null);
INSERT INTO `consigmsg` VALUES ('22', '卢本伟', '134444444', '广州天河智慧园', '7', null);
INSERT INTO `consigmsg` VALUES ('30', '马化腾', '13412345678', '内蒙古 巴彦淖尔市 乌拉特中旗 多萨达官方说法个合格dwarf 多萨达阿达 ', '3', '1');
INSERT INTO `consigmsg` VALUES ('32', '婷婷', '13451234567', '河北 唐山市 路北区 议一议', '9', null);
INSERT INTO `consigmsg` VALUES ('34', '小蝌蚪', '13432872896', '广东 广州市 天河区 智汇Park', '10', null);
INSERT INTO `consigmsg` VALUES ('35', '小蝌蚪', '13432872896', '广东 汕头市 潮南区 xxx', '10', '1');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品表',
  `flowerName` varchar(255) NOT NULL COMMENT '名称',
  `img` varchar(255) NOT NULL COMMENT '商品图片',
  `type` varchar(255) NOT NULL COMMENT '类型',
  `typeid` int(11) NOT NULL COMMENT '分类id',
  `biglistnameid` varchar(255) NOT NULL COMMENT '大分类',
  `price` decimal(10,2) NOT NULL COMMENT '优惠价',
  `oprice` decimal(10,2) NOT NULL COMMENT '原价',
  `florid` longtext COMMENT '花语',
  `materials` varchar(255) DEFAULT NULL COMMENT '材料',
  `express` varchar(255) DEFAULT NULL COMMENT '配送',
  `fusong` varchar(255) DEFAULT NULL COMMENT '附送',
  `explain` varchar(255) DEFAULT NULL COMMENT '说明',
  `productDate` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '出品时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '一心一意 - 玫瑰11枝，粉色勿忘我0.3扎', '//img01.hua.com/uploadpic/newpic/9012009.jpg,//img01.hua.com/uploadpic/newpic/201505161715457343.jpg,//img01.hua.com/uploadpic/newpic/201505161715590781.jpg,//img01.hua.com/uploadpic/newpic/201505161716191250.jpg', '爱情鲜花', '1', 't1', '139.00', '178.00', '11枝玫瑰，寓意一心一意！', '红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶适量搭配 内层白色雾面纸，外层牛皮纸,咖啡色花结', '全国', '下单填写留言，即免费赠送精美贺卡！', '畅销款特惠', '2018-04-08 16:22:05');
INSERT INTO `goods` VALUES ('2', '一往情深 - 精品玫瑰礼盒:19枝红玫瑰，勿忘我适量', '//img01.hua.com/uploadpic/newpic/9010966.jpg,//img01.hua.com/uploadpic/newpic/9010966.jpg,//img01.hua.com/uploadpic/newpic/201801162043054106.jpg,//img01.hua.com/uploadpic/newpic/201708091719050547.jpg', '友情鲜花', '2', 't1', '245.00', '315.00', '你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。', '高档礼盒装鲜花:19枝红玫瑰，勿忘我适量 牛皮纸和深咖啡色条纹纸，银色缎带花结，魔力铁山灰包装盒', '全国', '下单填写留言，即免费赠送精美贺卡！', '畅销款！', '2018-04-08 16:12:53');
INSERT INTO `goods` VALUES ('3', '忘情巴黎 - 33枝红玫瑰', '//img01.hua.com/uploadpic/newpic/9012009.jpg,//img01.hua.com/uploadpic/newpic/201709151725388540.jpg,//img01.hua.com/uploadpic/newpic/201709011117442888.jpg,//img01.hua.com/uploadpic/newpic/201709151725463208.jpg', '爱情鲜花', '1', 't1', '298.00', '383.00', '只想和你忘掉一切烦恼，尽情沉醉在最浪漫的气氛中。', '33枝红玫瑰，石竹梅围绕 黑色条纹纸，红色缎带花结', '全国', '下单填写留言，即免费赠送精美贺卡！', '畅销款特惠', '2018-04-08 16:13:43');
INSERT INTO `goods` VALUES ('4', '不变的承诺 - 99枝红玫瑰', '//img01.hua.com/uploadpic/newpic/9012177.jpg,//img01.hua.com/uploadpic/newpic/201709201159280166.jpg,//img01.hua.com/uploadpic/newpic/201708111123591219.jpg,//img01.hua.com/uploadpic/newpic/201708111123591219.jpg', '爱情鲜花', '1', 't1', '599.00', '768.00', '下雨的时候，给她撑一把雨伞；寒冷的时候，给她一个温暖的臂弯；天黑了，永远有一盏灯为她点亮；晨起时，给她一缕温暖的阳光。爱她，就送她一束99枝的玫瑰花！', '99枝红玫瑰 黑色雪梨纸，黑色条纹纸，玻璃纸卷，酒红色缎带花结', '全国', '下单填写留言，即免费赠送精美贺卡！', '精选特惠款', '2018-04-08 16:15:20');
INSERT INTO `goods` VALUES ('5', '甜美公主 - 白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝', '//img01.hua.com/uploadpic/newpic/9012154.jpg,//img01.hua.com/uploadpic/newpic/201708161907596226.jpg,//img01.hua.com/uploadpic/newpic/201708161908039719.jpg,//img01.hua.com/uploadpic/newpic/201708211556555739.jpg', '友情鲜花', '2', 't1', '378.00', '485.00', '再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸。', '各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎 绿色/浅绿色双面人造纸，白咖罗纹带花结', '全国', '下单填写留言，即免费赠送精美贺卡！', '大城市至少提前1天订购，中小城市订购前请咨询客服', '2018-04-08 16:22:16');
INSERT INTO `goods` VALUES ('6', '我只钟情你 - 香槟玫瑰11枝、白色小雏菊3枝', '//img01.hua.com/uploadpic/newpic/9012223.jpg,//img01.hua.com/uploadpic/newpic/201708161148107192.jpg,//img01.hua.com/uploadpic/newpic/201708161148165218.jpg,//img01.hua.com/uploadpic/newpic/201708161148216702.jpg', '友情鲜花', '2', 't1', '239.00', '305.00', '香槟玫瑰清新、脱俗，品位独特！让我们乘着芬芳的清风，手牵着手走过四季春秋。', '香槟玫瑰11枝、白色小雏菊3枝、浅紫色勿忘我4枝、栀子叶2枝 米白色平面纸1张、蓝色条纹纸1张、米白色缎带1米、60#大号魔力铁山灰包装盒', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价', '2018-04-08 16:26:13');
INSERT INTO `goods` VALUES ('7', '真爱如初 - 雪山玫瑰11枝、深紫色勿忘我0.3扎', '//img01.hua.com/uploadpic/newpic/9010947.jpg,//img01.hua.com/uploadpic/newpic/201707281814193620.jpg,//img01.hua.com/uploadpic/newpic/201707281814252976.jpg,//img01.hua.com/uploadpic/newpic/201707281814316820.jpg', '生日鲜花', '3', 't1', '206.00', '265.00', '用一袭白裙装扮你那无瑕的身姿，向一抹白云倾诉对你的思念，用一捧鲜花证明我不变的心。', '高档礼盒装鲜花:雪山玫瑰11枝、深紫色勿忘我0.3扎 素染纸-浅灰2张，雪梨纸0.5张，银灰色logo缎带1米，魔力铁山灰盒(小)', '全国', '下单填写留言，即免费赠送精美贺卡！', '畅销款特惠', '2018-04-08 16:28:53');
INSERT INTO `goods` VALUES ('8', '白羊座守护花 - 红色扶郎12枝 ，黄色乒乓菊7枝', '//img01.hua.com/uploadpic/newpic/9012236.jpg,//img01.hua.com/uploadpic/newpic/201708042038162895.jpg,//img01.hua.com/uploadpic/newpic/201708042038269827.jpg,//img01.hua.com/uploadpic/newpic/201708042038339455.jpg', '生日鲜花', '3', 't1', '249.00', '319.00', '假如没有相等的爱，那就让我爱多一些吧。属于白羊座的星座花，献给热情直率的她。', '红色扶郎12枝 ，黄色乒乓菊7枝，栀子叶1扎，高山羊齿0.5扎 黑色opp雾面纸2张，银灰色logo缎带1.5米', '全国', '下单填写留言，即免费赠送精美贺卡！', '白羊座鲜花定制', '2018-04-08 16:31:09');
INSERT INTO `goods` VALUES ('9', '恋恋情深 - 11枝香槟玫瑰，白百合2枝', '//img01.hua.com/uploadpic/newpic/9012243.jpg,//img01.hua.com/uploadpic/newpic/201709271724529549.jpg,//img01.hua.com/uploadpic/newpic/201709271724599426.jpg,//img01.hua.com/uploadpic/newpic/201710241620045195.jpg', '生日鲜花', '3', 't1', '199.00', '255.00', '喜欢像是一阵风，而爱你是细水长流', '11枝香槟玫瑰，白百合2枝，栀子叶0.5扎 深浅绿双面人造纸2张，米白色缎带1.5米	', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价', '2018-04-08 16:33:30');
INSERT INTO `goods` VALUES ('10', '你最珍贵 - 精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量', '//img01.hua.com/uploadpic/newpic/9010969.jpg,//img01.hua.com/uploadpic/newpic/201708091724361667.jpg,//img01.hua.com/uploadpic/newpic/201708091724416750.jpg,//img01.hua.com/uploadpic/newpic/201708091724464130.jpg', '爱情鲜花', '1', 't1', '258.00', '331.00', '广阔世界，你是我最重要的人，时时刻刻都想陪在你身边，让你的肩膀不再孤单。', '高档礼盒装鲜花:香槟玫瑰19枝，勿忘我适量 牛皮纸和深咖啡色条纹纸，银色缎带花结，魔力铁山灰包装盒', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品', '2018-04-08 16:40:59');
INSERT INTO `goods` VALUES ('11', '欣欣向荣 - 红掌、多头粉香水百合、红太阳花、康乃馨等花材', '//img01.hua.com/uploadpic/newpic/9010765.jpg,//img01.hua.com/uploadpic/newpic/9010765.jpg', '高端鲜花', '4', 't3', '280.00', '359.00', '载着寓意希望的鲜花驶向快乐幸福的彼岸……', '红掌2枝,多头粉香水百合2枝(5朵)，红太阳花3枝,红康乃馨5枝,粉康乃馨5枝,紫罗兰3枝，巴西叶+水竹+龟背叶 有柄花篮一个', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市，优惠发售', '2018-04-08 16:46:16');
INSERT INTO `goods` VALUES ('12', '鸿运昌盛 - 两层花蓝', '//img01.hua.com/uploadpic/newpic/8010060.jpg,//img01.hua.com/uploadpic/newpic/201509021415545468.jpg', '高端鲜花', '5', 't3', '218.00', '258.00', '开业花篮，适合开业庆典，乔迁，祝贺。', '开业花篮: 红、橙、黄三色太阳花共35枝，散尾葵半扎，填充适量粉色多头康乃馨、栀子叶 两层花蓝，粉色棉纸', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市,特价促销款', '2018-04-08 16:49:23');
INSERT INTO `goods` VALUES ('13', '骏业肇兴 - 两层花架', '//img01.hua.com/uploadpic/newpic/8010065.jpg,//img01.hua.com/uploadpic/newpic/201509281454216250.jpg', '高端鲜花', '5', 't3', '389.00', '489.00', '开业花篮，适合开业庆典，乔迁，祝贺。', '开业花篮: 红色太阳花2扎，粉色香水百合3枝，粉色金鱼草5枝，戴安娜玫瑰11枝，石竹梅半扎，散尾葵半扎，填充适量栀子叶 两层花架一个，金箔纸包裹', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品', '2018-04-08 16:51:07');
INSERT INTO `goods` VALUES ('14', '开张大吉 - 三层开业花篮', '//img01.hua.com/uploadpic/newpic/8010061.jpg,//img01.hua.com/uploadpic/newpic/201509021418141562.jpg', '精品鲜花', '4', 't3', '398.00', '499.00', '开业花篮，适合开业庆典，乔迁，祝贺。', '开业花篮: 粉玫瑰18枝，三色太阳花（红、橙、黄）共45枝，百合4朵，散尾葵半扎，填充适量多头粉色康乃馨、栀子叶 三层花蓝', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价促销款', '2018-04-08 16:52:45');
INSERT INTO `goods` VALUES ('15', '吉星高照 - 三层花架', '//img01.hua.com/uploadpic/newpic/8010039.jpg,//img01.hua.com/uploadpic/newpic/8010064.jpg,//img01.hua.com/uploadpic/newpic/201509281446120312.jpg', '精品鲜花', '5', 't3', '369.00', '489.00', '开业花篮，适合开业庆典，乔迁，祝贺。', '开业花篮: 红橙两色太阳花共40枝，粉色香水百合7枝，粉色金鱼草5枝，散尾葵半扎，填充适量绿叶 三层花架一个，粉色棉纸包裹', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价促销款', '2018-04-08 16:54:37');
INSERT INTO `goods` VALUES ('16', '会议桌花F款 - 花艺师精心设计高档时尚桌花，由香水百合、白玫瑰、洋兰等多种花材搭配而成', '//img01.hua.com/uploadpic/newpic/8010079.jpg,//img01.hua.com/uploadpic/newpic/201710241601504511.jpg,//img01.hua.com/uploadpic/newpic/201710241601584848.jpg', '精品鲜花', '4', 't3', '469.00', '569.00', '花卉点缀生活，美化庆典，烘托会议，增添亮丽。以上桌花可广泛使用在会议桌、迎宾台面和宴桌上。', '多头粉色香水百合4枝，白玫瑰12枝，绿色康乃馨16枝，白色洋兰10枝，紫色小雏菊7枝，搭配龟背叶、高山羊齿、兰草、尤加利叶 圆形花插一只，花泥，尺寸约45cm*90cm', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市', '2018-04-08 16:57:09');
INSERT INTO `goods` VALUES ('17', '芳菲 - 天堂鸟3枝、水竹叶0.3扎、百合1枝、粉色多头康乃馨3枝', '//img01.hua.com/uploadpic/newpic/8010075.jpg,//img01.hua.com/uploadpic/newpic/201704011659521028.jpg,//img01.hua.com/uploadpic/newpic/201704011700084187.jpg', '开业/商务', '6', 't3', '238.00', '298.00', '人间四月,芳菲华年。 适用于公司前台、办公桌、会议桌及公司装饰摆设等用途。', '天堂鸟3枝、水竹叶0.3扎、百合1枝、粉色多头康乃馨3枝、小绿菊3枝、栀子叶0.5扎 大号玻璃方缸', '全国', '下单填写留言，即免费赠送精美贺卡！', '至少提前1天以上订购或订购前咨询客服', '2018-04-08 16:59:15');
INSERT INTO `goods` VALUES ('18', '春舞枝 - 讲台花', '//img01.hua.com/uploadpic/newpic/9012053.jpg,//img01.hua.com/uploadpic/newpic/201510301404350937.jpg', '开业/商务', '6', 't3', '259.00', '299.00', '唱着欢快的歌谣，舞动着动感的旋律，绽放出多姿的色彩，那是春天的气息！', '粉色香水百合6枝，跳舞兰10枝，填充适量香槟色桔梗石竹梅绿叶 宽度65厘米，下垂40厘米左右，可根据要求定制', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市,特价促销', '2018-04-08 17:00:50');
INSERT INTO `goods` VALUES ('19', '春日 - 绿掌2枝，蕾丝3枝、桔叶2枝，水竹叶0.5扎、白玫瑰5枝', '//img01.hua.com/uploadpic/newpic/8010076.jpg,//img01.hua.com/uploadpic/newpic/201704011711238148.jpg,//img01.hua.com/uploadpic/newpic/201704011711302144.jpg', '开业/商务', '6', 't3', '238.00', '298.00', '春日如歌，温柔缱绻。适用于公司前台、办公桌、会议桌及公司装饰摆设等用途。', '绿掌2枝，蕾丝3枝、桔叶2枝，水竹叶0.5扎、白玫瑰5枝、银叶菊4枝、栀子叶0.3扎。 大号玻璃方缸', '全国', '下单填写留言，即免费赠送精美贺卡！', '至少提前1天订购或者订购前咨询客服', '2018-04-08 17:02:13');
INSERT INTO `goods` VALUES ('20', '清晨的问候 - 10枝马蹄莲，5枝白玫瑰', '//img01.hua.com/uploadpic/newpic/9012013.jpg,//img01.hua.com/uploadpic/newpic/201505271932349062.jpg,//img01.hua.com/uploadpic/newpic/201505271932420312.jpg,//img01.hua.com/uploadpic/newpic/201505271932493593.jpg', '开业/商务', '7', 't3', '229.00', '295.00', '在一天的最美的时分对心爱的人说声爱你。', '马蹄莲10枝，白玫瑰5枝，绿色桔梗一枝，绿叶适量 深蓝色条纹纸，米白色缎带花结', '全国', '下单填写留言，即免费赠送精美贺卡！', '马蹄莲只提供12月至次年5月订购(其他月份请订前咨询是否有货)，限送全国大中城市,并请提前一天订购。', '2018-04-08 17:04:25');
INSERT INTO `goods` VALUES ('21', '烈焰魅惑 - Dior迪奥999口红＋进口永生玫瑰', '//img01.hua.com/uploadpic/newpic/1073165.jpg,//img01.hua.com/uploadpic/newpic/201802281102298416.jpg,//img01.hua.com/uploadpic/newpic/201802281102363921.jpg,//img01.hua.com/uploadpic/newpic/201802281102450127.jpg', '经典花盒', '8', 't2', '520.00', '699.00', '喜欢像是一阵风，而爱你是细水长流', 'Dior迪奥999口红1支、进口紫色永生玫瑰1朵、樱花粉永生小玫瑰4枝、搭配粉色、紫色绣球、紫色满天星适量、粉色仿真珍珠2颗', '全国', '下单填写留言，即免费赠送精美贺卡！', '特别提示：口红属于膏状物体，不支持空运，由顺丰陆运寄出，时效一般比空运晚一天（广东省内除外），敬请留意！永生花搭配热卖款Dior口红（专柜正品，价值300元），专为爱美的她量身定制，为她准备的惊喜！', '2018-04-08 17:10:44');
INSERT INTO `goods` VALUES ('22', 'To温暖你心 - 苔藓小兔+粉色永生玫瑰＋粉边紫心奥斯丁', '//img01.hua.com/uploadpic/newpic/1073094.jpg,//img01.hua.com/uploadpic/newpic/201607071721133750.jpg,//img01.hua.com/uploadpic/newpic/201607071721244843.jpg,//img01.hua.com/uploadpic/newpic/201607071721416562.jpg', '经典花盒', '8', 't2', '288.00', '488.00', '喜欢像是一阵风，而爱你是细水长流', 'FlowerSong永生花系列：苔藓小兔一只；厄瓜多尔进口粉色永生玫瑰（直径6-7CM）1枝，粉边紫心奥斯丁1枝，浅粉桃色小玫瑰2枝，搭配浅紫色绣球、白粉双色绣球，点缀白色小星花', '全国', '下单填写留言，即免费赠送精美贺卡！', '永生花畅销榜前三名！商品数量有限，赶快抢购吧！', '2018-04-08 17:10:44');
INSERT INTO `goods` VALUES ('23', '公主的音乐水晶球·七彩 - 大型水晶音乐球永生花', '//img01.hua.com/uploadpic/newpic/1073136.jpg,//img01.hua.com/uploadpic/newpic/201803301711564081.jpg,//img01.hua.com/uploadpic/newpic/201803301712013966.jpg,//img01.hua.com/uploadpic/newpic/201803301844036389.jpg', '经典花盒', '8', 't2', '469.00', '899.00', '喜欢像是一阵风，而爱你是细水长流', 'FlowerSong巨型玫瑰系列：厄瓜多尔进口巨型七彩玫瑰（直径9-10CM），韵升定制K9水晶音乐底座(球体直径：120mm)', '全国', '下单填写留言，即免费赠送精美贺卡！', '特色永生花，搭配韵升专业定制水晶音乐盒底座，独具特色的创意设计，特色礼物之首选！', '2018-04-08 17:12:54');
INSERT INTO `goods` VALUES ('24', '一生一世 - 厄瓜多尔进口永生红玫1朵，双色永生绣球', '//img01.hua.com/uploadpic/newpic/1073033.jpg,//img01.hua.com/uploadpic/newpic/201512151600569218.jpg,//img01.hua.com/uploadpic/newpic/201512151601038281.jpg,//img01.hua.com/uploadpic/newpic/201512151601110468.jpg', '巨型玫瑰', '9', 't2', '198.00', '388.00', '喜欢像是一阵风，而爱你是细水长流', '厄瓜多尔进口永生红玫1朵(直径6-7CM)，搭配双色永生绣球，白色小星花（所有材料均为永生花花材，可存放2～3年）', '全国', '下单填写留言，即免费赠送精美贺卡！', '爆款特惠！永生花手工制作，数量有限，卖完即止！', '2018-04-08 17:15:23');
INSERT INTO `goods` VALUES ('25', '倾尽所爱 - 苔藓小熊＋厄瓜多尔进口红玫＋香槟色奥斯丁玫瑰＋浅粉桃色小玫瑰', '//img01.hua.com/uploadpic/newpic/1073093.jpg,//img01.hua.com/uploadpic/newpic/201702101030448090.jpg,//img01.hua.com/uploadpic/newpic/201702101030527373.jpg,//img01.hua.com/uploadpic/newpic/201702101031026913.jpg', '巨型玫瑰', '9', 't2', '288.00', '448.00', '喜欢像是一阵风，而爱你是细水长流', ' FlowerSong永生花系列：苔藓小熊一只，厄瓜多尔进口红玫1朵(直径6-7CM)，香槟色奥斯丁玫瑰1朵，浅粉桃色小玫瑰1朵，搭配秋色绣球、粉色绣球、红色米花、尤加利叶、小星花', '全国', '下单填写留言，即免费赠送精美贺卡！', '永生花畅销榜前10名！缺货一个月了，已重新到货，赶快抢购吧！', '2018-04-08 17:17:08');
INSERT INTO `goods` VALUES ('26', '公主的水晶鞋·粉 - 进口粉色永生玫瑰1枝，小玫瑰1枝，搭配粉色白色绣球、小满天星', '//img01.hua.com/uploadpic/newpic/1073125.jpg,//img01.hua.com/uploadpic/newpic/201703061829561299.jpg,//img01.hua.com/uploadpic/newpic/201703061830056781.jpg,//img01.hua.com/uploadpic/newpic/201703061830198924.jpg', '巨型玫瑰', '9', 't2', '1998.00', '2998.00', '喜欢像是一阵风，而爱你是细水长流', '进口粉色永生玫瑰1枝，小玫瑰1枝，搭配康乃馨，粉色白色绣球、小满天星', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品特价', '2018-04-08 17:18:40');
INSERT INTO `goods` VALUES ('27', '小仙女/永生花首饰盒 - 日本进口粉紫色大地永生玫瑰，奥斯丁永生玫瑰，搭配绣球等花材', '//img01.hua.com/uploadpic/newpic/1073151.jpg,//img01.hua.com/uploadpic/newpic/201710201656436824.jpg,//img01.hua.com/uploadpic/newpic/201710201638490292.jpg,//img01.hua.com/uploadpic/newpic/201710201703425526.jpg', '永生瓶花', '10', 't2', '368.00', '468.00', '喜欢像是一阵风，而爱你是细水长流', '日本进口粉紫色大地永生玫瑰1朵（直径7-8厘米），日本进口粉色奥斯丁永生玫瑰1朵（直径5-6cm），日本进口粉色小玫瑰1朵，搭配银叶菊、白紫绣球、小满天星等', '全国', '下单填写留言，即免费赠送精美贺卡！', '永生花畅销榜前10名！缺货一个月了，已重新到货，赶快抢购吧！', '2018-04-08 17:20:23');
INSERT INTO `goods` VALUES ('28', '「倾世之爱」梦幻花园 - 厄瓜多尔进口粉色永生玫瑰', '//img01.hua.com/uploadpic/newpic/1073159.jpg,//img01.hua.com/uploadpic/newpic/201802091016510379.jpg,//img01.hua.com/uploadpic/newpic/201801241524355962.jpg,//img01.hua.com/uploadpic/newpic/201801241524283103.jpg', '永生瓶花', '10', 't2', '1999.00', '2999.00', '喜欢像是一阵风，而爱你是细水长流', '厄瓜多尔进口粉色永生玫瑰12朵（直径6-7cm),进口白色永生玫瑰9朵(直径3-4cm)，搭配紫色/白色绣球、紫色小满天星', '全国', '下单填写留言，即免费赠送精美贺卡！', '豪华定制款礼盒,限量发售', '2018-04-08 17:22:32');
INSERT INTO `goods` VALUES ('29', '天使之恋化妆镜永生花礼盒 - 化妆镜+永生玫瑰，送恋人妻子专属奢华系列礼盒', '//img01.hua.com/uploadpic/newpic/1070064.jpg,//img01.hua.com/uploadpic/newpic/201708222036206397_1070064.jpg,//img01.hua.com/uploadpic/newpic/201708222036266250_1070064.jpg,//img01.hua.com/uploadpic/newpic/201708251839499306.jpg', '永生瓶花', '10', 't2', '368.00', '528.00', '喜欢像是一阵风，而爱你是细水长流', '颜色： 银色 \r\n尺寸： 64mm \r\n重量： 110g左右 \r\n材质:出口合金镜框+天然深海母贝+进口奥地利水晶钻 \r\n永生花：永生紫玫瑰（直径5-6cm）2朵，粉紫色奥斯丁1朵，搭配各色绣球、满天星', '全国', '下单填写留言，即免费赠送精美贺卡！', '送恋人专属永生花浪漫奢华礼盒', '2018-04-08 17:24:21');
INSERT INTO `goods` VALUES ('30', '想念的季节 - 厄瓜多尔粉玫瑰1朵', '//img01.hua.com/uploadpic/newpic/1073038.jpg,//img01.hua.com/uploadpic/newpic/201604071105164062.jpg,//img01.hua.com/uploadpic/newpic/201604071105241562.jpg,//img01.hua.com/uploadpic/newpic/201604071105315156.jpg', '永生瓶花', '10', 't2', '198.00', '336.00', '喜欢像是一阵风，而爱你是细水长流', ' FlowerSong系列：厄瓜多尔粉玫瑰1朵(直径6-7cm)，进口双色绣球、白色小星花，米花', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价促销款,市场价338，现仅售198！！！', '2018-04-08 17:26:17');
INSERT INTO `goods` VALUES ('31', '999纯金箔玫瑰 陶瓷花瓶 - 千足金箔玫瑰 最佳送女友送爱人礼物 结婚纪念礼物', '//img01.hua.com/uploadpic/newpic/1061006.jpg,//img01.hua.com/uploadpic/newpic/201605191428199375.jpg,//img01.hua.com/uploadpic/newpic/201605191428258281.jpg,//img01.hua.com/uploadpic/newpic/201605191428320468.jpg', '金箔画', '11', 't4', '138.00', '256.00', null, '金箔玫瑰采用纯度99.9%千足金箔制作，花朵、叶片为纯金箔，内部有一个透明骨架作为支撑，绝非镀金工艺，花杆为聚乙烯镀金，轻盈、不易折。', '全国', '下单填写留言，即免费赠送精美贺卡！', '畅销榜商品，优惠价！', '2018-04-08 17:30:59');
INSERT INTO `goods` VALUES ('32', 'kiss娃娃摆件/小号 - 娃娃千足纯金箔 富贵典雅 婚庆结婚礼品', '//img01.hua.com/uploadpic/newpic/1061036.jpg,//img01.hua.com/uploadpic/newpic/201511121053026718.jpg', '金箔花', '12', 't4', '398.00', '548.00', null, '娃娃表面为千足纯金，将艺术品表面精铸千足纯金,形成产品表面呈现柔和细腻的黄金绒面或沙面效果,晶莹剔透,富丽堂皇,高贵典雅！', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市，特价优惠', '2018-04-08 17:31:58');
INSERT INTO `goods` VALUES ('33', '999纯金箔康乃馨 - 千足金箔，最佳送母亲礼物 ', '//img01.hua.com/uploadpic/newpic/1061002.jpg,//img01.hua.com/uploadpic/newpic/201605191425541562.jpg,//img01.hua.com/uploadpic/newpic/201605191426010781.jpg,//img01.hua.com/uploadpic/newpic/201605191426077500.jpg', '金箔花', '12', 't4', '118.00', '182.00', null, '金箔康乃馨采用纯度99.9%千足金箔制作，花朵、叶片为纯金箔，内部有一个透明骨架作为支撑，绝非镀金工艺，花杆为聚乙烯镀金，轻盈、不易折。', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市', '2018-04-08 17:33:31');
INSERT INTO `goods` VALUES ('34', '999纯金箔康乃馨+水晶花瓶 - 送母亲最佳礼物，千足金箔康乃馨，水晶花瓶', '//img01.hua.com/uploadpic/newpic/1061003.jpg,//img01.hua.com/uploadpic/newpic/201605191438054375.jpg,//img01.hua.com/uploadpic/newpic/201605191438115312.jpg,//img01.hua.com/uploadpic/newpic/201605191438174843.jpg', '金箔花', '12', 't4', '148.00', '256.00', null, '金箔康乃馨采用纯度99.9%千足金箔制作，花朵、叶片为纯金箔，内部有一个透明骨架作为支撑，绝非镀金工艺，花杆为聚乙烯镀金，轻盈、不易折。', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品', '2018-04-08 17:35:26');
INSERT INTO `goods` VALUES ('35', '甜蜜娃娃/红 - 3D立体金箔画，精致、立体、贵气', '//img01.hua.com/uploadpic/newpic/1061015.jpg,//img01.hua.com/uploadpic/newpic/201511121106072812.jpg', '千足金', '13', 't4', '168.00', '339.00', null, '甜蜜娃娃/红 - 3D立体金箔画，精致、立体、贵气', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价优惠', '2018-04-08 17:36:09');
INSERT INTO `goods` VALUES ('36', '幸福娃娃/珍珠白 - 金箔画，画芯金箔，采用3D技术', '//img01.hua.com/uploadpic/newpic/1061013.jpg,//img01.hua.com/uploadpic/newpic/201511121050434062.jpg', '千足金', '13', 't4', '298.00', '618.00', null, '3D立体金箔画画芯金箔均采用3D技术，酷似立体雕塑，产品更显精致、立体、贵气', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价优惠', '2018-04-08 17:37:33');
INSERT INTO `goods` VALUES ('37', '紫轩-桃李满门 - 3D立体金箔画，送老师礼品，最佳教师节礼物', '//img01.hua.com/uploadpic/newpic/1061019.jpg,//img01.hua.com/uploadpic/newpic/201511121108593906.jpg', '金箔画', '11', 't4', '298.00', '342.00', null, '3D立体金箔画画芯金箔均采用3D技术，酷似立体雕塑，产品更显精致、立体、贵气。采用台湾进口高纯度金箔制作而成。金箔是采用纯金条以高新纳米技术、离子披覆方式使其披覆在透明塑料胶片（PET）上形成一层 薄薄的黄金面而成,它的含金量为999金（千足金）。因此，它可以完整保留黄金特有的色泽，高贵典雅，永不变色，恒久保质！', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市，特价优惠', '2018-04-08 17:43:24');
INSERT INTO `goods` VALUES ('38', '古窗松龄贺寿 - 3D立体金箔画,生日祝福,祝寿礼品,生日送父母长辈礼物', '//img01.hua.com/uploadpic/newpic/1061026.jpg,//img01.hua.com/uploadpic/newpic/201511121107157500.jpg', '金箔画', '11', 't4', '188.00', '218.00', '', '3D立体金箔画画芯金箔均采用3D技术，酷似立体雕塑，产品更显精致、立体、贵气。采用台湾进口高纯度金箔制作而成。金箔是采用纯金条以高新纳米技术、离子披覆方式使其披覆在透明塑料胶片（PET）上形成一层 薄薄的黄金面而成,它的含金量为999金（千足金）。因此，它可以完整保留黄金特有的色泽，高贵典雅，永不变色，恒久保质！', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市，特价优惠', '2018-04-08 19:42:14');
INSERT INTO `goods` VALUES ('39', '古窗一帆风顺 - 3D立体金箔画，祝福，生日祝贺，商务公关礼物，企业赠品', '//img01.hua.com/uploadpic/newpic/1061021.jpg,//img01.hua.com/uploadpic/newpic/201511121105265625.jpg', '金箔画', '11', 't4', '308.00', '385.00', null, '3D立体金箔画画芯金箔均采用3D技术，酷似立体雕塑，产品更显精致、立体、贵气。采用台湾进口高纯度金箔制作而成。金箔是采用纯金条以高新纳米技术、离子披覆方式使其披覆在透明塑料胶片（PET）上形成一层 薄薄的黄金面而成,它的含金量为999金（千足金）。因此，它可以完整保留黄金特有的色泽，高贵典雅，永不变色，恒久保质！', '全国', '下单填写留言，即免费赠送精美贺卡！', '新品上市，特价优惠', '2018-04-08 17:43:32');
INSERT INTO `goods` VALUES ('40', '幸福娃娃/红 - 喜气洋洋金色娃娃 3D立体金箔画 ', '//img01.hua.com/uploadpic/newpic/1061012.jpg,//img01.hua.com/uploadpic/newpic/201511121102164687.jpg,//img01.hua.com/uploadpic/newpic/201511121102495312.jpg', '千足金', '13', 't4', '295.00', '618.00', null, '3D立体金箔画画芯金箔均采用3D技术，酷似立体雕塑，产品更显精致、立体、贵气', '全国', '下单填写留言，即免费赠送精美贺卡！', '特价优惠', '2018-04-08 17:43:19');
INSERT INTO `goods` VALUES ('41', '水果之恋(8寸) - 元祖鲜奶蛋糕，布丁水果夹层', '//img01.hua.com/uploadpic/newpic/5302015.jpg,//img01.hua.com/uploadpic/newpic/5302066.jpg//img01.hua.com/uploadpic/newpic/5302016.jpg', '元祖', '14', 't5', '218.00', '280.00', null, '8寸,鲜奶蛋糕。原味蛋胚，布丁夹层，什锦水果夹层', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 17:49:51');
INSERT INTO `goods` VALUES ('42', '水果之恋(8寸) - 元祖鲜奶蛋糕，布丁水果夹层', '//img01.hua.com/uploadpic/newpic/5302066.jpg,//img01.hua.com/uploadpic/newpic/5302015.jpg,//img01.hua.com/uploadpic/newpic/5302066.jpg//img01.hua.com/uploadpic/newpic/5302016.jpg', '元祖', '14', 't5', '189.00', '220.00', null, '8寸,鲜奶蛋糕。原味蛋胚，布丁夹层，什锦水果夹层', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 17:54:49');
INSERT INTO `goods` VALUES ('43', 'Nice兔meet you！(8寸) - 元祖鲜奶蛋糕，布丁加水果夹层', '//img01.hua.com/uploadpic/newpic/5302019.jpg,//img01.hua.com/uploadpic/newpic/5302019.jpg', 'INCAKE', '15', 't5', '222.00', '258.00', null, '8寸,鲜奶蛋糕。原味蛋胚，布丁夹层，什锦水果夹层', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 17:54:41');
INSERT INTO `goods` VALUES ('44', '四重奏蛋糕(约2磅) - 方形/巧克力/榴莲/慕斯蛋糕', '//img01.hua.com/uploadpic/newpic/5602016.jpg,//img01.hua.com/uploadpic/newpic/201701091802522533.jpg,//img01.hua.com/uploadpic/newpic/201701091802591199.jpg', 'INCAKE', '15', 't5', '208.00', '296.00', null, '“芒果茫茫+榴莲香雪+提拉米苏+黑森林”一次让您品尝四种不同口味！', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 17:54:28');
INSERT INTO `goods` VALUES ('45', '（新款）榴芒双拼(约2磅) - 双拼蛋糕', '//img01.hua.com/uploadpic/newpic/5602015.jpg,//img01.hua.com/uploadpic/newpic/201609211122211093.jpg,//img01.hua.com/uploadpic/newpic/201609211122307968.jpg,//img01.hua.com/uploadpic/newpic/201609211122411406.jpg', 'INCAKE', '15', 't5', '198.00', '276.00', null, '当你在纠结于榴莲香雪或芒果茫茫时，我们为您推出一款特别的榴芒双拼。在你感受到榴莲霸气味道弥漫香唇齿之间同时让味蕾感受芒果慕斯细腻般的温柔。', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 17:56:10');
INSERT INTO `goods` VALUES ('46', '草莓拿破仑蛋糕（5-8人食） - 拿破仑蛋糕', '//img01.hua.com/uploadpic/newpic/5902028.jpg,//img01.hua.com/uploadpic/newpic/201603281935402968.jpg', '诺心', '16', 't5', '298.00', '298.00', null, '品牌：诺心LECAKE 甜度：★★ \r\n保鲜条件：  冷藏0-4摄氏度之间 \r\n适合节日：所有节日\r\n适合人群：所有人群\r\n如订购方形蛋糕5磅规格蛋糕请提前24小时预订，如订购圆形蛋糕5磅规格蛋糕请提前48小时预订。', '全国', '下单填写留言，即免费赠送精美贺卡！', '提前一天预定，每天晚上9点前下单可安排第二天10点后配送', '2018-04-08 18:10:34');
INSERT INTO `goods` VALUES ('47', '桂圆冰淇淋(1磅) - 冰淇淋蛋糕', '//img01.hua.com/uploadpic/newpic/5221029.jpg,//img01.hua.com/uploadpic/newpic/201801181123339276.jpg', '元祖', '14', 't5', '198.00', '198.00', null, '品牌：21cake  白兰地酒 、金黄桂圆肉干   保鲜条件：－18℃保存24小时，-5℃食用为佳 保鲜条件：－18℃保存24小时，-5℃食用为佳 适合3-4人分享 含5套餐具', '全国', '下单填写留言，即免费赠送精美贺卡！', '请至少提前6-8小时预订！ ', '2018-04-08 18:00:34');
INSERT INTO `goods` VALUES ('48', '你好米菲 hallo miffy（2-4人食） - 慕斯蛋糕', '//img01.hua.com/uploadpic/newpic/5901052.jpg,//img01.hua.com/uploadpic/newpic/5901052.jpg,//img01.hua.com/uploadpic/newpic/5901052.jpg', '诺心', '16', 't5', '218.00', '281.00', null, '品牌：诺心LECAKE  甜度：★★ 保鲜条件：冷藏0-4摄氏度之间 推荐食用：收到蛋糕后2～3小时内食用  适合节日：儿童节 适合人群：所有人群 如订购方形蛋糕5磅规格蛋糕请提前24小时预订，如订购圆形蛋糕5磅规格蛋糕请提前48小时预订。', '全国', '下单填写留言，即免费赠送精美贺卡！', '提前一天预定，每天晚上9点前下单可安排第二天10点后配送', '2018-04-08 18:10:21');
INSERT INTO `goods` VALUES ('49', '榴恋草莓(2磅) - 双拼蛋糕', '//img01.hua.com/uploadpic/newpic/5602013.jpg,//img01.hua.com/uploadpic/newpic/5602013.jpg,//img01.hua.com/uploadpic/newpic/201701101000070754.jpg', '诺心', '16', 't5', '198.00', '296.00', null, '当独特的榴莲与酸甜的草莓倾心相遇，瞬间醉了你我的心扉，这是一场榴莲与草莓的饕餮盛宴，好吃到停不下来，木有其他理由！', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 18:07:55');
INSERT INTO `goods` VALUES ('50', 'Secret Rose 爱（1磅） - 慕斯蛋糕', '//img01.hua.com/uploadpic/newpic/5191011.jpg,//img01.hua.com/uploadpic/newpic/201803051656403814.jpg,//img01.hua.com/uploadpic/newpic/201803051656478917.jpg,//img01.hua.com/uploadpic/newpic/201803051656542830.jpg', '诺心', '16', 't5', '298.00', '298.00', null, '品牌：Fascinis Cakes 甜度：★★★☆☆ 口味：巧克力 蛋糕分类：慕斯蛋糕  适合人群：情侣 适合节日：情人节原材料： 法芙娜巧克力（法国）、淡奶油（法国）、香草条（马达加斯加）、覆盆子果茸（法国）、柠檬（美国） 保鲜条件：0℃-5℃可冷藏3小时，0℃以下急冻保存12个小时，可保持口感不变，6小时内食用最佳。约15*15cm, 适合3-5人食用, 免费配5人餐具', '全国', '下单填写留言，即免费赠送精美贺卡！', '提前8小时预订', '2018-04-08 18:11:32');
INSERT INTO `goods` VALUES ('51', 'HelloKitty永生花音乐水晶球（巨型玫瑰） - 厄瓜多尔进口巨型永生粉玫瑰', '//img01.hua.com/uploadpic/newpic/1073162.jpg,//img01.hua.com/uploadpic/newpic/201802051621060605.jpg,//img01.hua.com/uploadpic/newpic/201802051621344785.jpg', '品牌公仔', '17', 't6', '520.00', '599.00', null, '厄瓜多尔进口巨型永生粉玫瑰+Hello Kitty粉色音乐盒', '全国', '下单填写留言，即免费赠送精美贺卡！', 'Hello Kitty新品2018首发！此款进口永生花音乐盒为HELLO KITTY正版，带防伪贴标，有了TA，不愁俘获不了她的少女心！', '2018-04-08 18:56:12');
INSERT INTO `goods` VALUES ('52', '星期耳钉G款 - s925银个性耳钉', '//img01.hua.com/uploadpic/newpic/1076013.jpg,//img01.hua.com/uploadpic/newpic/201703011848285719.jpg', '首饰', '18', 't6', '199.00', '299.00', null, '品牌: T400 金属材质: 合金样式: 七款不同形状,每天都是不一样的感受！', '全国', '下单填写留言，即免费赠送精美贺卡！', '本类畅销榜第一位！新款设计创意首饰，专为每个特别时刻打造！', '2018-04-08 18:57:54');
INSERT INTO `goods` VALUES ('53', '心形3D水晶内雕陪你走到老 - 激光内雕水晶工艺品，USB七彩旋转发光, 带音乐底座', '//img01.hua.com/uploadpic/newpic/1071031.jpg,//img01.hua.com/uploadpic/newpic/201505221358079218.jpg,//img01.hua.com/uploadpic/newpic/201505221358137500.jpg,//img01.hua.com/uploadpic/newpic/201505221357581093.jpg', '水晶内雕', '19', 't6', '169.00', '216.00', null, '七彩旋转水晶内雕。工艺: “陪你走到老”3D立体激光内雕；材料：顶级K9水晶；尺寸：11x9.5x3cm，七彩发光音乐底座：10*4cm；', '全国', '下单填写留言，即免费赠送精美贺卡！', '升级版带音乐底座', '2018-04-08 18:59:09');
INSERT INTO `goods` VALUES ('54', 'doge神烦狗-秋田犬 - 授权正版doge公仔', '//img01.hua.com/uploadpic/newpic/1011001.jpg,//img01.hua.com/uploadpic/newpic/201610281746421212.jpg', '品牌公仔', '17', 't6', '78.00', '138.00', null, ' 超柔短毛绒+PP棉填充  \r\n娃娃尺寸：48*58cm 洗涤：直接手洗,机洗都可以 \r\n适合：家居、摆设、靠背，也可在汽车内使用！', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 19:01:44');
INSERT INTO `goods` VALUES ('55', '灰尾猫靠垫 - 授权正版doge公仔', '//img01.hua.com/uploadpic/newpic/1011006.jpg,//img01.hua.com/uploadpic/newpic/201610281829556124.jpg', '品牌公仔', '17', 't6', '59.00', '89.00', null, '产品名称：尾巴猫抱枕<br>\r\n产品种类：抱枕 靠垫<br>\r\n规格：55cm*32cm<br>\r\n外部材质：超柔短毛绒<br>\r\n填充物：高弹PP棉<br>\r\n重量：0.72kg', '全国', '下单填写留言，即免费赠送精美贺卡！', '特惠款，火爆全网的正版doge神烦狗来了，数量有限，快抢！', '2018-04-08 18:56:12');
INSERT INTO `goods` VALUES ('56', '3D水晶内雕-Happy Birthday - 激光内雕水晶工艺品，USB七彩旋转发光', '//img01.hua.com/uploadpic/newpic/1071032.jpg,//img01.hua.com/uploadpic/newpic/201505221358423437.jpg,//img01.hua.com/uploadpic/newpic/201505221358525781.jpg,//img01.hua.com/uploadpic/newpic/201505221358589062.jpg', '水晶内雕', '19', 't6', '118.00', '148.00', null, '七彩旋转水晶内雕。工艺: “Happy Birthday”蛋糕3D立体激光内雕；材料：顶级K9水晶；尺寸：11x9.5x3cm，七彩发光底座：10*4cm；', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 18:56:12');
INSERT INTO `goods` VALUES ('57', '心形3D水晶内雕父爱如山 - 激光内雕水晶工艺品，USB七彩旋转发光,送父亲礼物', '//img01.hua.com/uploadpic/newpic/1071029.jpg,//img01.hua.com/uploadpic/newpic/201505221353199062.jpg,//img01.hua.com/uploadpic/newpic/201505221353291406.jpg,//img01.hua.com/uploadpic/newpic/201505221353368125.jpg', '水晶内雕', '19', 't6', '159.00', '196.00', null, '七彩旋转水晶内雕。工艺: “父爱如山”3D立体激光内雕；材料：顶级K9水晶；尺寸：11x9.5x3cm，七彩发光底座：10*4cm；', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 18:56:12');
INSERT INTO `goods` VALUES ('58', 'T400小红爱心形纯银项链耳线手链套装 - 爱心造型 S925银清新韩版简约', '//img01.hua.com/uploadpic/newpic/1076033.jpg,//img01.hua.com/uploadpic/newpic/201803161509336892.jpg,//img01.hua.com/uploadpic/newpic/201803161509454738.jpg,//img01.hua.com/uploadpic/newpic/201803161509519132.jpg', '首饰', '18', 't6', '209.00', '209.00', null, '品牌: T400<br>链子材质: 银饰<br>金属材质: 925银<br>延长链: 10cm以下<br>镶嵌材质: 纯银镶嵌宝石', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 18:56:12');
INSERT INTO `goods` VALUES ('59', '星期耳钉G款 - s925银个性耳钉', '//img01.hua.com/uploadpic/newpic/1076013.jpg,//img01.hua.com/uploadpic/newpic/201703011848285719.jpg', '首饰', '18', 't6', '199.00', '209.00', null, '品牌: T400<br>金属材质: 合金<br>样式: 七款不同形状,每天都是不一样的感受！', '全国', '下单填写留言，即免费赠送精美贺卡！', null, '2018-04-08 18:56:12');
INSERT INTO `goods` VALUES ('60', '唯爱S925银锁骨项链 - 镶嵌施华洛世奇锆石项链', '//img01.hua.com/uploadpic/newpic/1076001.jpg,//img01.hua.com/uploadpic/newpic/201604261115484843.jpg,//img01.hua.com/uploadpic/newpic/201604261115544843.jpg//img01.hua.com/uploadpic/newpic/201604261116008437.jpg', '首饰', '18', 't6', '159.00', '199.00', null, '品牌: T400<br>\r\n镶嵌材质: 纯银镶嵌宝石<br>\r\n金属材质: 925<br>\r\n银链子样式: 盒子链<br>\r\n坠子材质: 银<br>\r\n', '全国', '下单填写留言，即免费赠送精美贺卡！', '新款设计创意首饰，专为每个特别时刻打造！', '2018-04-08 18:56:12');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品分类表',
  `listname` varchar(255) NOT NULL COMMENT '小分类名字',
  `listImg` varchar(255) NOT NULL COMMENT '小分类图片',
  `biglistname` varchar(255) NOT NULL COMMENT '大分类',
  `biglistnameid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '爱情鲜花', '//img02.hua.com/app/api/flower/yongtu/aiqing.png', '鲜花', 't1');
INSERT INTO `goodslist` VALUES ('2', '友情鲜花', '//img02.hua.com/app/api/flower/yongtu/youqing.png', '鲜花', 't1');
INSERT INTO `goodslist` VALUES ('3', '生日鲜花', '//img02.hua.com/app/api/flower/yongtu/birthday.png', '鲜花', 't1');
INSERT INTO `goodslist` VALUES ('4', '经典花盒', '//img02.hua.com/app/api/yongshenghua/jingdianhuahe.png', '永生花', 't2');
INSERT INTO `goodslist` VALUES ('5', '巨型玫瑰', '//img02.hua.com/app/api/yongshenghua/juxingmeigui.png', '永生花', 't2');
INSERT INTO `goodslist` VALUES ('6', '永生瓶花', '//img02.hua.com/app/api/yongshenghua/livingflower.png', '永生花', 't2');
INSERT INTO `goodslist` VALUES ('7', '高端鲜花', '//img02.hua.com/app/api/use/youflower.png', '商务花', 't3');
INSERT INTO `goodslist` VALUES ('8', '精品鲜花', '//img02.hua.com/app/api/flower/yongtu/jingpin.png', '商务花', 't3');
INSERT INTO `goodslist` VALUES ('9', '开业/商务', '//img02.hua.com/app/api/flower/yongtu/kaiye.png', '商务花', 't3');
INSERT INTO `goodslist` VALUES ('10', '元祖', '//img02.hua.com/app/api/cake/brand/ganso.png', '蛋糕', 't5');
INSERT INTO `goodslist` VALUES ('11', 'INCAKE', '//img02.hua.com/app/api/cake/brand/incake.png', '蛋糕', 't5');
INSERT INTO `goodslist` VALUES ('12', '诺心', '//img02.hua.com/app/api/cake/brand/lecake.png', '蛋糕', 't5');
INSERT INTO `goodslist` VALUES ('13', '首饰', '//img02.hua.com/app/api/gift/shoushi.png', '特色礼品', 't6');
INSERT INTO `goodslist` VALUES ('14', '品牌公仔', '//img02.hua.com/app/api/gift/hellokitty.png', '特色礼品', 't6');
INSERT INTO `goodslist` VALUES ('15', '水晶内雕', '//img02.hua.com/app/api/gift/neidiao.png', '特色礼品', 't6');
INSERT INTO `goodslist` VALUES ('16', '金箔花', '//img01.hua.com/uploadpic/newpic/1061006.jpg', '金箔', 't4');
INSERT INTO `goodslist` VALUES ('17', '金箔画', '//img01.hua.com/uploadpic/newpic/1061012.jpg', '金箔', 't4');
INSERT INTO `goodslist` VALUES ('18', '千足金', '//img01.hua.com/uploadpic/newpic/1061036.jpg', '金箔', 't4');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '订单表',
  `goods` varchar(500) NOT NULL COMMENT '订单商品',
  `goodImg` varchar(255) NOT NULL COMMENT '订单图片',
  `userid` int(11) NOT NULL COMMENT '用户id',
  `userMsg` varchar(500) DEFAULT NULL COMMENT '购买人详细信息',
  `total` int(10) NOT NULL COMMENT '总额',
  `consigid` int(11) NOT NULL COMMENT '收货人id',
  `deliveryDate` varchar(255) DEFAULT NULL COMMENT '收货时间',
  `guestbook` varchar(255) DEFAULT NULL COMMENT '留言',
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('1', '[1,2]', 'huahua.jpg', '1', null, '124', '1', '2018-4-8', '花花收', '0');
INSERT INTO `orders` VALUES ('2', '[1,3]', 'huahua.jpg', '7', null, '250', '2', '2018-4-14', '小黑收', '1');
INSERT INTO `orders` VALUES ('3', '[4,6]', 'huahua.jpg', '7', null, '999', '3', '2018-4-14', '小明收', '0');
INSERT INTO `orders` VALUES ('4', '[1,6,8]', 'huahua.jpg', '7', null, '520', '4', '2018-4-18', '小花收', '1');
INSERT INTO `orders` VALUES ('5', '[4,7]', 'huahua.jpg', '7', null, '999', '5', '2018-4-14', '小白收', '0');
INSERT INTO `orders` VALUES ('6', '[{\"id\":29,\"goodid\":14,\"qty\":1},{\"id\":27,\"goodid\":1,\"qty\":2}]', '//img01.hua.com/uploadpic/newpic/80\r\n10061.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"肯\",\"sex\":\"\r\n男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '676', '3', '2018-04-20', null, '0');
INSERT INTO `orders` VALUES ('7', '[{\"id\":29,\"goodid\":14,\"qty\":1},{\"id\":27,\"goodid\":1,\"qty\":2}]', '//img01.hua.com/uploadpic/newpic/80\r\n10061.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"肯\",\"sex\":\"\r\n男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '676', '3', '2018-04-20', '', '0');
INSERT INTO `orders` VALUES ('8', '[{\"id\":31,\"goodid\":18,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/9012053.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"ken\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '259', '2', '2018-04-13', '', '0');
INSERT INTO `orders` VALUES ('9', '[{\"id\":31,\"goodid\":18,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/9012053.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"ken\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '259', '2', '2018-04-13', '', '0');
INSERT INTO `orders` VALUES ('10', '[{\"id\":34,\"goodid\":25,\"qty\":1},{\"id\":37,\"goodid\":45,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/1073093.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"ken\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '486', '2', '2018-04-13', '', '0');
INSERT INTO `orders` VALUES ('11', '[{\"id\":34,\"goodid\":25,\"qty\":1},{\"id\":37,\"goodid\":45,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/1073093.jpg', '8', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"ken\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '486', '2', '2018-04-13', '小黑', '0');
INSERT INTO `orders` VALUES ('17', '[{\"id\":53,\"goodid\":13,\"qty\":5},{\"id\":54,\"goodid\":43,\"qty\":3}]', '//img01.hua.com/uploadpic/newpic/8010065.jpg', '3', '{\"id\":3,\"username\":\"13413611594\",\"password\":\"3476ccba3a70bb1f865e8a1220e29d3e\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"阿华1\",\"sex\":null,\"birthday\":null,\"email\":\"\",\"balance\":0,\"regtime\":\"2018-04-10 16:51:59\"}', '2611', '30', '2018-04-16', '马云收', '0');
INSERT INTO `orders` VALUES ('13', '[{\"id\":28,\"goodid\":5,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/9012154.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"ken\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '378', '1', '2018-04-13', '', '0');
INSERT INTO `orders` VALUES ('14', '[{\"id\":28,\"goodid\":5,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/9012154.jpg', '8', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"ken\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '378', '1', '2018-04-01', '', '1');
INSERT INTO `orders` VALUES ('15', '[{\"id\":39,\"goodid\":23,\"qty\":3},{\"id\":38,\"goodid\":45,\"qty\":4}]', '//img01.hua.com/uploadpic/newpic/1073136.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"肯德基\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '2199', '27', '2018-04-18', '本溪收哦！', '0');
INSERT INTO `orders` VALUES ('16', '[{\"id\":40,\"goodid\":44,\"qty\":2}]', '//img01.hua.com/uploadpic/newpic/5602016.jpg', '1', '{\"id\":1,\"username\":\"13878630998\",\"password\":\"123456\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"肯德基\",\"sex\":\"男\",\"birthday\":\"1993/6/6\",\"email\":\"matao_1891@163.com\",\"balance\":0,\"regtime\":\"2018-04-08 14:06:34\"}', '416', '1', '2018-04-10', '哈哈哈哈', '0');
INSERT INTO `orders` VALUES ('18', '[{\"id\":56,\"goodid\":10,\"qty\":1},{\"id\":3,\"goodid\":3,\"qty\":3},{\"id\":57,\"goodid\":4,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/9010969.jpg', '3', '{\"id\":3,\"username\":\"134444444\",\"password\":\"3476ccba3a70bb1f865e8a1220e29d3e\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"花花134444444\",\"sex\":null,\"birthday\":null,\"email\":null,\"balance\":0,\"regtime\":\"2018-04-10 16:51:59\"}', '1751', '30', '2018-04-10', '', '0');
INSERT INTO `orders` VALUES ('19', '[{\"id\":60,\"goodid\":41,\"qty\":1},{\"id\":59,\"goodid\":43,\"qty\":7}]', '//img01.hua.com/uploadpic/newpic/5302015.jpg', '9', '{\"id\":9,\"username\":\"13413611594\",\"password\":\"d0dcbf0d12a6b1e7fbfa2ce5848f3eff\",\"headImg\":\"temp/8bdf335e5af3ab1ed858adbb7dfc0148chenou.jpg\",\"nickname\":\"Cindy2\",\"sex\":\"女\",\"birthday\":\"1996/1/1\",\"email\":\"cindy@163.com\",\"balance\":0,\"regtime\":\"2018-04-13 10:37:22\"}', '1772', '31', '2018-04-12', '', '1');
INSERT INTO `orders` VALUES ('21', '[{\"goodid\":\"54\",\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/1011001.jpg', '9', '{\"id\":9,\"username\":\"13413611594\",\"password\":\"d0dcbf0d12a6b1e7fbfa2ce5848f3eff\",\"headImg\":\"temp/f7af550371783a12e911ddd00d2c63d5daizhikang.jpg\",\"nickname\":\"Cindy2\",\"sex\":\"女\",\"birthday\":\"1996/1/1\",\"email\":\"cindy@163.com\",\"balance\":0,\"regtime\":\"2018-04-13 10:37:22\"}', '78', '32', '2018-04-19', '123456789', '1');
INSERT INTO `orders` VALUES ('28', '[{\"id\":72,\"goodid\":3,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/9012009.jpg', '9', '{\"id\":9,\"username\":\"13413611594\",\"password\":\"d0dcbf0d12a6b1e7fbfa2ce5848f3eff\",\"headImg\":\"temp/f7af550371783a12e911ddd00d2c63d5daizhikang.jpg\",\"nickname\":\"Cindy2\",\"sex\":\"女\",\"birthday\":\"1996/1/1\",\"email\":\"cindy@163.com\",\"balance\":0,\"regtime\":\"2018-04-13 10:37:22\"}', '298', '31', '2018-04-18', '', '1');
INSERT INTO `orders` VALUES ('27', '[{\"goodid\":\"3\",\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/9012009.jpg', '9', '{\"id\":9,\"username\":\"13413611594\",\"password\":\"d0dcbf0d12a6b1e7fbfa2ce5848f3eff\",\"headImg\":\"temp/f7af550371783a12e911ddd00d2c63d5daizhikang.jpg\",\"nickname\":\"Cindy2\",\"sex\":\"女\",\"birthday\":\"1996/1/1\",\"email\":\"cindy@163.com\",\"balance\":0,\"regtime\":\"2018-04-13 10:37:22\"}', '298', '31', '2018-04-14', '啊啊', '0');
INSERT INTO `orders` VALUES ('25', '[{\"id\":69,\"goodid\":24,\"qty\":1},{\"id\":68,\"goodid\":34,\"qty\":1}]', '//img01.hua.com/uploadpic/newpic/1073033.jpg', '9', '{\"id\":9,\"username\":\"13413611594\",\"password\":\"d0dcbf0d12a6b1e7fbfa2ce5848f3eff\",\"headImg\":\"temp/f7af550371783a12e911ddd00d2c63d5daizhikang.jpg\",\"nickname\":\"Cindy2\",\"sex\":\"女\",\"birthday\":\"1996/1/1\",\"email\":\"cindy@163.com\",\"balance\":0,\"regtime\":\"2018-04-13 10:37:22\"}', '346', '32', '2018-04-11', '', '0');
INSERT INTO `orders` VALUES ('29', '[{\"id\":73,\"goodid\":1,\"qty\":6},{\"id\":74,\"goodid\":2,\"qty\":2}]', '//img01.hua.com/uploadpic/newpic/9012009.jpg', '10', '{\"id\":10,\"username\":\"13432872896\",\"password\":\"bfd59291e825b5f2bbf1eb76569f8fe7\",\"headImg\":\"temp/default.jpg\",\"nickname\":\"花花13432872896\",\"sex\":null,\"birthday\":null,\"email\":null,\"balance\":0,\"regtime\":\"2018-04-13 15:58:33\"}', '1324', '34', '2018-04-14', '333', '1');
INSERT INTO `orders` VALUES ('30', '[{\"id\":76,\"goodid\":1,\"qty\":3}]', '//img01.hua.com/uploadpic/newpic/9012009.jpg', '10', '{\"id\":10,\"username\":\"13432872896\",\"password\":\"bfd59291e825b5f2bbf1eb76569f8fe7\",\"headImg\":\"temp/2c13cec7edff9a6eff9f3f4b7c3302b2chenou.jpg\",\"nickname\":\"花花13432872896\",\"sex\":\"女\",\"birthday\":\"1952/2/1\",\"email\":\"\",\"balance\":0,\"regtime\":\"2018-04-13 15:58:33\"}', '417', '34', '2018-04-14', '谢谢', '1');
INSERT INTO `orders` VALUES ('31', '[{\"id\":77,\"goodid\":12,\"qty\":3},{\"id\":75,\"goodid\":32,\"qty\":2}]', '//img01.hua.com/uploadpic/newpic/8010060.jpg', '9', '{\"id\":9,\"username\":\"13413611594\",\"password\":\"d0dcbf0d12a6b1e7fbfa2ce5848f3eff\",\"headImg\":\"temp/f7af550371783a12e911ddd00d2c63d5daizhikang.jpg\",\"nickname\":\"Cindy2\",\"sex\":\"女\",\"birthday\":\"1996/1/1\",\"email\":\"cindy@163.com\",\"balance\":0,\"regtime\":\"2018-04-13 10:37:22\"}', '1450', '31', '2018-04-11', '', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户表',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `headImg` varchar(255) NOT NULL DEFAULT 'temp/default.jpg' COMMENT '头像',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `sex` varchar(255) DEFAULT NULL COMMENT '性别',
  `birthday` varchar(255) DEFAULT NULL COMMENT '年龄',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `balance` decimal(10,0) unsigned DEFAULT '0' COMMENT '余额',
  `regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13878630998', '123456', 'temp/default.jpg', 'ken', '男', '1993/6/6', 'matao_1891@163.com', '0', '2018-04-08 14:06:34');
INSERT INTO `user` VALUES ('2', '1', 'c4ca4238a0b923820dcc509a6f75849b', 'temp/default.jpg', '花花1', null, null, null, '0', '2018-04-10 16:51:26');
INSERT INTO `user` VALUES ('3', '134444444', '3476ccba3a70bb1f865e8a1220e29d3e', 'temp/default.jpg', '花花134444444', null, null, null, '0', '2018-04-10 16:51:59');
INSERT INTO `user` VALUES ('4', '13444444433', 'b0e11432327136ccb9c4d4cd557f81b3', 'temp/default.jpg', '花花134444444', null, null, null, '0', '2018-04-10 17:00:06');
INSERT INTO `user` VALUES ('5', '1344444444', '3476ccba3a70bb1f865e8a1220e29d3e', 'temp/default.jpg', '花花1344444444', null, null, null, '0', '2018-04-10 17:27:45');
INSERT INTO `user` VALUES ('6', '1344444445', '6bd2b5193d47bab575647b8560edc39c', 'temp/default.jpg', '花花1344444445', null, null, null, '0', '2018-04-11 09:31:23');
INSERT INTO `user` VALUES ('7', '13184847749', '4995ec381d6071f48a60170c42ebab72', 'temp/default.jpg', '卢本伟', '男', '1990/1/4', '666@qq.com', '0', '2018-04-11 09:49:59');
INSERT INTO `user` VALUES ('8', '13177498484', '4995ec381d6071f48a60170c42ebab72', 'temp/default.jpg', '花花13177498484', '女', '1994/1/1', '123@163.com', '0', '2018-04-12 19:39:58');
INSERT INTO `user` VALUES ('9', '13413611594', 'd0dcbf0d12a6b1e7fbfa2ce5848f3eff', 'temp/f7af550371783a12e911ddd00d2c63d5daizhikang.jpg', 'Cindy2', '女', '1996/1/1', 'cindy@163.com', '0', '2018-04-13 10:37:22');
INSERT INTO `user` VALUES ('10', '13432872896', 'bfd59291e825b5f2bbf1eb76569f8fe7', 'temp/b9a4090cabed5e8f988066ad6e297dda妖姬.jpg', '花花13432872896', '女', '1950/1/1', '545800322@qq.com', '0', '2018-04-13 15:58:33');
SET FOREIGN_KEY_CHECKS=1;
