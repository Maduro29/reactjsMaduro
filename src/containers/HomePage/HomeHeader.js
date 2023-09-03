import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {

        return (
            <>
                <div className='homeheader-container'>
                    <div className='homeheader-content'>
                        <div className='first-content'>
                            <i className="fas fa-bars"></i>
                            <div className='homeheader-logo-container'>
                                <div className='homeheader-logo'></div>
                            </div>
                        </div>
                        <div className='second-content'>
                            <div className='child-content'>
                                <div className='first-child-content'><b>Chuyên khoa</b></div>
                                <div className='second-child-content'>Tìm theo bác sĩ chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div className='first-child-content'><b>Cơ sở y tế</b></div>
                                <div className='second-child-content'>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='child-content'>
                                <div className='first-child-content'><b>Bác sĩ</b></div>
                                <div className='second-child-content'>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div className='first-child-content'><b>Gói khám</b></div>
                                <div className='second-child-content'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='third-content'>
                            <i className="fas fa-question"></i>
                            <div className='support'>Hỗ trợ</div>
                        </div>
                    </div>
                </div>
                <div className='homeheader-banner'>
                    <div className='first-banner-content'>
                        <div className='first-text'>NỀN TẢNG Y TẾ</div>
                        <div className='second-text'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input className='input-search' type='text' placeholder='Tìm kiếm' />
                        </div>
                    </div>
                    <div className='second-banner-content'>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-hospital"></i>
                            </div>
                            <div className='option-text'>Khám chuyên khoa</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-mobile"></i>
                            </div>
                            <div className='option-text'>Khám từ xa</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-clipboard"></i>
                            </div>
                            <div className='option-text'>Khám tổng quát</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-vial"></i>
                            </div>
                            <div className='option-text'>Xét nghiệm y học</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-procedures"></i>
                            </div>
                            <div className='option-text'>Sức khỏe tinh thần</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-utensils"></i>
                            </div>
                            <div className='option-text'>Khám nha khoa</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-cut"></i>
                            </div>
                            <div className='option-text'>Gói phẫu thuật</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-superscript"></i>
                            </div>
                            <div className='option-text'>Bài test sức khỏe</div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i class="fas fa-h-square"></i>
                            </div>
                            <div className='option-text'>Y tế gần bạn</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
