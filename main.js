function header(rootDir){
    // print("aaaaaaa");
    // alert(rootDir + "include/header.html");
    // document.write(rootDir + "include/header.html");
    // document.write(html);
    $.ajax({
        url: rootDir + "include/header.html",  // 読み込むHTMLファイル
        // url: "include/header.html",  // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
            // alert(rootDir + "include/header.html");
        },
        error: function(err){
            alert(err);
            // alert("error");
        }
    });
}