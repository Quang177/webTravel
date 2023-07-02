var data = []
function add()
{
    var item_maphong = document.getElementById("maphong").value
    var item_tenphong = document.getElementById("tenphong").value
    var item_hinhanh = document.getElementById("hinhanh").value
    var item_size = document.getElementById("size").value
    var item_gia = document.getElementById("gia").value

    var item = {
        maphong : item_maphong,
        tenphong : item_tenphong,
        hinhanh : item_hinhanh,
        size : item_size,
        gia : item_gia,
    }
    data.push(item)
    document.writeln(data);
}

// function Display(){
//     table = '<tr><th>ID</th><th>Name</th><th>Age</th>'
//     for (var i = 0; i < data.length; i++)
//     {
//         table += '<tr>';
//         table += '<td>' + list[i].Id + '</td>';
//         table += '<td>' + list[i].Name + '</td>';
//         table += '<td>' + list[i].Age + '</td>';
//         table += '</tr>';
//     }
//     table += '</tr>'
//     document.getElementById('table').innerHTML = table
// }

    var data = []; // Khai báo mảng trong javascript

    // Check trùng id
    function checkID(id){
        var list = this.data;
        for (var i = 0; i < list.length; i++){
            if (list[i].id == id) {
                return true;
            }
        }
    }

    // Check chưa nhập thông tin
    function checkInfo(){
        var maphong = document.getElementById('maphong').value;
        var tenphong = document.getElementById('tenphong').value;
        var hinhanh = document.getElementById('hinhanh').value;
        var size = document.getElementById('size').value;
        var gia = document.getElementById('gia').value;

        if (maphong && tenphong && hinhanh && size && gia) {
            return true;
        }else{
            alert('Vui lòng nhập đầy đủ thông tin trước khi thêm!');
        }
        // if(length(size)<=9){
        //     return true;
        // }else{
        //     alert('size chỉ nhập được dưới 10 chữ số');
        // }
        // if(length(gia) <=9){
        //     return true;
        // }
        // else{
        //     alert('Giá chỉ có thể dưới 10 chữ số');
        // }
    }

    // Thêm mới nhân viên
    function Add(){
        var maphong = document.getElementById('maphong').value;
        var tenphong = document.getElementById('tenphong').value;
        var hinhanh = document.getElementById('hinhanh').value;
        var size = document.getElementById('size').value;
        var gia = document.getElementById('gia').value;

        var item = {
            maphong     :  maphong,
            tenphong   :  tenphong,
            hinhanh   : hinhanh,
            size  :  size,
            gia  :  gia
        };

        if (checkID(id)) {
            alert("ID đã tồn tại, vui lòng nhập ID khác!");
        }else if(checkInfo()){
            this.data.push(item);
            console.log(data);
            View();
            Refresh();
        }
    }

    // Hiển thị ảnh ra danh sách hiển thị
    function chooseFile(hinhanh){
        if(hinhanh.files && hinhanh.files[0]){
            var reader = new FileReader();

            reader.onload = function(e){
                $('#image').attr('src',e.target.result);
            }
            reader.readAsDataURL(hinhanh.files[0]);
        }
    }

    // Hiển thị danh sách phòng
    function View(){
        var list = this.data;

        // Xử lý cộng chuỗi thành html - table
        var datas = '<table border="1" cellpadding="5"><tr><td>Mã phòng</td><td>Tên phòng</td><td>Hình ảnh</td><td>Size</td><td>Giá</td> <td colspan="2">Action</td> </tr>';
        for (var i = 0; i < list.length; i++){

            datas += "<tr>";
            datas += "<td>" + list[i].id + "</td>"; 
            datas += "<td>" + list[i].name + "</td>"; 
            // datas += "<td>" + list[i].hinhanh + "</td>"
            datas += "<td> <img id=\"image\"; src="+list[i].hinhanh+" style=\"width:100px; alt=\"có ảnh\"></td>";
            datas += "<td>" + list[i].size + "</td>"; 
            datas += "<td>" + list[i].gia + "</td>"; 
            // datas += "<td><button onclick='Deletes(" + list[i].id + ")'>Xóa</button>";
            datas += "<td> <i class=\"fa-solid fa-trash-can\" onclick='Deletes("+ list[i].id + ")'></i> </td>";
            datas += "<td> <i class=\"fa-solid fa-file-pen\" ; onclick='Sua("+ list[i].id +")'></i> </td>";
            datas += "</tr>";
        }
        datas += '</table>';

        if (list.length != 0) {
            document.getElementById('database').innerHTML = datas;
        }else{
            document.getElementById('database').innerHTML = 'Dữ liệu trống!';
        }
        
    }

    // 
    // var hvt = document.getElementById("hvt"+row);
    // frmMain.txtHoVaTen.value=hvt.innerHTML;
    // 
    function Sua(x){
        var list = this.data;
        for(var i = 0; i < list.length; i++){
            if (list[i].maphong == x)
            document.getElementById("maphong").value = list[i].maphong;
            document.getElementById("tenphong").value = list[i].tenphong;
            document.getElementById("hinhanh").value = list[i].hinhanh;
            document.getElementById("size").value = list[i].size;
            document.getElementById("gia").value = list[i].gia;
        }
    }
    function Edit(){
        var list = this.data;

        var item_maphong = document.getElementById("maphong").value
        var item_tenphong = document.getElementById("tenphong").value
        var item_hinhanh = document.getElementById("hinhanh").value
        var item_size = document.getElementById("size").value
        var item_gia = document.getElementById("gia").value

        var item = {
        maphong : item_maphong,
        tenphong : item_tenphong,
        hinhanh : item_hinhanh,
        size : item_size,
        gia : item_gia,
        }

        var index = list.findIndex((c)=>c.id == item.id)
        list.splice(index,1,item)

        View();

    }

    // function Edit(){
    //     var list = this.data;
    //     for(var i = 0; i < list.length; i++){           
    //         document.getElementById("id").value = list[i].id.innerHTML;
    //     }
    // }

    // Xóa phongf theo id
    function Deletes(id){
        var list = this.data;
        var check = confirm("Bạn có muốn xóa phòng này không?");

        if(check){
            for (var i = 0; i < list.length; i++){
                if (list[i].id == id) {
                    list.splice(i, 1);
                }
            }
        }
        View(); // gọi hàm hiển thị
    }

    // Refresh
    function Refresh(){
        document.getElementById('maphong').value = '';
        document.getElementById('tenphong').value = '';
        document.getElementById('hinhanh').value = '';
        document.getElementById('size').value = '';
        document.getElementById('gia').value = '';
    }

