# VBA

## VBAとは

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
