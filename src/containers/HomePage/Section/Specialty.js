import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "../../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";

class Specialty extends Component {

    render() {
        return (
            <div className='section-container specialty-container'>
                <div className='section-content specialty-content'>
                    <div className='slide-text'>
                        <h3 className='slide-title'>Chuyên khoa</h3>
                        <button className='slide-button'>Xem thêm</button>
                    </div>
                    <div className='slide'>
                        <Slider {...this.props.settings}>
                            <div className='slide-item'>
                                <div className='section-item specialty-item'>
                                </div>
                                <h3 className='section-text specialty-text'>Chuyên khoa 1</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item specialty-item'>
                                </div>
                                <h3 className='section-text specialty-text'>Chuyên khoa 2</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item specialty-item'>
                                </div>
                                <h3 className='section-text specialty-text'>Chuyên khoa 3</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item specialty-item'>
                                </div>
                                <h3 className='section-text specialty-text'>Chuyên khoa 4</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item specialty-item'>
                                </div>
                                <h3 className='section-text specialty-text'>Chuyên khoa 5</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item specialty-item'>
                                </div>
                                <h3 className='section-text specialty-text'>Chuyên khoa 6</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
