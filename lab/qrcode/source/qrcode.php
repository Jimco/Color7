<?php    

    Header('Content-type:text/html; charset=utf-8');    
    
    //set it to writable location, a place for temp generated PNG files
    $PNG_TEMP_DIR = dirname(__FILE__).DIRECTORY_SEPARATOR.'temp'.DIRECTORY_SEPARATOR;
    
    //html PNG location prefix
    $PNG_WEB_DIR = $_SERVER['HTTP_REFERER'].'source/temp/';

    include "qrlib.php";    
    
    //ofcourse we need rights to create temp dir
    if (!file_exists($PNG_TEMP_DIR)) mkdir($PNG_TEMP_DIR);
    
    $filename = $PNG_TEMP_DIR.'test.png';
    
    //processing form input
    //remember to sanitize user input in real-life solution !!!
    $errorCorrectionLevel = 'M';
    if (isset($_POST['level']) && in_array($_POST['level'], array('L','M','Q','H')))
        $errorCorrectionLevel = $_POST['level'];    

    $matrixPointSize = 5;
    if (isset($_POST['size'])) $matrixPointSize = min(max((int)$_POST['size'], 1), 10);

    if (isset($_POST['data'])) { 
    
        //it's very important!
        // die('data cannot be empty! <a href="?">back</a>');
        if (trim($_POST['data']) == ''){
            echo json_encode(array('return_code'=>'-1', 'msg'=>'数据不能为空！'));
            exit;
        }
            
        // user data
        $filename = $PNG_TEMP_DIR.'test'.md5($_POST['data'].'|'.$errorCorrectionLevel.'|'.$matrixPointSize).'.png';
        QRcode::png($_POST['data'], $filename, $errorCorrectionLevel, $matrixPointSize, 2);

    } else {    
        //default data
        // echo 'You can provide data in GET parameter: <a href="?data=like_that">like that</a><hr/>';    
        QRcode::png('^_^前端那些事儿欢迎您！ - www.xiejiancong.com', $filename, $errorCorrectionLevel, $matrixPointSize, 2);  
    }
        
    // //display generated file
    // echo '<img src="'.$PNG_WEB_DIR.basename($filename).'" /><hr/>';
    $imgdir = $PNG_WEB_DIR.basename($filename);
    echo json_encode(array('return_code'=>1, 'img'=>$imgdir));
    
    // //config form
    // echo '<form action="index.php" method="post">
    //     Data:&nbsp;<input name="data" value="'.(isset($_POST['data'])?htmlspecialchars($_POST['data']):'请在此输入内容 :)').'" />&nbsp;
    //     ECC:&nbsp;<select name="level">
    //         <option value="L"'.(($errorCorrectionLevel=='L')?' selected':'').'>L - smallest</option>
    //         <option value="M"'.(($errorCorrectionLevel=='M')?' selected':'').'>M</option>
    //         <option value="Q"'.(($errorCorrectionLevel=='Q')?' selected':'').'>Q</option>
    //         <option value="H"'.(($errorCorrectionLevel=='H')?' selected':'').'>H - best</option>
    //     </select>&nbsp;
    //     Size:&nbsp;<select name="size">';
        
    // for($i=1;$i<=10;$i++)
    //     echo '<option value="'.$i.'"'.(($matrixPointSize==$i)?' selected':'').'>'.$i.'</option>';
        
    // echo '</select>&nbsp;
    //     <input type="submit" value="生成"></form><hr/>';
        
    // benchmark
    // QRtools::timeBenchmark();

    