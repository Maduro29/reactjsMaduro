import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "../../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";

class Specialty extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className='specialty-container'>
                <div className='specialty-content'>
                    <div className='slide-text'>
                        <h3 className='slide-title'>Chuyên khoa</h3>
                        <button className='slide-button'>Xem thêm</button>
                    </div>
                    <div className='slide'>
                        <Slider {...settings}>
                            <div className='slide-item'>
                                <div className='specialty-item'>
                                </div>
                                <h3 className='specialty-text'>Chuyên khoa 1</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='specialty-item'>
                                </div>
                                <h3 className='specialty-text'>Chuyên khoa 2</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='specialty-item'>
                                </div>
                                <h3 className='specialty-text'>Chuyên khoa 3</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='specialty-item'>
                                </div>
                                <h3 className='specialty-text'>Chuyên khoa 4</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='specialty-item'>
                                </div>
                                <h3 className='specialty-text'>Chuyên khoa 5</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='specialty-item'>
                                </div>
                                <h3 className='specialty-text'>Chuyên khoa 6</h3>
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
