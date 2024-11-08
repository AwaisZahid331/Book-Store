import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_960_720.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2015/12/04/09/13/leaves-1076307_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2017/08/07/20/21/still-2607441_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2020/05/16/16/43/book-5178205_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2017/09/15/21/53/asia-2753733_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2017/10/03/00/00/dictionary-2810845_960_720.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2015/06/25/04/50/hand-print-820913_640.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2019/02/09/22/21/books-3986091_640.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2016/02/18/19/25/pc-1207886_640.jpg" alt=''/>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_640.jpg" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery