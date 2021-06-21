# VBA

## VBAとは
VBEでコードを手書きすること→VBA</BR> 
「VBA」は、Visual Basic for Applicationsの略称で、マクロ機能で作成する手順を記述するときに使うマクロ言語の名称。
        
## マクロとは
マクロ記録で操作を記録すること→マクロ </BR>
「マクロ」とは、Excelや他のアプリケーションなどを、あらかじめ決めた手順で制御する機能の名前。</BR>
Excelの機能名ですから「グラフ」「ピボットテーブル」「オートフィルター」などと同じ立場。</BR>

## プロシージャとは

### Subプロシージャ
戻り値を返すことができない

```
Sub プロシージャ名()
　処理の内容
End Sub
```

### Functionプロシージャ

オリジナルの関数を作成できる
戻り値を返すことができる

```
Function SampleProc()  As Long(型) 

        '戻り値の設定例
        SampleProc = 1
        
End Function

```


### Propertyプロシージャ
オブジェクトの状態を表すプロパティを定義するためのプロシージャ
プロパティを作るときに使用する
 
```
Private SampleValue_ As Long

Ptoperty Get SampleValue() As Long
        SampleValue  = SampleValue_
End Property
```
