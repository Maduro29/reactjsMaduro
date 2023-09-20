import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandingDoctor.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "../../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";

class OutstandingDoctor extends Component {

    render() {
        return (
            <div className='section-container doctor-container'>
                <div className='section-content doctor-content'>
                    <div className='slide-text'>
                        <h3 className='slide-title'>Bác sĩ nổi bật</h3>
                        <button className='slide-button'>Xem thêm</button>
                    </div>
                    <div className='slide'>
                        <Slider {...this.props.settings}>
                            <div className='slide-item'>
                                <div className='section-item'>
                                    <div className='doctor-item'></div>
                                    <h3 className='section-text doctor-name'>Bác sĩ trưởng Blazers, Anton Anton</h3>
                                    <span className='doctor-description'>Bác sĩ tổng quát</span>
                                </div>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item'>
                                    <div className='doctor-item'></div>
                                    <h3 className='section-text doctor-name'>Bác sĩ trưởng Blazers, Anton Anton</h3>
                                    <span className='doctor-description'>Bác sĩ tổng quát</span>
                                </div>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item'>
                                    <div className='doctor-item'></div>
                                    <h3 className='section-text doctor-name'>Bác sĩ trưởng Blazers, Anton Anton</h3>
                                    <span className='doctor-description'>Bác sĩ tổng quát</span>
                                </div>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item'>
                                    <div className='doctor-item'></div>
                                    <h3 className='section-text doctor-name'>Bác sĩ trưởng Blazers, Anton Anton</h3>
                                    <span className='doctor-description'>Bác sĩ tổng quát</span>
                                </div>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item'>
                                    <div className='doctor-item'></div>
                                    <h3 className='section-text doctor-name'>Bác sĩ trưởng Blazers, Anton Anton</h3>
                                    <span className='doctor-description'>Bác sĩ tổng quát</span>
                                </div>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item'>
                                    <div className='doctor-item'></div>
                                    <h3 className='section-text doctor-name'>Bác sĩ trưởng Blazers, Anton Anton</h3>
                                    <span className='doctor-description'>Bác sĩ tổng quát</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
