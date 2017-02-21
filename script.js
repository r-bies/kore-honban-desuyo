/**
 * Created by Takuhiro Yoshida
 */
$(function() {
    console.log($(".nav-elt-label").text());
    re = /東京/;
    if($(".nav-elt-label").text().match(re)) {
        $("#h").after('<div style="background-color:#FF0000;text-align:center;"><h3>これ本番ですよ！これ本番ですよ！これ本番ですよ！これ本番ですよ！これ本番ですよ！これ本番ですよ！</h3></div>');
    }
});
