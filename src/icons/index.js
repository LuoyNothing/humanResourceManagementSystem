import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg component

// register globally
Vue.component("SvgIcon", SvgIcon);

// require.context(文件夹地址，是否扫码子目录， 正则表达式-扫描什么文件) 用于扫码文件夹中的文件
const req = require.context("./svg", false, /\.svg$/);
// reg返回的是一个函数，req.keys()可以查看扫描出来的文件
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
// requireAll 表示对每一个扫描出来的文件都应用到项目中
requireAll(req);
