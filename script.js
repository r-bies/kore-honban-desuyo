/**
 * Created by Takuhiro Yoshida
 */
$(function() {
    console.log($(".nav-elt-label").text());
    var tokyo = /東京/;
    var global = /グローバル/;
    if($(".nav-elt-label").text().match(tokyo)) {
        $("#h").after('<div style="background-color:#FF0000;text-align:center;"><h3>これ本番ですよ！これ本番ですよ！これ本番ですよ！これ本番ですよ！これ本番ですよ！これ本番ですよ！</h3></div>');
    } else if($(".nav-elt-label").text().match(global)) {
        $("#h").after('<div style="background-color:#FFFF00;text-align:center;"><h3>これグローバルですよ！これグローバルですよ！これグローバルですよ！これグローバルですよ！これグローバルですよ！これグローバルですよ！</h3></div>');
    }
});
