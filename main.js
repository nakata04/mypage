function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html",  // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        },
        error: function(err){
            alert("error" + err);
        }
    });
}


// Jquery関連のエラーが出たとき下記をhtml上に記載する（head）。
// ajax通信に問題がないか確認ができる。
/* 
<script type="text/javascript">
    $.ajax({
        url: "../include/header.html",
        success: function(data) {
            alert('success!!');
        },
        error: function(err){
            //通信失敗時の処
            alert('通信失敗' + err);
        }
    });
</script>
*/