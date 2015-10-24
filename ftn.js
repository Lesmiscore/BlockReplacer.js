var toLoad = "/sdcard/file";
var toSave = "/sdcard/number";
var fis;
var baos = new java.io.ByteArrayOutputStream();
try {
    fis = new java.io.FileInputStream(toLoad);
    var buf = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 10000);
    while (!0) {
        var r = fis.read(buf);
        if (r <= 0) break;
        baos.write(buf, 0, r);
    }
} finally {
    if (fis) fis.close();
    fis = null;
}
var data = baos.toByteArray();
var bint = new java.math.BigInteger(data);
var num = bint.toString();
print(num);
try {
    fis = new java.io.FileWriter(toSave);
    fis.write(num);
} finally {
    if (fis) fis.close();
    fis = null;
}