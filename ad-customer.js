var data = []
function add()
{
    var item_id = document.getElementById("id").value
    var item_name = document.getElementById("name").value
    var item_date = document.getElementById("ngaysinh").value
    var item_address = document.getElementById("diachi").value
    var item_SĐT = document.getElementById("SĐT").value
    var item_gender = document.getElementById("gioitinh").value
    var item_room = document.getElementById("loaiphong").value
    var item_from = document.getElementById("from").value
    var item_to = document.getElementById("to").value


    var item = {
        id : item_id,
        name : item_name,
        ngaysinh : item_date,
        diachi : item_address,
        SĐT : item_SĐT,
        gioitinh : item_gender,
        loaiphong : item_room,
        from : item_from,
        to : item_to
    }
    data.push(item)
    document.writeln(data);
}

function Display(){
    table = '<tr><th>ID</th><th>Name</th><th>Age</th>'
    for (var i = 0; i < data.length; i++)
    {
        table += '<tr>';
        table += '<td>' + list[i].Id + '</td>';
        table += '<td>' + list[i].Name + '</td>';
        table += '<td>' + list[i].Age + '</td>';
        table += '</tr>';
    }
    table += '</tr>'
    document.getElementById('table').innerHTML = table
}

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
        var id = document.getElementById('id').value;
        var name = document.getElementById('name').value;
        var ngaysinh = document.getElementById('ngaysinh').value;
        var diachi = document.getElementById('diachi').value;
        var SĐT = document.getElementById('SĐT').value;
        var gioitinh = document.getElementById('gioitinh').value;
        var loaiphong = document.getElementById('loaiphong').value;
        var from = document.getElementById('from').value;
        var to = document.getElementById('to').value;

        if (id && name && ngaysinh && diachi && SĐT && gioitinh && loaiphong && from && to) {
            return true;
        }else{
            alert('Vui lòng nhập đầy đủ thông tin trước khi thêm!');
        }
    }

    // Thêm mới nhân viên
    function Add(){
        var id = document.getElementById('id').value;
        var name = document.getElementById('name').value;
        var ngaysinh = document.getElementById('ngaysinh').value;
        var diachi = document.getElementById('diachi').value;
        var SĐT = document.getElementById('SĐT').value;
        var gioitinh = document.getElementById('gioitinh').value;
        var loaiphong = document.getElementById('loaiphong').value;
        var from = document.getElementById('from').value;
        var to = document.getElementById('to').value;

        var item = {
            id : id,
            name : name,
            ngaysinh : ngaysinh,
            diachi : diachi,
            SĐT : SĐT,
            gioitinh : gioitinh,
            loaiphong : loaiphong,
            from : from,
            to : to
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
        var datas = '<table border="1" cellpadding="9"><tr><td>Id</td><td>Tên</td><td>Ngày sinh</td><td>Địa chỉ</td><td>SĐT</td> <td>giới tính</td> <td>Phòng</td> <td>From</td> <td>to</td>  <td colspan="2">Action</td> </tr>';
        for (var i = 0; i < list.length; i++){
            
            datas += "<tr>";
            datas += "<td>" + list[i].id + "</td>"; 
            datas += "<td>" + list[i].name + "</td>"; 
            datas += "<td>" + list[i].ngaysinh + "</td>"
            datas += "<td>" + list[i].diachi + "</td>"; 
            datas += "<td>" + list[i].SĐT + "</td>"; 
            datas += "<td>" + list[i].gioitinh + "</td>"; 
            datas += "<td>" + list[i].loaiphong + "</td>"; 
            datas += "<td>" + list[i].from + "</td>"; 
            datas += "<td>" + list[i].to + "</td>"; 
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
            if (list[i].id == x)
            document.getElementById("id").value = list[i].id;
            document.getElementById("name").value = list[i].name;
            document.getElementById("ngaysinh").value = list[i].ngaysinh;
            document.getElementById("diachi").value = list[i].diachi;
            document.getElementById("SĐT").value = list[i].SĐT;
            document.getElementById("gioitinh").value = list[i].gioitinh;
            document.getElementById("loaiphong").value = list[i].loaiphong;
            document.getElementById("from").value = list[i].from;
            document.getElementById("to").value = list[i].to;
        }
    }

    function Edit(){
        var list = this.data;

        var item_id = document.getElementById("id").value
        var item_name = document.getElementById("name").value
        var item_date = document.getElementById("ngaysinh").value
        var item_address = document.getElementById("diachi").value
        var item_SĐT = document.getElementById("SĐT").value
        var item_gender = document.getElementById("gioitinh").value
        var item_room = document.getElementById("loaiphong").value
        var item_from = document.getElementById("from").value
        var item_to = document.getElementById("to").value
    
    
        var item = {
            id : item_id,
            name : item_name,
            ngaysinh : item_date,
            diachi : item_address,
            SĐT : item_SĐT,
            gioitinh : item_gender,
            loaiphong : item_room,
            from : item_from,
            to : item_to
            }

        var index = list.findIndex((c)=>c.id == item.id);
        list.splice(index,1,item);

        View();
    }

    // Xóa nhân viên theo id
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
     
        document.getElementById('id').value ='';
        document.getElementById('name').value ='';
        document.getElementById('ngaysinh').value ='';
        document.getElementById('diachi').value ='';
        document.getElementById('SĐT').value ='';
        document.getElementById('gioitinh').value ='';
        document.getElementById('loaiphong').value ='';
        document.getElementById('from').value ='';
        document.getElementById('to').value ='';
    }

