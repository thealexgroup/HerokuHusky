use husky_db;

CREATE TABLE dogs (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    eyeColorOne VARCHAR(1) NOT NULL,
    eyeColorTwo VARCHAR(1) NOT NULL,
    coatColorOne VARCHAR(1) NOT NULL,
    coatColorTwo VARCHAR(1) NOT NULL,
    tailLengthOne VARCHAR(1) NOT NULL,
    tailLengthTwo VARCHAR(1) NOT NULL,
    tongueOne VARCHAR(1) NOT NULL,
    tongueTwo VARCHAR(1) NOT NULL,
    sexOne VARCHAR(1) NOT NULL,
    sexTwo VARCHAR(1) NOT NULL,
    genoType VARCHAR(10) NOT NULL,
    huskyImage VARCHAR(7) NOT NULL
);

INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','L','T','t','X','Y','bbGGLLTtXY','1.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','L','T','t','X','Y','bbGWLLTtXY','2.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','L','T','T','X','Y','bbWWLLTTXY','3.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','L','T','t','X','Y','BBGGLLTtXY','4.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','L','T','t','X','Y','BBGWLLTtXY','5.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','L','T','t','X','Y','BBWWLLTtXY','6.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','L','T','t','X','Y','BbGGLLTtXY','7.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','L','T','t','X','Y','BbGWLLTtXY','8.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','L','T','t','X','Y','BbGWLLTtXY','9.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','S','T','t','X','Y','bbGGLSTtXY','10.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','S','T','t','X','Y','bbGWLSTtXY','11.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','S','T','t','X','Y','bbWWLSTtXY','12.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','S','T','t','X','Y','BBGGLSTtXY','13.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','S','T','t','X','Y','BBGWLSTtXY','14.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','S','T','t','X','Y','BBWWLSTtXY','15.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','S','T','t','X','Y','BbGGLSTtXY','16.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','S','T','t','X','Y','BbGWLSTtXY','17.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','S','T','t','X','Y','BbWWLSTtXY','18.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','S','S','T','t','X','Y','bbGGSSTtXY','19.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','S','S','T','t','X','Y','bbGWSSTtXY','20.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','S','S','T','t','X','Y','bbWWSSTtXY','21.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','S','S','T','t','X','Y','BBGGSSTtXY','22.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','S','S','T','t','X','Y','BBGWSSTtXY','23.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','S','S','T','t','X','Y','BBWWSSTtXY','24.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','S','S','T','t','X','Y','BbGGSSTtXY','25.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','S','S','T','t','X','Y','BbGWSSTtXY','26.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','S','S','T','t','X','Y','BbWWSSTtXY','27.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','L','T','T','X','Y','bbGGLLTTXY','28.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','L','T','T','X','Y','bbGWLLTTXY','29.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','L','T','T','X','Y','bbWWLLTTXY','30.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','L','T','T','X','Y','BBGGLLTTXY','31.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','L','T','T','X','Y','BBGWLLTTXY','32.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','L','T','T','X','Y','BBWWLLTTXY','33.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','L','T','T','X','Y','BbGGLLTTXY','34.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','L','T','T','X','Y','BbGWLLTTXY','35.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','L','T','T','X','Y','BbWWLLTTXY','36.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','S','T','T','X','Y','bbGGLSTTXY','37.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','S','T','T','X','Y','bbGWLSTTXY','38.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','S','T','T','X','Y','bbWWLSTTXY','39.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','S','T','T','X','Y','BBGGLSTTXY','40.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','S','T','T','X','Y','BBGWLSTTXY','41.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','T','T','X','Y','Y','BBWWLTTXY','02.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','S','T','T','X','Y','BbGGLSTTXY','43.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','S','T','T','X','Y','BbGWLSTTXY','44.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','S','T','T','X','Y','BbWWLSTTXY','45.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','S','S','T','T','X','Y','bbGGSSTTXY','46.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','S','S','T','T','X','Y','bbGWSSTTXY','47.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','S','S','T','T','X','Y','bbWWSSTTXY','48.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','S','S','T','T','X','Y','BBGGSSTTXY','49.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','S','S','T','T','X','Y','BBGWSSTTXY','50.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','S','S','T','T','X','Y','BBWWSSTTXY','51.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','S','S','T','T','X','Y','BbGGSSTTXY','52.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','S','S','T','T','X','Y','BbGWSSTTXY','53.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','S','S','T','T','X','Y','BbWWSSTTXY','54.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','L','t','t','X','Y','bbGGLLttXY','55.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','L','t','t','X','Y','bbGWLLttXY','56.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','L','t','t','X','Y','bbWWLLttXY','57.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','L','t','t','X','Y','BBGGLLttXY','58.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','L','t','t','X','Y','BBGWLLttXY','59.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','L','t','t','X','Y','BBWWLLttXY','60.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','L','t','t','X','Y','BbGGLLttXY','61.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','L','t','t','X','Y','BbGWLLttXY','62.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','L','t','t','X','Y','BbWWLLttXY','63.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','S','t','t','X','Y','bbGGLSttXY','64.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','S','t','t','X','Y','bbGWLSttXY','65.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','S','t','t','X','Y','bbWWLSttXY','66.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','S','t','t','X','Y','BBGGLSttXY','67.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','S','t','t','X','Y','BBGWLSttXY','68.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','S','t','t','X','Y','BBWWLSttXY','69.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','S','t','t','X','Y','BbGGLSttXY','70.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','S','T','T','X','Y','bbGWLSTTXY','71.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','S','t','t','X','Y','BbWWLSttXY','72.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','S','S','t','t','X','Y','bbGGSSttXY','73.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','S','S','t','t','X','Y','bbGWSSttXY','74.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','S','S','t','t','X','Y','bbWWSSttXY','75.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','S','S','t','t','X','Y','BBGGSSttXY','76.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','S','S','t','t','X','Y','BBGWSSttXY','77.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','S','S','t','t','X','Y','BBWWSSttXY','78.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','S','S','t','t','X','Y','BbGGSSttXY','79.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','S','S','t','t','X','Y','BbGWSSttXY','80.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','S','S','t','t','X','Y','BbWWSSttXY','81.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','L','T','t','X','X','bbGGLLTtXX','82.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','L','T','t','X','X','bbGWLLTtXX','83.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','L','T','t','X','X','bbWWLLTtXX','84.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','L','T','t','X','X','BBGGLLTtXX','85.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','L','T','t','X','X','BBGWLLTtXX','86.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','L','T','t','X','X','BBWWLLTtXX','87.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','L','T','t','X','X','BbGGLLTtXX','88.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','L','T','t','X','X','BbGWLLTtXX','89.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','L','T','t','X','X','BbWWLLTtXX','90.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','S','T','t','X','X','bbGGLSTtXX','91.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','S','T','t','X','X','bbGWLSTtXX','92.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','S','T','t','X','X','bbWWLSTtXX','93.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','S','T','t','X','X','BBGGLSTtXX','94.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','S','T','t','X','X','BBGWLSTtXX','95.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','S','T','t','X','X','BBWWLSTtXX','96.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','S','T','t','X','X','BbGGLSTtXX','97.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','S','T','t','X','X','BbGWLSTtXX','98.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','S','T','t','X','X','BbWWLSTtXX','99.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','S','S','T','t','X','X','bbGGSSTtXX','100.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','S','S','T','t','X','X','bbGWSSTtXX','101.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','S','S','T','t','X','X','bbWWSSTtXX','102.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','S','S','T','t','X','X','BBGGSSTtXX','103.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','S','S','T','t','X','X','BBGWSSTtXX','104.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','S','S','T','t','X','X','BBWWSSTtXX','105.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','S','S','T','t','X','X','BbGGSSTtXX','106.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','S','S','T','t','X','X','BbGWSSTtXX','107.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','S','S','T','t','X','X','BbWWSSTtXX','108.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','L','T','T','X','X','bbGGLLTTXX','109.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','L','T','T','X','X','bbGWLLTTXX','110.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','L','T','T','X','X','bbWWLLTTXX','111.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','L','T','T','X','X','BBGGLLTTXX','112.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','L','T','T','X','X','BBGWLLTTXX','113.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','L','T','T','X','X','BBWWLLTTXX','114.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','L','T','T','X','X','BbGGLLTTXX','115.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','L','T','T','X','X','BbGWLLTTXX','116.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','L','T','T','X','X','BbWWLLTTXX','117.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','S','T','T','X','X','bbGGLSTTXX','118.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','S','T','T','X','X','bbGWLSTTXX','119.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','S','T','T','X','X','bbWWLSTTXX','120.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','S','T','T','X','X','BBGGLSTTXX','121.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','S','T','T','X','X','BBGWLSTTXX','122.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','S','T','T','X','X','BBWWLSTTXX','123.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','S','T','T','X','X','BbGGLSTTXX','124.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','S','T','T','X','X','BbGWLSTTXX','125.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','S','T','T','X','X','BbWWLSTTXX','126.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','S','S','T','T','X','X','bbGGSSTTXX','127.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','S','S','T','T','X','X','bbGWSSTTXX','128.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','S','S','T','T','X','X','bbWWSSTTXX','129.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','S','S','T','T','X','X','BBGGSSTTXX','130.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','S','S','T','T','X','X','BBGWSSTTXX','131.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','S','S','T','T','X','X','BBWWSSTTXX','132.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','S','S','T','T','X','X','BbGGSSTTXX','133.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','S','S','T','T','X','X','BbGWSSTTXX','134.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','S','S','T','T','X','X','BbWWSSTTXX','135.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','L','t','t','X','X','bbGGLLttXX','136.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','L','t','t','X','X','bbGWLLttXX','137.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','L','t','t','X','X','bbWWLLttXX','138.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','L','t','t','X','X','BBGGLLttXX','139.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','L','t','t','X','X','BBGWLLttXX','140.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','L','t','t','X','X','BBWWLLttXX','141.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','L','t','t','X','X','BbGGLLttXX','142.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','L','t','t','X','X','BbGWLLttXX','143.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','L','t','t','X','X','BbWWLLttXX','144.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','L','S','t','t','X','X','bbGGLSttXX','145.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','L','S','t','t','X','X','bbGWLSttXX','146.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','L','S','t','t','X','X','bbWWLSttXX','147.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','L','S','t','t','X','X','BBGGLSttXX','148.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','L','S','t','t','X','X','BBGWLSttXX','149.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','L','S','t','t','X','X','BBWWLSttXX','150.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','L','S','t','t','X','X','BbGGLSttXX','151.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','L','S','t','t','X','X','BbGWLSttXX','152.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','L','S','t','t','X','X','BbWWLSttXX','153.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','G','S','S','t','t','X','X','bbGGSSttXX','154.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','G','W','S','S','t','t','X','X','bbGWSSttXX','155.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('b','b','W','W','S','S','t','t','X','X','bbWWSSttXX','156.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','G','S','S','t','t','X','X','BBGGSSttXX','157.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','G','W','S','S','t','t','X','X','BBGWSSttXX','158.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','B','W','W','S','S','t','t','X','X','BBWWSSttXX','159.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','G','S','S','t','t','X','X','BbGGSSttXX','160.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','G','W','S','S','t','t','X','X','BbGWSSttXX','161.jpg');
INSERT INTO dogs (eyeColorOne, eyeColorTwo, coatColorOne, coatColorTwo, tailLengthOne, tailLengthTwo, tongueOne, tongueTwo, sexOne, sexTwo, genoType, huskyImage) VALUES ('B','b','W','W','S','S','t','t','X','X','BbWWSSttXX','162.jpg');
