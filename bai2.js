function calculateArea() {
    // Lấy giá trị chiều dài và chiều rộng từ input
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;

    // Kiểm tra xem giá trị nhập vào có phải là số không và là số dương
    length = parseFloat(length);
    width = parseFloat(width);

    // Xử lý lỗi nhập liệu
    if (isNaN(length) || isNaN(width)) {
        document.getElementById('result').innerHTML = "Vui lòng nhập số hợp lệ!";
        return;
    }
    if (length <= 0 || width <= 0) {
        document.getElementById('result').innerHTML = "Chiều dài và chiều rộng phải là số dương!";
        return;
    }

    // Tính diện tích
    var area = length * width;

    // Hiển thị kết quả
    document.getElementById('result').innerHTML = "Diện tích hình chữ nhật là: " + area + " m²";
}