//   tạo dư liệu hoạt động trên local storage

// Tạo đối tuọng phòng có các thuộc tính cần lưu trũ và hiển thị
function taodoituongphong(maphong,tenphong,hinhanh,size,gia,id)
{
    var phong = new Object();

    /* buoc1: gan cac thuoc tinh cho doi tuong */
    phong.maphong = maphong;
    phong.tenphong = tenphong;
    phong.hinhanh = hinhanh;
    phong.size = size;
    phong.gia = gia;

    if(id != null){
        phong.id =id;
    }
    else{
        phong.id =taoid();
    }

    phong.toJson =function(){
        var json = JSON.stringify(this);
        return json;
    }
    phong.fromJSON = function(json){
        var doituongdaydu = new Object();
        var doituong = JSON.parse(json);
        var doituongdaydu = taodoituongphong(doituong.maphong, doituong.tenphong, doituong.hinhanh, doituong.size, doituong.gia);
        return doituongdaydu;
    }

    return phong;
}
//duyệt từng phần tử trong danh sách để chuyển ra tràn HTML
function readerHTML(danhsachphong){
    var htmldanhsachphong = '<div class="items">';
    for( var i=0;i<danhsachphong.length;i++)
    {
        var phong = danhsachphong[i];
        var htmlphong=changeroomhtml(phong);
        htmldanhsachphong=htmldanhsachphong+htmlphong;
    }

    htmldanhsachphong = htmldanhsachphong + '</div>';
    return htmldanhsachphong;
}

