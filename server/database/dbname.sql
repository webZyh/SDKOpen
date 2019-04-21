/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : dbname

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2019-04-21 10:17:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for banner_table
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `id` int(5) NOT NULL auto_increment,
  `src` varchar(64) NOT NULL,
  `desc` varchar(32) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('1', 'imgs/banner1.jpg', '哈哈哈哈哈');
INSERT INTO `banner_table` VALUES ('2', 'imgs/banner2.jpg', '呵呵呵呵呵呵');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `user_id` int(5) NOT NULL auto_increment,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY  (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('1', 'admin', '123');
INSERT INTO `user_table` VALUES ('2', 'zyh', '1122');
INSERT INTO `user_table` VALUES ('4', 'zyh1', 'ddd');
