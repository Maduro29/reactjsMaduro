import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

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
                                <div className='first-child-content'><b>
                                    <FormattedMessage id="homeheader.specialty" /></b></div>
                                <div className='second-child-content'>
                                    <FormattedMessage id="homeheader.specialtyfind" />
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='first-child-content'><b>
                                    <FormattedMessage id="homeheader.facility" /></b></div>
                                <div className='second-child-content'>
                                    <FormattedMessage id="homeheader.facilityfind" />
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='first-child-content'><b>
                                    <FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='second-child-content'>
                                    <FormattedMessage id="homeheader.doctorfind" />
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='first-child-content'><b>
                                    <FormattedMessage id="homeheader.package" /></b></div>
                                <div className='second-child-content'>
                                    <FormattedMessage id="homeheader.generalpackage" />
                                </div>
                            </div>
                        </div>
                        <div className='third-content'>
                            <div className='support'>
                                <i className="fas fa-question"></i>
                                <div className='support-text'>
                                    <FormattedMessage id="homeheader.support" /></div>
                            </div>
                            <div className='language'>
                                <div className={this.props.language === 'vi' ? 'language-vi active' : 'language-vi'}>
                                    <span onClick={() => this.changeLanguage('vi')}>{LANGUAGES.VI}</span>
                                </div>
                                <div className={this.props.language === 'en' ? 'language-en active' : 'language-en'}>
                                    <span onClick={() => this.changeLanguage('en')}>{LANGUAGES.EN}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeheader-banner'>
                    <div className='first-banner-content'>
                        <div className='first-text'>
                            <FormattedMessage id="banner.firsttext" />
                        </div>
                        <div className='second-text'>
                            <FormattedMessage id="banner.secondtext" />
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input className='input-search' type='text' placeholder="Tìm kiếm/Search" />
                        </div>
                    </div>
                    <div className='second-banner-content'>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-hospital"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option1" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-mobile"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option2" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-clipboard"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option3" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-vial"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option4" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-procedures"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option5" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option6" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-cut"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option7" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-superscript"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option8" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-item'>
                                <i className="fas fa-h-square"></i>
                            </div>
                            <div className='option-text'>
                                <FormattedMessage id="banner.option9" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
