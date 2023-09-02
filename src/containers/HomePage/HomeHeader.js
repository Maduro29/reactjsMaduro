import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {

        return (
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
