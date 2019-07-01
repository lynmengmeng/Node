//全路径
/*
    module.filename：开发期间，该行代码所在的文件。
    __filename：始终等于 module.filename。
    __dirname：开发期间，该行代码所在的目录。
    process.cwd()：运行node的工作目录，可以使用  cd /d 修改工作目录。
    require.main.filename：用node命令启动的module的filename, 如 node xxx，这里的filename就是这个xxx。

 */

//全路径包括文件名      两个下划线
console.log(__filename);__
//路径,文件位置路径
console.log(__dirname);
