データ操作言語（DML）

sampleデータ
テーブル名：employee
社員ID　社員名　部署　役職　年齢　備考
employee_id name dept position　age memo

SELECT（データの検索）

SELECT *（検索したいカラム→今回は全カラムからデータ取得、カラム毎に所得可能）
FROM　 employee（どの表から検索するか）
WHERE  employee_id=001;


INSERT（データの追加）

INSERT INTO テーブル名
VALUES (値1, 値2, 値3, …);


UPDATE（データの更新）

UPDATE テーブル名
SET カラム名 = 変更したい値
WHERE 条件文;


DELETE（データの削除）
DELETE FROM テーブル名
WHERE 条件文;
