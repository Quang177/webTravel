
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

// chuyen 1 doi tuong thanh html
// function changeroomhtml(phong){
    
//     phong = taodoituongphong(phong.maphong, phong.tenphong, phong.hinhanh, phong.size, phong.gia, phong.id);
//     var html ='';
//     html += '<div class="item">'
//     html += '<div class="item-thumb">'
//     html += '<img  width="45%" src="'+ phong.hinhanh + '"></div>'
//     html += '<h2 class="room-item-content">'+phong.tenphong+'</h2>'
//     html += '<div class = "item-price">'
//     html += '<span class="room-item-gia">Size:'+phong.size+'</span>'
//     html += '<span style="margin-left:20px;" class="item-price-sale">Giá :'+phong.gia+' ₫</span>'
//     html += '</div>'
//     html += '<button style="cursor:pointer;" onclick="duavaogiohang(\''+phong.id+'\')" >Đặt Phòng</button>'
//     html += '<button style="cursor:pointer;" onclick="xoa(\''+phong.id+'\')" >xoá</button>'
//     html += '<button style="cursor:pointer;" onclick="sua(\''+phong.id+'\')" >sửa</button>'
//     html += '</div>'   
//     return html;
// }



function changeroomhtml(phong){
    
    phong = taodoituongphong(phong.maphong, phong.tenphong, phong.hinhanh, phong.size, phong.gia);
    var html ='';
    html +='<div class="room-item">'
    html +=    '<div class="room-all">'
    html +=         '<div class="room-item-img">' 
    html +=             '<img src="'+phong.hinhanh+'" alt=""> </div>'
    html +=      '<div class="room-item-content">'
    html +=          '<h3>'+phong.tenphong+'</h3>'
    html +=             '<p>'
    html +=                 '<span>'
    html +=                     "Giá mỗi phòng <br> 20% VAT đã bao gồm trong giá "
    html +=                     '<br>' 
    html +=                     '<br>'
    html +=                     'Không hoàn lại <br> Chọn ngày để xem các gói' 
    html +=                     '<br>'
    html +=                     '<br>'
    html +=                     '<b>Kích thước giường:</b> 2 giường đơn hoặc 1 giường đôi' 
    html +=                     '<br>'
    html +=                     '<b>Kích cỡ phòng:</b> '+phong.size+'m <sup>2</sup>'
    html +=                 '</span>'
    html +=             '</p>'
    html +=     '</div>'
    html +=     '<hr>'
    html +=         '<div class="room-item-gia">'
    html +=             '<div class="max-person">'
    html +=                 '<div class="limited">'
    html +=                     '<span>Giới hạn</span>'
    html +=                         '<div class="max-person-icons">'
    html +=                             '<i class="fa-solid fa-user"></i>'
    html +=                             '<i class="fa-solid fa-user"></i>'
    html +=                         '</div>'
    html +=                   '</div>'
    html +=             '<div class="price"> '+phong.gia+' VNĐ</div>'
    html +=                 '<div class="calendar">'
    html +=                     '<p>CHỌN NGÀY</p>'
    html +=                 '</div>'
    html +=             '</div>'   
    html +=         '</div>'  
    html +=     '</div>'
    html +='</div>'
    html+='<hr>;'
    return html;
}

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