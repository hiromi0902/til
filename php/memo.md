# PHP

## 一番最初と最後

``
<?php
?>
``

## 変数宣言

``
$変数名 
``

## 配列

## 画面出力

``
ehco ();
``

## 特定の文字列削除

1 $string = str_replace(array(" ", "　"), "", $string);
```
$string = "こんにち は"
$string = str_replace(array(" ", "　"), "", $string);
echo $string;
```

2 $string  = preg_replace("/( |　)/", "", $string );
```
$string = "こんにち は"
$string = preg_replace("　", "", $string );
echo $string;
```
出力結果
こんにちは

特に理由がない場合はstr_replace関数を使う方法が良い


## 変数や配列の内容を出力

``
ver_damp($変数or$配列変数);
``


