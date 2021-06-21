## オートフィルタ設定

Range指定（範囲指定）

```
Sub autofilter1()
    Range("フィルター範囲").AutoFilter
End Sub
```

UsedRange使用（シートで使用されているセルの範囲を全て取得）

```
Sub autofilter2()
    ActiveSheet.UsedRange.AutoFilter
End Sub
```
