/**BÀI 1: TÍNH THUẾ THU NHẬP CÁ NHÂN
 * GIẢ SỬ: Người dùng nhập vào chương trình các thông tin HỌ VÀ TÊN, TỔNG THU NHẬP CÁ NHÂN TRONG NĂM, SỐ NGƯỜI PHỤ THUỘC. Chương trình sẽ tính ra số tiền thuế họ phải đóng.
 * -ĐẦU VÀO: người dùng nhập vào Họ và Tên, thu nhập cá nhân trong 1 năm, số người phụ thuộc
 * -XỬ LÝ:
 * 1. Tạo 1 function truyền vào 2 tham số (yearIncome và depeMem)
 * 2. Tính thu nhập chịu thuế theo công thức: taxBefore = yearIncome - 4.000.000 - (depeMem*1.600.000)
 * 3. Tạo 1 function khác có chức năng tính thuế phải đóng:
 * +Truyền vào function 1 để lấy ra số taxBefore
 * +IF ELSE các trường hợp để tính % cần phải đóng.
 * TH1: <= 60tr -> 5% (taxAfter = TaxBefore * 5%)
 * TH2: 60tr < taxBefore <= 120tr -> 10% (taxAfter = TaxBefore * 10%)
 * TH3: 120tr < taxBefore <= 210tr -> 15% (taxAfter = TaxBefore * 15%)
 * TH4: 210tr < taxBefore <= 384tr -> 20% (taxAfter = TaxBefore * 20%)
 * TH5: 384tr < taxBefore <= 624tr -> 25% (taxAfter = TaxBefore * 25%)
 * TH6: 624tr < texBefore <= 960tr -> 30% (taxAfter = TaxBefore * 30%)
 * TH7: else -> 35% (taxAfter = TaxBefore * 35%)
 * -ĐẦU RA: HỌ VÀ TÊN:.....; SỐ TIỀN THUẾ PHẢI ĐÓNG: ${taxAfter} VND
 *
 */

function taxBeforeCalc(yearIncome, depeMem) {
  if (yearIncome <= 0) {
    return (taxBefore = `<p class='text-danger mb-0'>Thu nhập cả năm không phải là số âm hoặc bằng 0</p>`);
  } else {
    return (taxBefore = yearIncome - 4000000 - depeMem * 1600000);
  }
}

function taxAfterCalc() {
  var yearIncome = document.getElementById("yearIncome").value * 1;
  var depeMem = document.getElementById("depeMem").value;
  if (depeMem == null) {
    depeMem = 0;
  } else {
    depeMem = depeMem * 1;
  }
  var taxBefore = taxBeforeCalc(yearIncome, depeMem);

  if (taxBefore <= 60000000 && taxBefore > 0) {
    return (taxAfter = taxBefore * 0.05);
  } else if (taxBefore > 60000000 && taxBefore <= 120000000) {
    return (taxAfter = taxBefore * 0.1);
  } else if (taxBefore > 120000000 && taxBefore <= 210000000) {
    return (taxAfter = taxBefore * 0.15);
  } else if (taxBefore > 210000000 && taxBefore <= 384000000) {
    return (taxAfter = taxBefore * 0.2);
  } else if (taxBefore > 384000000 && taxBefore <= 642000000) {
    return (taxAfter = taxBefore * 0.25);
  } else if (taxBefore > 642000000 && taxBefore <= 960000000) {
    return (taxAfter = taxBefore * 0.3);
  } else if (taxBefore > 960000000) {
    return (taxAfter = taxBefore * 0.35);
  } else {
    console.log("Số non");
    return (taxAfter = taxBefore); //Báo số không hợp lệ
  }
}

function taxResultDOM() {
  var name = document.getElementById("name").value;
  var currentFormat = new Intl.NumberFormat("VN-vn");
  taxAfter = taxAfterCalc();
  if (typeof taxAfter == typeof 123) {
    document.getElementById(
      "taxResultDOM"
    ).innerHTML = `<p class='mb-0'>Họ tên: <span class='text-danger'>${name}</span><hr></p> <br><p>Số tiền cần đóng là: <span class='text-danger'>${currentFormat.format(
      taxAfter
    )} VND</span></p>`;
  } else {
    document.getElementById("taxResultDOM").innerHTML = taxAfter;
  }
}