// chuyen 1 doi tuong thanh html theo định dạng
function changeroomhtml(phong){
    
    phong = taodoituongphong(phong.maphong, phong.tenphong, phong.hinhanh, phong.size, phong.gia);
    var html ='';
    html += '<div class="room-item">'
    html += '<div class="room-all">'
    html += '<div class="room-item-img">'
    html += '<img  width="45%" src="'+ phong.hinhanh + '"></div>'
    html += '<div class="room-item-content">'
    html += '<h3>'+phong.tenphong+'</h3>'
    html += '<div class = "item-price">'
    html += '<span class="room-item-gia">Size:'+phong.size+'</span>'
    html += '<span style="margin-left:20px;" class="item-price-sale">Giá :'+phong.gia+' ₫</span>'
    html += '</div>'
    html += '<button style="cursor:pointer;" onclick="duavaogiohang(\''+phong.id+'\')" >Đặt Phòng</button>'
    html += '</div>'   
    return html;
}

// function changeroomhtml(phong){
    
//     phong = taodoituongphong(phong.maphong, phong.tenphong, phong.hinhanh, phong.size, phong.gia);
//     var html ='';
//     html += '<div class="room-item">'
//         html += '<div class="room-all">'
//             html+='<div class="room-item-img">' 
//                 html+='<img src="'+phong.hinhanh+'" alt=""> </div>'
//             html+='<div class="room-item-content">'
//                 html+='<h3>'+phong.tenphong+'</h3>'
//                 html+='<p>'
//                     html+='<span>'
//                         html+="Giá mỗi phòng <br> 20% VAT đã bao gồm trong giá "
//                         html+='<br>' 
//                         html+='<br>'
//                         html+='Không hoàn lại <br> Chọn ngày để xem các gói' 
//                         html+='<br>'
//                         html+='<br>'
//                         html+='<b>Kích thước giường:</b> 2 giường đơn hoặc 1 giường đôi' 
//                         html+='<br>'
//                         html+='<b>Kích cỡ phòng:</b> '+phong.size'm <sup>2</sup>'
//                     html+='</span>'
//                 html+='</p>'
//             html+='</div>'
//             html+='<hr>'
//             html+='<div class="room-item-gia">'
//                 html+='<div class="max-person">'
//                     html+='<div class="limited">'
//                         html+='<span>Giới hạn</span>'
//                         html+='<div class="max-person-icons">'
//                             html+='<i class="fa-solid fa-user"></i>'
//                             htm+='<i class="fa-solid fa-user"></i>'
//                         html+='</div>'
//                     html+='</div>'
//                     html+='<div class="price"> '+phong.gia+' VNĐ</div>'
//                     html+='<div class="calendar">'
//                         html+='<p>CHỌN NGÀY</p>'
//                     html+='</div>'
//                 html+='</div>'   
//             html+='</div>'  
//         html+='</div>'
//     html+='</div>'

//     html+='<hr>;'
//     return html;
// }


// -----------------

// tạo id tự động theo mỗI giây trôi qua
function taoid(){
    var id='';
    /* lay milisecond o thoi điểm hiệ ntai; 1s=1000milisecond*/
    id = Math.random().toString().substring(2,10)+"_"+ String(new Date().getTime());
    return id;
}

function xoa(id){
    // alert(id);
    let danhsachp = localStorage.getItem("danhsachphong") ? JSON.parse(localStorage.getItem("danhsachphong")) : [] 
    for(var i = 0; i<danhsachp.length; i++)
    {
        if(danhsachp[i].id === id)
        {
            if(confirm("Bạn có chắc chắn muốn xóa  không?")){
                danhsachp.splice(i,1);
                localStorage.setItem("danhsachphong", JSON.stringify(danhsachp))
                location.reload()
            }
            break;
        }
    }
}

function sua(id){
    let suadanhsachp = localStorage.getItem("danhsachphong") ? JSON.parse(localStorage.getItem("danhsachphong")) : []

    for (let i = 0; i < suadanhsachp.length; i++){
        if (suadanhsachp[i].id === id)
        {

        }
    }
}

