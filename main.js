/* Bài Tập Quản Lý Tuyển Sinh */
document.getElementById("kq").onclick = function () {

    //Đầu Vào : DOM tới thẻ input các thẻ để lấy value
    var diemChuan = document.getElementById("diemchuan").value * 1;
    var diemSoMot = document.getElementById("diem1").value * 1;
    var diemSoHai = document.getElementById("diem2").value * 1;
    var diemSoBa = document.getElementById("diem3").value * 1;
    var diemKhuVuc = document.getElementById("khuvuc").value;
    var diemDoiTuong = document.getElementById("doituong").value * 1;

    // Xử Lý : công thức và điều kiện
    var diemBaMon = diemSoMot + diemSoHai + diemSoBa ;

    /* Điểm ƯU Tiên */
    if ( diemKhuVuc === 'X') {
        var diemUuTien = diemDoiTuong ; 
    }  else if (diemDoiTuong === 0 ) {
        var diemUuTien = diemKhuVuc*1;
    }  else if ( diemDoiTuong === 0  &&  diemKhuVuc === 'X') {
        var diemUuTien = 0;
    }   else {
        var diemUuTien = diemKhuVuc*1 + diemDoiTuong ;
    }


    var diemTong = diemBaMon + diemUuTien;

    /* So Sánh */
    if ( diemTong >= diemChuan && diemSoMot ==! 0 && diemSoHai ==! 0 && diemSoBa ==! 0) {
        var TongKet = "Đậu" + " Và  Tổng Điểm Là   " + diemTong;
    }  else {
        var TongKet = "Rớt" + " Và  Tổng Điểm Là   " + diemTong;
    }

    // Xuất Kết Quả So Sánh
    document.getElementById("thongbao").innerHTML = TongKet ;
}


/* Bài Tập Tính Tiền Điện */
document.getElementById("xuatkq").onclick = function () {

    //Đầu Vào : DOM tới thẻ input naptienDien lấy value
    var tienDien = document.getElementById("nhapTienDien").value * 1;

    // Xử Lý : công thức và điều kiện
    if ( tienDien <= 50 ) {
        var tienLa = tienDien * 500 + " " + "VNĐ" ;
    }  else if (  tienDien > 50 && tienDien <=100 )   {
        var tienLa = 50 * 500 +                                ( tienDien - 50 )*650 +  " " + "VNĐ" ;
    }  else if (  tienDien > 100 && tienDien <= 200 ) {
        var tienLa = 50 * 500 + 50* 650 +                      ( tienDien - 100)*850 +  " " + "VNĐ"  ;
    }  else if (  tienDien > 200 && tienDien <= 350 ) {
        var tienLa = 50 * 500 + 50* 650 + 100*850 +            (tienDien - 200 )*1100 + " " + "VNĐ"  ;
    }  else {
        var tienLa = 50 * 500 + 50* 650 + 100*850 + 150*1100 + (tienDien - 350)*1300 + " " + "VNĐ"  ;
    }

    // Xuất Kết Quả
    document.getElementById("thongbaott").innerHTML = tienLa;
}