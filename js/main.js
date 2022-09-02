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
 * -ĐẦU RA: HỌ VÀ TÊN: ${name}; SỐ TIỀN THUẾ PHẢI ĐÓNG: ${taxAfter} VND
 *
 */
// FUNCTION 1: TÍNH THU NHẬP CHỊU THUẾ
function taxBeforeCalc(yearIncome, depeMem) {
  if (yearIncome <= 0) {
    return (taxBefore = `<p class='text-danger mb-0'>Thu nhập cả năm không phải là số âm hoặc bằng 0</p>`);
  } else {
    return (taxBefore = yearIncome - 4000000 - depeMem * 1600000);
  }
}
//FUNCTION 2: TÍNH SỐ TIỀN PHẢI ĐÓNG
function taxAfterCalc() {
  var yearIncome = document.getElementById("yearIncome").value * 1;
  var depeMem = document.getElementById("depeMem").value;
  if (depeMem == null) {
    depeMem = 0;
  } else {
    depeMem = depeMem * 1;
  }
  var taxBefore = taxBeforeCalc(yearIncome, depeMem);

  if (taxBefore <= 6e7 && taxBefore > 0) {
    return (taxAfter = taxBefore * 0.05);
  } else if (taxBefore > 6e7 && taxBefore <= 12e7) {
    return (taxAfter = taxBefore * 0.1);
  } else if (taxBefore > 12e7 && taxBefore <= 21e7) {
    return (taxAfter = taxBefore * 0.15);
  } else if (taxBefore > 21e7 && taxBefore <= 384e6) {
    return (taxAfter = taxBefore * 0.2);
  } else if (taxBefore > 384e6 && taxBefore <= 642e6) {
    return (taxAfter = taxBefore * 0.25);
  } else if (taxBefore > 642e6 && taxBefore <= 96e7) {
    return (taxAfter = taxBefore * 0.3);
  } else if (taxBefore > 96e7) {
    return (taxAfter = taxBefore * 0.35);
  } else {
    console.log("Số non");
    return (taxAfter = taxBefore); //Báo số không hợp lệ
  }
}
//FUNCTION 3: DOM KẾT QUẢ
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

/**BÀI 2: TÍNH TIỀN CÁP
 * -GIẢ SỬ: Người dùng nhập vào các thông tin: loại khách hàng, mã khách hàng, số kênh cao cấp. Sau đó tính và xuất ra số tiền họ cần phải đóng. Trong trường hợp khách hàng là doanh nghiệp thì thu thêm tiền số kết nối
 * -ĐẦU VÀO:
 * +Người dùng chọn customerType (Cá nhân hoặc Doanh nghiệp)
 * +Người dùng nhập customerID (Số bất kỳ)
 * +Người dùng nhập vào numOfChannel (Số kênh cao cấp đã đăng ký)
 * +Trong trường hợp là customerType là doanh nghiệp thì phải nhập thêm numOfConnect (Số kết nối)
 * -Xử lý:
 * 1. Tạo 1 fuction (1) có chức năm DOM inner một thẻ cho trường hợp customerType là Business và khi chọn cái khác thì không hoạt động
 * 2. Tạo 1 function (2) có chức năng tính tiền cho cá nhân với công thức: resultPrice = 4.5 + 20.5 + numOfChannel * 7.5
 * 3. Tạo 1 funciton (3) có chức năng tính tiền cho doanh nghiệp với các trường hợp và công thức sau:
 * + NẾU numOfConnect >= 10 -> resultPrice = 75 + (numOfConnect-10)*5 + 4.5 + 20.5 + numOfChannel * 7.5
 * + ELSE -> resultPrice = 15 + 75 + (50*numOfChannel) + 75
 * 4. Tạo 1 function (4) có chức năng nhận input ,chọn FUNCTION 2 hoặc 3 để tính vào DOM kết quả ra trang
 */
//FUNCTION 1
function DOMnumOfConnect() {
  var value = document.getElementById("customerType").value;
  if (value == "business") {
    document.getElementById(
      "DOMnumOfConnect"
    ).innerHTML = `<div class="card-body px-0">
    <input
      id="numOfConnect"
      type="number"
      class="form-control d-inline w-75"
      placeholder="Số kết nối"
    />
  </div>`;
  } else {
    document.getElementById("DOMnumOfConnect").innerHTML = "<!--  -->";
  }
}
//FUCTION 2
function personalCalc(numOfChannel) {
  return (resultPrice = 4.5 + 20.5 + numOfChannel * 7.5);
}
//FUNCTION 3
function businessCalc(numOfChannel) {
  var numOfConnect = document.getElementById("numOfConnect").value * 1;
  var resultPrice;
  if (numOfConnect >= 10) {
    resultPrice = 75 + (numOfConnect - 10) * 5 + 15 + numOfChannel * 50;
  } else {
    resultPrice = 15 + 75 + numOfChannel * 50;
  }
  return resultPrice;
}
//FUNCTION 4
function feeCalc() {
  var customerType = document.getElementById("customerType").value;
  var customerID = document.getElementById("customerID").value;
  var numOfChannel = document.getElementById("numOfChannel").value * 1;
  var finalPrice;
  var currentFormat = new Intl.NumberFormat("US-us");

  if (customerType == "personal") {
    finalPrice = currentFormat.format(personalCalc(numOfChannel));
  } else if (customerType == "business") {
    finalPrice = currentFormat.format(businessCalc(numOfChannel));
  } else {
    finalPrice = `Vui lòng chọn loại khách hàng`;
  }

  if (finalPrice.includes("Vui")) {
    document.getElementById(
      "resultPrice"
    ).innerHTML = `<p class='text-danger mb-0'>${finalPrice}</p>`;
  } else if (resultPrice < 0) {
    document.getElementById(
      "resultPrice"
    ).innerHTML = `<p class='text-danger mb-0'>Bạn đã nhập số âm</p>`;
  } else {
    document.getElementById(
      "resultPrice"
    ).innerHTML = `<p class='mb-0'>Mã khách hàng: <span class='text-danger'>${customerID}</span></p><hr><p class='mb-0'>Tiền cáp: <span class='text-danger'>$${finalPrice}</span></p>`;
    console.log(typeof finalPrice);
  }
}
//NHỜ MENTOR, THẦY COMMENT GIÚP EM CÁCH CHECK INPUT NGƯỜI DÙNG NHẬP VÀO LÀ SỐ ÂM NGAY KHI NHẬP SAI SẼ HIỆN NGAY POP UP CHỨ KHÔNG CẦN PHẢI ĐƯA VÀO HẾT RỒI MỚI CHẠY CHƯƠNG TRÌNH SAU ĐÓ BÁO LỖI. EM TÌM HIỂU THÌ CÓ CÁCH ONINPUT VÀ GÁN FUNCTION CHECK VÀO NHƯNG KHÔNG THÀNH CÔNG. EM CẢM ƠN THẦY VÀ MENTOR.
